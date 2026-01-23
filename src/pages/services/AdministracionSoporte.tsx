import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HeadsetIcon, Shield, Clock, Users, CheckCircle2, FileText, Zap } from "lucide-react";
import ContactFormDialog from "@/components/home/ContactFormDialog";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/seo/SEO";

const AdministracionSoporte = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Shield,
      title: "Sin Preocupaciones",
      titleEn: "Peace of Mind",
      description: "Tu Salesforce siempre funcionando correctamente, sin que tengas que preocuparte por nada.",
      descriptionEn: "Your Salesforce always working correctly, without you having to worry about anything."
    },
    {
      icon: Clock,
      title: "Respuesta Rápida",
      titleEn: "Quick Response",
      description: "Atención prioritaria para resolver incidencias y mantener tu operación sin interrupciones.",
      descriptionEn: "Priority attention to resolve incidents and keep your operation running smoothly."
    },
    {
      icon: Users,
      title: "Gestión de Usuarios",
      titleEn: "User Management",
      description: "Altas, bajas, permisos y configuración de usuarios sin complicaciones.",
      descriptionEn: "User creation, removal, permissions, and configuration without complications."
    },
    {
      icon: Zap,
      title: "Mejora Continua",
      titleEn: "Continuous Improvement",
      description: "Implementación proactiva de mejoras y nuevas funcionalidades de Salesforce.",
      descriptionEn: "Proactive implementation of improvements and new Salesforce features."
    }
  ];

  const services = [
    {
      title: "Gestión de Usuarios",
      titleEn: "User Management",
      items: [
        { es: "Altas y bajas de usuarios", en: "User creation and removal" },
        { es: "Configuración de perfiles y permisos", en: "Profile and permission configuration" },
        { es: "Gestión de roles y jerarquías", en: "Role and hierarchy management" },
        { es: "Reset de contraseñas y accesos", en: "Password and access resets" }
      ]
    },
    {
      title: "Mantenimiento Diario",
      titleEn: "Daily Maintenance",
      items: [
        { es: "Monitorización de límites y rendimiento", en: "Limit and performance monitoring" },
        { es: "Gestión de almacenamiento", en: "Storage management" },
        { es: "Actualización de campos y layouts", en: "Field and layout updates" },
        { es: "Mantenimiento de automatizaciones", en: "Automation maintenance" }
      ]
    },
    {
      title: "Soporte y Resolución",
      titleEn: "Support & Resolution",
      items: [
        { es: "Resolución de incidencias", en: "Incident resolution" },
        { es: "Soporte a usuarios finales", en: "End-user support" },
        { es: "Diagnóstico y corrección de errores", en: "Error diagnosis and correction" },
        { es: "Escalado a Salesforce cuando necesario", en: "Escalation to Salesforce when needed" }
      ]
    },
    {
      title: "Reportes y Datos",
      titleEn: "Reports & Data",
      items: [
        { es: "Creación y mantenimiento de reportes", en: "Report creation and maintenance" },
        { es: "Configuración de dashboards", en: "Dashboard configuration" },
        { es: "Limpieza y calidad de datos", en: "Data cleanup and quality" },
        { es: "Importación y exportación de datos", en: "Data import and export" }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title={t('language') === 'es' 
          ? "Administración y Soporte Salesforce | System Admin Externo" 
          : "Salesforce Administration & Support | External System Admin"}
        description={t('language') === 'es'
          ? "Servicio de administración Salesforce como System Admin externo. Mantenimiento, resolución de incidencias y gestión diaria de tu CRM."
          : "Salesforce administration service as external System Admin. Maintenance, incident resolution, and daily CRM management."}
        canonical="/servicios/administracion-soporte"
      />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <HeadsetIcon className="w-4 h-4" />
                {t('language') === 'es' ? 'System Admin como Servicio' : 'System Admin as a Service'}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {t('language') === 'es' ? (
                  <>Administración y <span className="text-primary">Soporte</span> Continuo</>
                ) : (
                  <>Continuous <span className="text-primary">Administration</span> & Support</>
                )}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t('language') === 'es' 
                  ? "Tu System Admin externo dedicado. Mantenimiento, soporte y gestión diaria de Salesforce sin contratar un recurso a tiempo completo."
                  : "Your dedicated external System Admin. Salesforce maintenance, support, and daily management without hiring a full-time resource."}
              </p>
              
              <ContactFormDialog variant="demo">
                <Button size="lg" className="text-lg px-8 py-6">
                  {t('language') === 'es' ? 'Solicitar Información' : 'Request Information'}
                </Button>
              </ContactFormDialog>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('language') === 'es' ? '¿Por qué un Admin externo?' : 'Why an external Admin?'}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('language') === 'es' 
                  ? 'Experiencia profesional sin el coste de un empleado a tiempo completo.'
                  : 'Professional experience without the cost of a full-time employee.'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t('language') === 'es' ? benefit.title : benefit.titleEn}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t('language') === 'es' ? benefit.description : benefit.descriptionEn}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('language') === 'es' ? '¿Qué incluye el servicio?' : 'What does the service include?'}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-primary" />
                      {t('language') === 'es' ? service.title : service.titleEn}
                    </h3>
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">
                            {t('language') === 'es' ? item.es : item.en}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <HeadsetIcon className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('language') === 'es' 
                ? '¿Necesitas un administrador de Salesforce?' 
                : 'Need a Salesforce administrator?'}
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              {t('language') === 'es'
                ? 'Cuéntame tus necesidades y encontraremos el plan de soporte adecuado para tu organización.'
                : "Tell me your needs and we'll find the right support plan for your organization."}
            </p>
            <ContactFormDialog variant="demo">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                {t('language') === 'es' ? 'Contactar Ahora' : 'Contact Now'}
              </Button>
            </ContactFormDialog>
          </div>
        </section>
      </main>
    </>
  );
};

export default AdministracionSoporte;
