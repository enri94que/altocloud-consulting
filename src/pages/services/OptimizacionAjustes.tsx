import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, TrendingUp, Target, RefreshCw, BarChart3, CheckCircle2, Wrench } from "lucide-react";
import ContactFormDialog from "@/components/home/ContactFormDialog";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/seo/SEO";

const OptimizacionAjustes = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: TrendingUp,
      title: "Mejora del Rendimiento",
      titleEn: "Performance Improvement",
      description: "Optimiza la velocidad y eficiencia de tu instancia Salesforce para un mejor rendimiento.",
      descriptionEn: "Optimize the speed and efficiency of your Salesforce instance for better performance."
    },
    {
      icon: Target,
      title: "Alineación con Objetivos",
      titleEn: "Goal Alignment",
      description: "Ajusta tu CRM para que refleje los cambios en tus procesos de negocio y objetivos.",
      descriptionEn: "Adjust your CRM to reflect changes in your business processes and objectives."
    },
    {
      icon: RefreshCw,
      title: "Actualización de Funcionalidades",
      titleEn: "Feature Updates",
      description: "Implementa las últimas funcionalidades de Salesforce y mejores prácticas del sector.",
      descriptionEn: "Implement the latest Salesforce features and industry best practices."
    },
    {
      icon: BarChart3,
      title: "Mejora de Reportes",
      titleEn: "Enhanced Reporting",
      description: "Optimiza dashboards y reportes para obtener insights más valiosos de tus datos.",
      descriptionEn: "Optimize dashboards and reports to get more valuable insights from your data."
    }
  ];

  const services = [
    {
      title: "Auditoría de la Org",
      titleEn: "Org Audit",
      description: "Análisis completo de tu configuración actual, identificando áreas de mejora y oportunidades de optimización.",
      descriptionEn: "Complete analysis of your current setup, identifying improvement areas and optimization opportunities."
    },
    {
      title: "Limpieza y Organización",
      titleEn: "Cleanup & Organization",
      description: "Eliminación de campos no utilizados, simplificación de layouts y mejora de la estructura de datos.",
      descriptionEn: "Removal of unused fields, layout simplification, and data structure improvement."
    },
    {
      title: "Automatizaciones",
      titleEn: "Automations",
      description: "Creación y optimización de flujos, procesos y reglas para automatizar tareas repetitivas.",
      descriptionEn: "Creation and optimization of flows, processes, and rules to automate repetitive tasks."
    },
    {
      title: "Integraciones",
      titleEn: "Integrations",
      description: "Conexión con otras herramientas y sistemas para un ecosistema tecnológico más eficiente.",
      descriptionEn: "Connection with other tools and systems for a more efficient technology ecosystem."
    },
    {
      title: "Personalización Avanzada",
      titleEn: "Advanced Customization",
      description: "Desarrollo de funcionalidades específicas para tus necesidades únicas de negocio.",
      descriptionEn: "Development of specific functionalities for your unique business needs."
    },
    {
      title: "Migración de Datos",
      titleEn: "Data Migration",
      description: "Importación, exportación y transformación de datos de forma segura y eficiente.",
      descriptionEn: "Safe and efficient data import, export, and transformation."
    }
  ];

  return (
    <>
      <SEO 
        title={t('language') === 'es' 
          ? "Optimización y Ajustes Salesforce | Consultor Salesforce España" 
          : "Salesforce Optimization & Adjustments | Salesforce Consultant Spain"}
        description={t('language') === 'es'
          ? "Mejora el rendimiento de tu Salesforce existente. Optimización, ajustes y mejoras para organizaciones que ya tienen su CRM implementado."
          : "Improve the performance of your existing Salesforce. Optimization, adjustments, and improvements for organizations that already have their CRM implemented."}
        canonical="/servicios/optimizacion-ajustes"
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
                <Settings className="w-4 h-4" />
                {t('language') === 'es' ? 'Para organizaciones con Salesforce' : 'For organizations with Salesforce'}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {t('language') === 'es' ? (
                  <>Optimización y <span className="text-primary">Ajustes</span> Salesforce</>
                ) : (
                  <>Salesforce <span className="text-primary">Optimization</span> & Adjustments</>
                )}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t('language') === 'es' 
                  ? "¿Ya tienes Salesforce pero no está funcionando como esperabas? Te ayudo a optimizar, ajustar y mejorar tu configuración actual."
                  : "Already have Salesforce but it's not working as expected? I help you optimize, adjust, and improve your current setup."}
              </p>
              
              <ContactFormDialog variant="demo">
                <Button size="lg" className="text-lg px-8 py-6">
                  {t('language') === 'es' ? 'Solicitar Auditoría' : 'Request Audit'}
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
                {t('language') === 'es' ? 'Beneficios de la Optimización' : 'Optimization Benefits'}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('language') === 'es' 
                  ? 'Maximiza el retorno de tu inversión en Salesforce con mejoras enfocadas en resultados.'
                  : 'Maximize your Salesforce investment return with results-focused improvements.'}
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

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('language') === 'es' ? 'Servicios de Optimización' : 'Optimization Services'}
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {t('language') === 'es' ? service.title : service.titleEn}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {t('language') === 'es' ? service.description : service.descriptionEn}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Wrench className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('language') === 'es' 
                ? '¿Tu Salesforce necesita mejoras?' 
                : 'Does your Salesforce need improvements?'}
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              {t('language') === 'es'
                ? 'Analicemos juntos tu configuración actual y encontremos las oportunidades de mejora.'
                : "Let's analyze your current setup together and find improvement opportunities."}
            </p>
            <ContactFormDialog variant="demo">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                {t('language') === 'es' ? 'Solicitar Auditoría Gratuita' : 'Request Free Audit'}
              </Button>
            </ContactFormDialog>
          </div>
        </section>
      </main>
    </>
  );
};

export default OptimizacionAjustes;
