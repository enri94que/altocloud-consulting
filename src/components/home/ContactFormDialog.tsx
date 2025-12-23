import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Send, Play } from "lucide-react";


// ... imports iguales

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Introduce un email válido"),
  phone: z.string().optional(),
  company: z.string().optional(), // lo haremos obligatorio en el submit si falta
  num_empleados: z.string().optional(),
  puesto: z.string().optional(),
  servicio: z.string().optional(),
  description: z.string().optional(),
  privacidad: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar la política de privacidad",
  }),
});

const ContactFormDialog = ({ variant, children, defaultService }: ContactFormDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      num_empleados: "",
      puesto: "",
      servicio: defaultService || "",
      description: "",
      privacidad: false,
    },
  });

  const onIframeLoad = () => {
    // Opcional: si pones retURL a una página tuya /gracias, aquí sabrás que llegó bien
    try {
      const href = (iframeRef.current?.contentWindow as Window)?.location?.href || "";
      if (href.includes("/gracias")) {
        setIsSubmitting(false);
        toast({
          title: variant === "demo" ? "¡Solicitud de demo recibida!" : "¡Mensaje enviado!",
          description: "Nos pondremos en contacto contigo pronto.",
        });
        form.reset();
        setIsOpen(false);
      }
    } catch {
      // Si aún está en dominio de Salesforce o cross-origin, ignoramos; el timeout fallback se encargará.
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    const nameParts = (data.name || "").trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || firstName || "Desconocido";

    // company obligatorio para Web-to-Lead
    const company = (data.company || "").trim() || "Individual"; // fallback seguro

    // Rellena los hidden con los valores del submit (no de watch)
    if (formRef.current) {
      const setHidden = (name: string, value: string) => {
        const input = formRef.current!.querySelector<HTMLInputElement>(`input[name="${name}"]`);
        if (input) input.value = value;
      };

      setHidden("first_name", firstName);
      setHidden("last_name", lastName);
      setHidden("email", data.email || "");
      setHidden("company", company);
      setHidden("phone", data.phone || "");
      setHidden("title", data.puesto || "");
      setHidden("description", data.description || "");

      // Picklists / custom fields — ojo con los API values
      setHidden("00NWV000008PzZy", data.num_empleados || "");
      setHidden("00NWV000008Pzzl", data.servicio || "");
      setHidden("00NWV000008Pzmr", data.privacidad ? "1" : "");

      // Si usas reCAPTCHA v2/v3, aquí deberías obtener el token y setear:
      // setHidden("g-recaptcha-response", token);

      formRef.current.submit();
    }

    // Fallback UX si no usas onLoad con retURL propia
    const timer = setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: variant === "demo" ? "¡Solicitud de demo recibida!" : "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      form.reset();
      setIsOpen(false);
    }, 2000);

    // Limpieza si el iframe confirma antes
    return () => clearTimeout(timer);
  };

  const title =
    variant === "demo" ? "Solicitar Demo" :
    variant === "pricing" ? "Solicitar Información" :
    "Contactar";

  const description =
    variant === "demo"
      ? "Rellena el formulario y te contactaremos para programar una demostración personalizada."
      : variant === "pricing"
      ? "Rellena el formulario y te enviaremos información detallada sobre precios y licencias."
      : "Rellena el formulario y nos pondremos en contacto contigo.";

  const showExtraFields = variant === "demo" || variant === "pricing";

  return (
    <>
      {/* Iframe target para el submit */}
      <iframe
        ref={iframeRef}
        name="salesforce_submit_frame"
        style={{ display: "none" }}
        title="Salesforce form target"
        onLoad={onIframeLoad}
      />

      {/* Formulario Web-to-Lead real (oculto) */}
      <form
        ref={formRef}
        method="POST"
        action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
        target="salesforce_submit_frame"
        style={{ display: "none" }}
        acceptCharset="UTFmar vía onLoad */}
        <input type="hidden" name="retURL" value="https://tu-dominio.com/gracias" />

        {/* Debug para ver errores si algo falla */}
        <input type="hidden" name="debug" value="1" />
        <input type="hidden" name="debugEmail" value="tu@correo.com" />

        {/* Campos estándar (se rellenan en onSubmit) */}
        <input type="hidden" name="first_name" defaultValue="" />
        <input type="hidden" name="last_name" defaultValue="" />
        <input type="hidden" name="email" defaultValue="" />
        <input type="hidden" name="company" defaultValue="" />
        <input type="hidden" name="phone" defaultValue="" />
        <input type="hidden" name="title" defaultValue="" />
        <input type="hidden" name="description" defaultValue="" />

        {/* Custom fields */}
        <input type="hidden" name="00NWV000008PzZy" defaultValue="" />
        <input type="hidden" name="00NWV000008Pzzl" defaultValue="" />
        <input type="hidden" name="00NWV000008Pzmr" defaultValue="" />
        <input type="hidden" name="00NWV0000088Qn7" value="Lovable" />

        {/* Picklists con valores que EXISTAN en tu org */}
        <input type="hidden" name="rating" value="Hot" />
        <input type="hidden" name="lead_source" value="Web" />

        {/* reCAPTCHA (si aplica)
        <input type="hidden" name="g-recaptcha-response" defaultValue="" />
        */}
      </form>

      {/* ...tu diálogo visible y form React-Hook-Form sin cambios sustanciales... */}
    </>
  );
};

            
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactFormDialog;