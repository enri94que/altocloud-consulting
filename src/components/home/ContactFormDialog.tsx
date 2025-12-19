import { useState } from "react";
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
  first_name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
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
  variant: "demo" | "contact";
  children: React.ReactNode;
}

const ContactFormDialog = ({ variant, children }: ContactFormDialogProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      first_name: "",
      email: "",
      phone: "",
      company: "",
      num_empleados: "",
      puesto: "",
      servicio: "",
      description: "",
      privacidad: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Create form data for Salesforce Web-to-Lead
      const formData = new FormData();
      
      // Hidden fields
      formData.append("oid", "00DWV00000GKmiP");
      formData.append("retURL", window.location.origin);
      
      // Visible fields
      formData.append("first_name", data.first_name);
      formData.append("email", data.email);
      formData.append("phone", data.phone || "");
      formData.append("company", data.company || "");
      formData.append("00NWV000008Q0Hp", data.num_empleados || ""); // N_de_empleados__c - Número de empleados
      formData.append("title", data.puesto || ""); // Puesto en la empresa
      formData.append("00NWV000008Pzzl", data.servicio || ""); // Servicio de interés
      formData.append("description", data.description || "");
      formData.append("00NWV000008Pzmr", data.privacidad ? "1" : ""); // Acepta Política Privacidad
      
      // Campos ocultos con valores por defecto según Notion
      formData.append("00NWV0000088Qn7", "Lovable"); // Plataforma
      formData.append("rating", "Caliente"); // Valoración
      formData.append("lead_source", "Web"); // Origen del candidato

      // Submit to Salesforce Web-to-Lead
      await fetch("https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DWV00000GKmiP", {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      toast({
        title: variant === "demo" ? "¡Solicitud de demo recibida!" : "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      
      form.reset();
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un error al enviar el formulario. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const title = variant === "demo" ? "Solicitar Demo" : "Contactar";
  const description = variant === "demo" 
    ? "Rellena el formulario y te contactaremos para programar una demostración personalizada."
    : "Rellena el formulario y nos pondremos en contacto contigo.";

  return (
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
                name="first_name"
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

            {/* Campos adicionales solo visibles en formulario de Demo */}
            {variant === "demo" && (
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
  );
};

export default ContactFormDialog;
