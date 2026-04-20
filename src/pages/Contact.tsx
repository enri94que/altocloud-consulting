import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PhoneInput from "@/components/ui/phone-input";
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
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t, language } = useLanguage();

  const contactSchema = z.object({
    nombre: z.string().min(2, language === "es" ? "El nombre debe tener al menos 2 caracteres" : "Name must have at least 2 characters"),
    email: z.string().email(language === "es" ? "Introduce un email válido" : "Enter a valid email"),
    telefono: z.string().optional(),
    empresa: z.string().optional(),
    mensaje: z.string().optional(),
    privacyAccepted: z.boolean().refine((val) => val === true, {
      message: language === "es" ? "Debes aceptar la política de privacidad" : "You must accept the privacy policy",
    }),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

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
      const iframe = document.createElement('iframe');
      iframe.name = 'contact_form_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      const hiddenForm = document.createElement('form');
      hiddenForm.method = 'POST';
      hiddenForm.action = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DWV00000GKmiP';
      hiddenForm.target = 'contact_form_iframe';

      const addField = (name: string, value: string) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        hiddenForm.appendChild(input);
      };

      addField('oid', '00DWV00000GKmiP');
      addField('retURL', window.location.origin);
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

      setTimeout(() => {
        document.body.removeChild(hiddenForm);
        document.body.removeChild(iframe);
      }, 1000);

      toast({
        title: t("form.successContact"),
        description: t("form.successDesc"),
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: language === "es" ? "Hubo un error al enviar el formulario. Inténtalo de nuevo." : "There was an error sending the form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title={language === "es" ? "Contacto - Consultoría Salesforce" : "Contact - Salesforce Consulting"}
        description={language === "es" ? "Contacta con AltoCloud para consultoría Salesforce en España. Información sobre Sales Cloud, Service Cloud, Nonprofit Cloud y Starter Suite." : "Contact AltoCloud for Salesforce consulting in Spain. Information about Sales Cloud, Service Cloud, Nonprofit Cloud and Starter Suite."}
        canonical="/contacto"
      />
      <StructuredData
        type="webpage"
        name={t("contact.title")}
        description={language === "es" ? "Formulario de contacto para consultoría Salesforce." : "Contact form for Salesforce consulting."}
        url="/contacto"
      />
      {/* Hero */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            {t("contact.subtitle")}
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
                {t("contact.info.title")}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t("contact.info.email")}</h3>
                    <a 
                      href="mailto:enrique@altocloud-consulting.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={language === "es" ? "Enviar email a AltoCloud Consulting" : "Send email to AltoCloud Consulting"}
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
                    <h3 className="font-semibold text-foreground">{t("contact.info.phone")}</h3>
                    <a 
                      href="tel:+34912560299" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={language === "es" ? "Llamar a AltoCloud Consulting" : "Call AltoCloud Consulting"}
                    >
                      +34 912 56 02 99
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t("contact.info.location")}</h3>
                    <p className="text-muted-foreground">{t("footer.location")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-card p-8 rounded-2xl border border-border shadow-card">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  {t("contact.form.title")}
                </h2>
                <Form {...form}>
                <form 
                  id="form-contact-page"
                  data-form-type="contact-page"
                  onSubmit={form.handleSubmit(onSubmit)} 
                  className="space-y-6"
                >
                    <div className="grid md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="nombre"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>{t("contact.form.name")} *</FormLabel>
                            <FormControl>
                              <Input placeholder={language === "es" ? "Tu nombre" : "Your name"} maxLength={40} {...field} />
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
                            <FormLabel>{t("contact.form.email")} *</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder={language === "es" ? "tu@email.com" : "you@email.com"} maxLength={80} {...field} />
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
                            <FormLabel>{t("contact.form.phone")}</FormLabel>
                            <FormControl>
                              <PhoneInput 
                                value={field.value || ""} 
                                onChange={field.onChange}
                                placeholder="600 000 000"
                              />
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
                            <FormLabel>{t("contact.form.company")}</FormLabel>
                            <FormControl>
                              <Input placeholder={language === "es" ? "Nombre de tu empresa" : "Your company name"} maxLength={40} {...field} />
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
                          <FormLabel>{t("contact.form.message")}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t("contact.form.messagePlaceholder")}
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
                              {t("contact.form.privacy")}{" "}
                              <Link
                                to="/politica-privacidad"
                                target="_blank"
                                className="text-primary hover:underline"
                              >
                                {t("contact.form.privacyLink")}
                              </Link>{" "}
                              *
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                      {isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
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
