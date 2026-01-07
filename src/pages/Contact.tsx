import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import SEO from "@/components/seo/SEO";
import StructuredData from "@/components/seo/StructuredData";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const contactSchema = z.object({
  nombre: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Introduce un email válido"),
  telefono: z.string().optional(),
  empresa: z.string().optional(),
  mensaje: z.string().optional(),
  privacyAccepted: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar la política de privacidad",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nombre: "",
      email: "",
      telefono: "",
      empresa: "",
      mensaje: "",
      privacyAccepted: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Create a hidden form and submit to iframe (same technique as ContactFormDialog)
      const iframe = document.createElement('iframe');
      iframe.name = 'contact_form_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      const hiddenForm = document.createElement('form');
      hiddenForm.method = 'POST';
      hiddenForm.action = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DWV00000GKmiP';
      hiddenForm.target = 'contact_form_iframe';

      // Helper to add hidden inputs
      const addField = (name: string, value: string) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        hiddenForm.appendChild(input);
      };

      // Hidden fields
      addField('oid', '00DWV00000GKmiP');
      addField('retURL', window.location.origin);

      // Form fields - using Salesforce API Names per Notion spec
      addField('first_name', data.nombre);
      addField('last_name', data.nombre);
      addField('email', data.email);
      addField('phone', data.telefono || '');
      addField('company', data.empresa || '');
      addField('description', data.mensaje || '');
      addField('Acepta_la_P_de_Privacidad__c', data.privacyAccepted ? '1' : '');
      addField('Plataforma__c', 'Lovable');
      addField('lead_source', 'Web');
      addField('rating', 'Caliente');

      document.body.appendChild(hiddenForm);
      hiddenForm.submit();

      // Cleanup after submission
      setTimeout(() => {
        document.body.removeChild(hiddenForm);
        document.body.removeChild(iframe);
      }, 1000);

      toast({
        title: "¡Mensaje enviado!",
        description: "Nos pondremos en contacto contigo pronto.",
      });
      
      form.reset();
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

  return (
    <Layout>
      <SEO
        title="Contacto - Consultoría Salesforce"
        description="Contacta con AltoCloud para consultoría Salesforce en España. Información sobre Sales Cloud, Service Cloud, Nonprofit Cloud y Starter Suite."
        canonical="/contacto"
      />
      <StructuredData
        type="webpage"
        name="Contacto"
        description="Formulario de contacto para consultoría Salesforce."
        url="/contacto"
      />
      {/* Hero */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Contacto
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            ¿Tienes preguntas sobre nuestros servicios? Estamos aquí para ayudarte.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Información de contacto
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a 
                      href="mailto:enrique@altocloud-consulting.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Enviar email a AltoCloud Consulting"
                    >
                      enrique@altocloud-consulting.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Teléfono</h3>
                    <a 
                      href="tel:+34681229933" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Llamar a AltoCloud Consulting"
                    >
                      +34 681 22 99 33
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Ubicación</h3>
                    <p className="text-muted-foreground">España</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 rounded-2xl border border-border shadow-card">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Envíanos un mensaje
                </h2>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="nombre"
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
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="tu@email.com" maxLength={80} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="telefono"
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
                        name="empresa"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Empresa</FormLabel>
                            <FormControl>
                              <Input placeholder="Nombre de tu empresa" maxLength={40} {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="mensaje"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Cuéntanos sobre tu proyecto..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="privacyAccepted"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal cursor-pointer">
                              He leído y acepto la{" "}
                              <Link
                                to="/politica-privacidad"
                                target="_blank"
                                className="text-primary hover:underline"
                              >
                                Política de Privacidad
                              </Link>{" "}
                              *
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                      {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                      <Send className="h-4 w-4 ml-2" />
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
