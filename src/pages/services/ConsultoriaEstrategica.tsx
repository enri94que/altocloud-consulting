import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Target, Users, TrendingUp, CheckCircle2, Compass, GitBranch, Award } from "lucide-react";
import ContactFormDialog from "@/components/home/ContactFormDialog";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/seo/SEO";

const ConsultoriaEstrategica = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Target,
      title: "Visión Clara",
      titleEn: "Clear Vision",
      description: "Define objetivos claros y una hoja de ruta para maximizar el valor de Salesforce.",
      descriptionEn: "Define clear objectives and a roadmap to maximize Salesforce value."
    },
    {
      icon: GitBranch,
      title: "Procesos Optimizados",
      titleEn: "Optimized Processes",
      description: "Rediseña tus procesos de negocio para aprovechar al máximo las capacidades del CRM.",
      descriptionEn: "Redesign your business processes to fully leverage CRM capabilities."
    },
    {
      icon: Users,
      title: "Adopción del Equipo",
      titleEn: "Team Adoption",
      description: "Estrategias para asegurar que tu equipo adopte y utilice Salesforce de forma efectiva.",
      descriptionEn: "Strategies to ensure your team adopts and uses Salesforce effectively."
    },
    {
      icon: TrendingUp,
      title: "ROI Maximizado",
      titleEn: "Maximized ROI",
      description: "Enfoque en resultados medibles y retorno de la inversión en tu plataforma CRM.",
      descriptionEn: "Focus on measurable results and return on investment in your CRM platform."
    }
  ];

  const services = [
    {
      title: "Análisis de Procesos",
      titleEn: "Process Analysis",
      description: "Evaluación profunda de tus procesos actuales de ventas, servicio y marketing para identificar oportunidades de mejora con Salesforce.",
      descriptionEn: "Deep evaluation of your current sales, service, and marketing processes to identify improvement opportunities with Salesforce."
    },
    {
      title: "Diseño de Estrategia CRM",
      titleEn: "CRM Strategy Design",
      description: "Definición de objetivos, KPIs y una hoja de ruta clara para la implementación o evolución de tu CRM.",
      descriptionEn: "Definition of objectives, KPIs, and a clear roadmap for the implementation or evolution of your CRM."
    },
    {
      title: "Gestión del Cambio",
      titleEn: "Change Management",
      description: "Planificación y ejecución de estrategias para asegurar la adopción exitosa por parte de todos los usuarios.",
      descriptionEn: "Planning and execution of strategies to ensure successful adoption by all users."
    },
    {
      title: "Selección de Productos",
      titleEn: "Product Selection",
      description: "Asesoramiento sobre qué productos y licencias de Salesforce son los más adecuados para tus necesidades.",
      descriptionEn: "Advice on which Salesforce products and licenses are most suitable for your needs."
    },
    {
      title: "Mejora de Adopción",
      titleEn: "Adoption Improvement",
      description: "Si tu equipo no está usando Salesforce como debería, identificamos barreras y creamos un plan de acción.",
      descriptionEn: "If your team isn't using Salesforce as they should, we identify barriers and create an action plan."
    },
    {
      title: "Gobernanza y Best Practices",
      titleEn: "Governance & Best Practices",
      description: "Establecimiento de políticas, estándares y mejores prácticas para el uso sostenible de la plataforma.",
      descriptionEn: "Establishment of policies, standards, and best practices for sustainable platform use."
    }
  ];

  const useCases = [
    {
      title: "Antes de Implementar",
      titleEn: "Before Implementation",
      description: "Quieres asegurarte de tomar las decisiones correctas antes de invertir en Salesforce.",
      descriptionEn: "You want to make sure you make the right decisions before investing in Salesforce."
    },
    {
      title: "Baja Adopción",
      titleEn: "Low Adoption",
      description: "Tu equipo no está usando Salesforce como esperabas y necesitas cambiar la situación.",
      descriptionEn: "Your team isn't using Salesforce as expected and you need to change the situation."
    },
    {
      title: "Crecimiento",
      titleEn: "Growth",
      description: "Tu empresa está creciendo y necesitas escalar tu uso de Salesforce de forma estratégica.",
      descriptionEn: "Your company is growing and you need to scale your Salesforce use strategically."
    }
  ];

  return (
    <>
      <SEO 
        title={t('language') === 'es' 
          ? "Consultoría Estratégica Salesforce | Asesoramiento CRM" 
          : "Strategic Salesforce Consulting | CRM Advisory"}
        description={t('language') === 'es'
          ? "Consultoría estratégica para optimizar procesos y maximizar la adopción de Salesforce. Asesoramiento experto para tu transformación digital."
          : "Strategic consulting to optimize processes and maximize Salesforce adoption. Expert advisory for your digital transformation."}
        canonical="/servicios/consultoria-estrategica"
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
                <Lightbulb className="w-4 h-4" />
                {t('language') === 'es' ? 'Asesoramiento Experto' : 'Expert Advisory'}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {t('language') === 'es' ? (
                  <>Consultoría <span className="text-primary">Estratégica</span></>
                ) : (
                  <><span className="text-primary">Strategic</span> Consulting</>
                )}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t('language') === 'es' 
                  ? "Asesoramiento experto para definir tu estrategia CRM, optimizar procesos y asegurar la adopción de Salesforce en tu organización."
                  : "Expert advisory to define your CRM strategy, optimize processes, and ensure Salesforce adoption in your organization."}
              </p>
              
              <ContactFormDialog variant="demo">
                <Button size="lg" className="text-lg px-8 py-6">
                  {t('language') === 'es' ? 'Solicitar Consulta' : 'Request Consultation'}
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
                {t('language') === 'es' ? '¿Qué lograrás?' : 'What will you achieve?'}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('language') === 'es' 
                  ? 'Claridad, dirección y resultados tangibles para tu inversión en Salesforce.'
                  : 'Clarity, direction, and tangible results for your Salesforce investment.'}
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
                {t('language') === 'es' ? 'Servicios de Consultoría' : 'Consulting Services'}
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

        {/* Use Cases Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('language') === 'es' ? '¿Cuándo necesitas consultoría?' : 'When do you need consulting?'}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {useCases.map((useCase, index) => (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">
                      {t('language') === 'es' ? useCase.title : useCase.titleEn}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {t('language') === 'es' ? useCase.description : useCase.descriptionEn}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <Compass className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('language') === 'es' 
                ? '¿Listo para definir tu estrategia?' 
                : 'Ready to define your strategy?'}
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              {t('language') === 'es'
                ? 'Hablemos sobre tus objetivos y cómo Salesforce puede ayudarte a alcanzarlos.'
                : "Let's talk about your objectives and how Salesforce can help you achieve them."}
            </p>
            <ContactFormDialog variant="demo">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                {t('language') === 'es' ? 'Agendar Consulta' : 'Schedule Consultation'}
              </Button>
            </ContactFormDialog>
          </div>
        </section>
      </main>
    </>
  );
};

export default ConsultoriaEstrategica;
