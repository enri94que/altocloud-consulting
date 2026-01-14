import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
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
  company: z.string().optional(),
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
  { value: "Sales_Cloud", label: "Sales Cloud" },
  { value: "Service_Cloud", label: "Service Cloud" },
  { value: "Nonprofit_Cloud", label: "Nonprofit Cloud" },
  { value: "Starter_and_Pro_Suite", label: "Starter & Pro Suite" },
  { value: "Otro", label: "Otro" },
];

const numEmpleadosOptions = [
  { value: "1_10", label: "1-10" },
  { value: "10_20", label: "10-20" },
  { value: "20_50", label: "20-50" },
  { value: "50_100", label: "50-100" },
  { value: "100_200", label: "100-200" },
  { value: "200_500", label: "200-500" },
  { value: "_500", label: "+500" },
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
  const formRef = useRef<HTMLFormElement>(null);

  const [retURL, setRetURL] = useState("");

  useEffect(() => {
    setRetURL(window.location.href);
  }, []);

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

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Submit the hidden Salesforce form
    if (formRef.current) {
      formRef.current.submit();
    }

    // Since Salesforce doesn't support CORS, we use a timeout to show success
    // The form submits to an iframe, so we can't detect actual completion
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: variant === "demo" ? "¡Solicitud de demo recibida!" : "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      form.reset();
      setIsOpen(false);
    }, 1500);
  };

  const title = variant === "demo" ? "Solicitar Demo" : variant === "pricing" ? "Solicitar Información" : "Contactar";
  const description =
    variant === "demo"
      ? "Rellena el formulario y te contactaremos para programar una demostración personalizada."
      : variant === "pricing"
        ? "Rellena el formulario y te enviaremos información detallada sobre precios y licencias."
        : "Rellena el formulario y nos pondremos en contacto contigo.";

  const showExtraFields = variant === "demo" || variant === "pricing";

  const formValues = form.watch();

  return (
    <>
      {/* Hidden iframe target for form submission */}
      <iframe name="salesforce_submit_frame" style={{ display: "none" }} title="Salesforce form target" />

      {/* Hidden Salesforce Web-to-Lead form - this is the actual form that submits */}
      <form
        ref={formRef}
        method="POST"
        action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DWV00000GKmiP"
        target="salesforce_submit_frame"
        style={{ display: "none" }}
      >
        {/* Organization ID - REQUIRED */}
        <input type="hidden" name="oid" value="00DWV00000GKmiP" />
        <input type="hidden" name="retURL" value={retURL} />

        {/* Standard Salesforce Lead fields - using exact API names */}
        <input type="hidden" name="last_name" value={formValues.name || ""} />
        <input type="hidden" name="email" value={formValues.email || ""} />
        <input type="hidden" name="company" value={formValues.company || ""} />
        <input type="hidden" name="phone" value={formValues.phone || ""} />
        <input type="hidden" name="title" value={formValues.puesto || ""} />
        <input type="hidden" name="description" value={formValues.description || ""} />

        {/* Custom fields - using exact API Names from Notion specification */}
        <input type="hidden" name="N_de_empleados__c" value={formValues.num_empleados || ""} />
        <input type="hidden" name="Servicio_de_inter_s__c" value={formValues.servicio || ""} />
        <input type="hidden" name="Acepta_la_P_de_Privacidad__c" value={formValues.privacidad ? "1" : ""} />
        <input type="hidden" name="Plataforma__c" value="Lovable" />

        {/* Hidden fields with default values - using exact Salesforce API Names */}
        <input type="hidden" name="rating" value="Hot" />
        <input type="hidden" name="lead_source" value="Web" />
      </form>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
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
                      <Textarea placeholder="Cuéntanos sobre tu proyecto..." className="min-h-[100px]" {...field} />
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
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-normal">
                        He leído y acepto la{" "}
                        <Link to="/politica-privacidad" target="_blank" className="text-primary hover:underline">
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
