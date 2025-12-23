
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

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  { value: "Sales Cloud", label: "Sales Cloud" },
  { value: "Service Cloud", label: "Service Cloud" },
  { value: "Nonprofit Cloud", label: "Nonprofit Cloud" },
  { value: "Starter and Pro Suite", label: "Starter & Pro Suite" },
  { value: "Otro", label: "Otro" },
];

const numEmpleadosOptions = [
  { value: "1-10", label: "1-10" },
  { value: "10-20", label: "10-20" },
  { value: "20-50", label: "20-50" },
  { value: "50-100", label: "50-100" },
  { value: "100-200", label: "100-200" },
  { value: "200-500", label: "200-500" },
  { value: "+500", label: "+500" },
];

interface ContactFormDialogProps {
  variant: "demo" | "contact" | "pricing";
  children: React.ReactNode;
  defaultService?: string;
}

const ContactFormDialog = ({ variant, children, defaultService }: ContactFormDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const salesforceFormRef = useRef<HTMLFormElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const timeoutRef = useRef<number | null>(null);

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

  // Confirmación real si retURL es same-origin: el iframe "carga" tu URL de gracias.
  const onIframeLoad = () => {
    try {
      // Solo funcionará si retURL apunta a tu propio dominio (same-origin)
      const href = (iframeRef.current?.contentWindow as Window)?.location?.href || "";
      if (href && href.includes("/gracias")) {
        // Éxito confirmado por redirección del endpoint de Web-to-Lead
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        setIsSubmitting(false);
        toast({
          title: variant === "demo" ? "¡Solicitud de demo recibida!" : "¡Mensaje enviado!",
          description: "Nos pondremos en contacto contigo pronto.",
        });
        form.reset();
        setIsOpen(false);
      }
    } catch {
      // Si es cross-origin (Salesforce), no podemos inspeccionar el href y el fallback de timeout se encargará
    }
  };

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Split nombre -> first/last; last_name es obligatorio en SF
    const nameParts = (data.name || "").trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || firstName || "Desconocido";

    // company es obligatorio en Web-to-Lead. Si falta, ponemos "Individual" por defecto
    const company = (data.company || "").trim() || "Individual";

    if (salesforceFormRef.current) {
      const setHidden = (name: string, value: string) => {
        const input = salesforceFormRef.current!.querySelector<HTMLInputElement>(`input[name="${name}"]`);
        if (input) input.value = value;
      };

      // Campos estándar
      setHidden("first_name", firstName);
      setHidden("last_name", lastName);
      setHidden("email", data.email || "");
      setHidden("company", company);
      setHidden("phone", data.phone || "");
      setHidden("title", data.puesto || "");
      setHidden("description", data.description || "");

      // Custom fields — deben ser los IDs de campo correctos en tu org
      setHidden("00NWV000008PzZy", data.num_empleados || "");
      setHidden("00NWV000008Pzzl", data.servicio || "");
      setHidden("00NWV000008Pzmr", data.privacidad ? "1" : "");

      // Si tienes reCAPTCHA activado en Setup -> Web-to-Lead, aquí deberías obtener y setear el token:
      // const token = await grecaptcha.execute('TU_SITE_KEY', { action: 'submit' });
      // setHidden("g-recaptcha-response", token);

      // Enviar el form real a Salesforce (submit clásico => no CORS)
      salesforceFormRef.current.submit();
    }

    // Fallback UX si no puedes confirmar con onLoad (cross-origin)
    timeoutRef.current = window.setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: variant === "demo" ? "¡Solicitud de demo recibida!" : "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      form.reset();
      setIsOpen(false);
    }, 2000);
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
      {/* Iframe oculto para el target del submit */}
      <iframe
        ref={iframeRef}
        name="salesforce_submit_frame"
        style={{ display: "none" }}
        title="Salesforce form target"
        onLoad={onIframeLoad}
      />

      {/* Formulario Web-to-Lead real (oculto) */}
      <form
        ref={salesforceFormRef}
        method="POST"
        action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
        target="salesforce_submit_frame"
        style={{ display: "none" }}
        acceptCharset="UTF-8"
     n onLoad */}
        {/* Por ejemplo: https://tu-dominio.com/gracias */}
        <input type="hidden" name="retURL" value={window.location.href} />

        {/* Activa el debug para recibir email con el detalle del error si Salesforce rechaza el Lead */}
        <input type="hidden" name="debug" value="1" />
        <input type="hidden" name="debugEmail" value="tu@correo.com" />

        {/* Standard Salesforce Lead fields — se rellenan en onSubmit */}
        <input type="hidden" name="first_name" defaultValue="" />
        <input type="hidden" name="last_name" defaultValue="" />
        <input type="hidden" name="email" defaultValue="" />
        <input type="hidden" name="company" defaultValue="" />
        <input type="hidden" name="phone" defaultValue="" />
        <input type="hidden" name="title" defaultValue="" />
        <input type="hidden" name="description" defaultValue="" />

        {/* Custom fields — IDs de campo en tu org */}
        <input type="hidden" name="00NWV000008PzZy" defaultValue="" />
        <input type="hidden" name="00NWV000008Pzzl" defaultValue="" />
        <input type="hidden" name="00NWV000008Pzmr" defaultValue="" />
        <input type="hidden" name="00NWV0000088Qn7" value="Lovable" />

        {/* Picklists — asegúrate de que estos valores EXISTEN en tu org */}
        <input type="hidden" name="rating" value="Hot" />
        <input type="hidden" name="lead_source" value="Web" />

        {/* Si usas reCAPTCHA en Setup -> Web-to-Lead, añade este hidden y setéalo en onSubmit */}
        {/* <input type="hidden" name="g-recaptcha-response" defaultValue="" /> */}
      </form>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          {children}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-serif text-2xl">{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre *</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" maxLength={40} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo electrónico *</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="tu@email.com" maxLength={80} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Teléfono</FormLabel>
                      <FormControl>
                        <Input placeholder="+34 600 000 000" maxLength={40} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Empresa</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu empresa" maxLength={40} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Campos adicionales para Demo y Pricing */}
              {showExtraFields && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="num_empleados"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Número de empleados</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecciona" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-card border border-border z-50">
                              {numEmpleadosOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="puesto"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Puesto en tu empresa</FormLabel>
                          <FormControl>
                            <Input placeholder="Tu cargo" maxLength={40} {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="servicio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Servicio de interés</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona un servicio" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-card border border-border z-50">
                            {services.map((service) => (
                              <SelectItem key={service.value} value={service.value}>
                                {service.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Cuéntanos sobre tu proyecto..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="privacidad"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-normal">
                        He leído y acepto la{" "}
                        <Link
                          to="/politica-privacidad"
                          target="_blank"
                          className="text-primary hover:underline"
                        >
                          política de privacidad
                        </Link>{" "}
                        *
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Enviando..." : title}
                {variant === "demo" ? <Play className="h-4 w-4 ml-2" /> : <Send className="h-4 w-4 ml-2" />}
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactFormDialog;
