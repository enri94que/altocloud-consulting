import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import ContactFormDialog from "@/components/home/ContactFormDialog";
import { Check, ExternalLink, Users, Building2, Heart, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Precios = () => {
  const salesCloudPlans = [
    {
      name: "Starter Suite",
      price: "25€",
      period: "/usuario/mes",
      billing: "Facturación mensual o anual",
      description: "CRM inteligente con herramientas básicas de ventas",
      features: [
        "Gestión de candidatos y oportunidades",
        "Flujos de ventas integrados",
        "Sincronización de emails y calendario",
        "Análisis básicos",
        "Usuarios ilimitados"
      ],
      highlighted: false,
      cta: "Ideal para empezar"
    },
    {
      name: "Pro Suite",
      price: "100€",
      period: "/usuario/mes",
      billing: "Facturación anual",
      description: "CRM flexible con automatización avanzada",
      features: [
        "Todo lo de Starter Suite",
        "Presupuestos y pronósticos",
        "Automatización avanzada",
        "Personalización completa",
        "Acceso a AppExchange"
      ],
      highlighted: true,
      cta: "Más popular"
    },
    {
      name: "Enterprise",
      price: "175€",
      period: "/usuario/mes",
      billing: "Facturación anual",
      description: "CRM para ventas con flexibilidad y API web",
      features: [
        "Todo lo de Pro Suite",
        "Gestión avanzada del ciclo de ventas",
        "Inteligencia conversacional",
        "Agentforce incluido",
        "API web completa"
      ],
      highlighted: false,
      cta: "Para empresas en crecimiento"
    },
    {
      name: "Unlimited",
      price: "350€",
      period: "/usuario/mes",
      billing: "Facturación anual",
      description: "CRM con automatización inteligente y soporte premium",
      features: [
        "Todo lo de Enterprise",
        "IA predictiva",
        "Participación de ventas",
        "Plan Premier Success",
        "Sandbox completo"
      ],
      highlighted: false,
      cta: "Máxima potencia"
    }
  ];

  const serviceCloudPlans = [
    {
      name: "Starter Suite",
      price: "25€",
      period: "/usuario/mes",
      billing: "Facturación mensual o anual",
      description: "Gestión de casos de atención al cliente básica",
      features: [
        "Gestión de casos desde email",
        "Base de conocimientos",
        "Consola de servicio",
        "Informes básicos",
        "Usuarios ilimitados"
      ],
      highlighted: false,
      cta: "Ideal para empezar"
    },
    {
      name: "Pro Suite",
      price: "100€",
      period: "/usuario/mes",
      billing: "Facturación anual",
      description: "Atención omnicanal con automatización",
      features: [
        "Todo lo de Starter Suite",
        "Chat en tiempo real",
        "Enrutamiento omnicanal",
        "Automatización de casos",
        "Acceso a AppExchange"
      ],
      highlighted: true,
      cta: "Más popular"
    },
    {
      name: "Enterprise",
      price: "175€",
      period: "/usuario/mes",
      billing: "Facturación anual",
      description: "Servicio completo con IA y autoservicio",
      features: [
        "Todo lo de Pro Suite",
        "Portal de autoservicio",
        "Bots de Einstein",
        "Gestión de contratos",
        "API web completa"
      ],
      highlighted: false,
      cta: "Para empresas en crecimiento"
    },
    {
      name: "Unlimited",
      price: "350€",
      period: "/usuario/mes",
      billing: "Facturación anual",
      description: "Servicio inteligente con soporte premium",
      features: [
        "Todo lo de Enterprise",
        "IA predictiva",
        "Chat de vídeo",
        "Plan Premier Success",
        "Sandbox completo"
      ],
      highlighted: false,
      cta: "Máxima potencia"
    }
  ];

  const nonprofitCloudPlans = [
    {
      name: "Enterprise",
      price: "60€",
      period: "/usuario/mes",
      billing: "Facturación anual",
      description: "CRM líder del mercado para organizaciones sin ánimo de lucro",
      features: [
        "Modelo de datos para ONGs",
        "Nonprofit Toolkit",
        "Gestión de recaudación",
        "Gestión de programas y resultados",
        "Gestión de voluntarios"
      ],
      highlighted: true,
      cta: "Más popular"
    },
    {
      name: "Unlimited",
      price: "100€",
      period: "/usuario/mes",
      billing: "Facturación anual",
      description: "Potencia y soporte ilimitado para ONGs",
      features: [
        "Todo lo de Enterprise",
        "IA predictiva",
        "Automatización avanzada",
        "Plan Premier Success",
        "Sandbox completo"
      ],
      highlighted: false,
      cta: "Máxima potencia"
    }
  ];

  const starterProPlans = [
    {
      name: "Free Suite",
      price: "0€",
      period: "",
      billing: "Máximo 2 usuarios",
      description: "CRM básico gratuito para empezar",
      features: [
        "Gestión de candidatos y contactos",
        "Gestión de casos de servicio",
        "Marketing por email básico",
        "Hasta 2 usuarios"
      ],
      highlighted: false,
      cta: "Empezar gratis"
    },
    {
      name: "Starter Suite",
      price: "25€",
      period: "/usuario/mes",
      billing: "Facturación mensual o anual",
      description: "Suite de CRM inteligente todo en uno",
      features: [
        "Ventas, servicio y marketing",
        "Usuarios ilimitados",
        "Flujos de ventas integrados",
        "Marketing dinámico por email",
        "Escaparate e-commerce"
      ],
      highlighted: true,
      cta: "Más popular"
    },
    {
      name: "Pro Suite",
      price: "100€",
      period: "/usuario/mes",
      billing: "Facturación anual",
      description: "Suite flexible con automatización completa",
      features: [
        "Todo lo de Starter Suite",
        "Chat en tiempo real mejorado",
        "Presupuestos y pronósticos",
        "Mayor personalización",
        "Acceso a AppExchange"
      ],
      highlighted: false,
      cta: "Para crecer"
    }
  ];

  const PricingCard = ({ plan, showBadge = true, serviceName }: { plan: typeof salesCloudPlans[0], showBadge?: boolean, serviceName: string }) => (
    <Card className={`relative flex flex-col h-full transition-all duration-300 hover:shadow-xl ${
      plan.highlighted 
        ? 'border-salesforce-blue border-2 shadow-lg scale-[1.02]' 
        : 'border-border hover:border-salesforce-blue/50'
    }`}>
      {plan.highlighted && showBadge && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-salesforce-blue text-white px-4">
          {plan.cta}
        </Badge>
      )}
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-xl font-semibold">{plan.name}</CardTitle>
        <CardDescription className="min-h-[40px]">{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-1">
        <div className="text-center mb-6">
          <span className="text-4xl font-bold text-salesforce-blue">{plan.price}</span>
          <span className="text-muted-foreground">{plan.period}</span>
          <p className="text-xs text-muted-foreground mt-1">{plan.billing}</p>
        </div>
        <ul className="space-y-3 flex-1">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <ContactFormDialog variant="pricing" defaultService={serviceName}>
          <Button 
            className={`w-full mt-6 ${
              plan.highlighted 
                ? 'bg-salesforce-blue hover:bg-salesforce-blue/90' 
                : ''
            }`}
            variant={plan.highlighted ? "default" : "outline"}
          >
            Solicitar información
          </Button>
        </ContactFormDialog>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      <SEO
        title="Precios Salesforce | Licencias Sales Cloud, Service Cloud, Nonprofit"
        description="Consulta los precios oficiales de las licencias de Salesforce. Sales Cloud, Service Cloud, Nonprofit Cloud y Starter/Pro Suite. Consultor certificado."
        canonical="/precios"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-[#032D60] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#032D60] via-[#0176D3] to-[#1B96FF] opacity-90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              Precios oficiales Salesforce 2025
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Precios de Licencias <span className="text-orange-400">Salesforce</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">
              Conoce los precios oficiales de las licencias de Salesforce para los servicios que implanto. 
              Como consultor certificado, te ayudo a elegir la mejor opción para tu negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="starter" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 md:grid-cols-4 mb-12 h-auto">
              <TabsTrigger value="starter" className="flex items-center gap-2 py-3">
                <Building2 className="w-4 h-4" />
                <span className="hidden sm:inline">Starter & Pro</span>
                <span className="sm:hidden">Starter</span>
              </TabsTrigger>
              <TabsTrigger value="sales" className="flex items-center gap-2 py-3">
                <Briefcase className="w-4 h-4" />
                <span className="hidden sm:inline">Sales Cloud</span>
                <span className="sm:hidden">Sales</span>
              </TabsTrigger>
              <TabsTrigger value="service" className="flex items-center gap-2 py-3">
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">Service Cloud</span>
                <span className="sm:hidden">Service</span>
              </TabsTrigger>
              <TabsTrigger value="nonprofit" className="flex items-center gap-2 py-3">
                <Heart className="w-4 h-4" />
                <span className="hidden sm:inline">Nonprofit</span>
                <span className="sm:hidden">Nonprofit</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="starter" className="mt-0">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold mb-2">Starter & Pro Suite</h2>
                <p className="text-muted-foreground">Soluciones todo en uno perfectas para pymes</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {starterProPlans.map((plan, i) => (
                  <PricingCard key={i} plan={plan} serviceName="Starter and Pro Suite" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sales" className="mt-0">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold mb-2">Sales Cloud</h2>
                <p className="text-muted-foreground">Potencia tu equipo de ventas con el CRM #1 del mundo</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {salesCloudPlans.map((plan, i) => (
                  <PricingCard key={i} plan={plan} serviceName="Sales Cloud" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="service" className="mt-0">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold mb-2">Service Cloud</h2>
                <p className="text-muted-foreground">Ofrece un servicio al cliente excepcional en todos los canales</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {serviceCloudPlans.map((plan, i) => (
                  <PricingCard key={i} plan={plan} serviceName="Service Cloud" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="nonprofit" className="mt-0">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold mb-2">Nonprofit Cloud</h2>
                <p className="text-muted-foreground">CRM diseñado específicamente para organizaciones sin ánimo de lucro</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {nonprofitCloudPlans.map((plan, i) => (
                  <PricingCard key={i} plan={plan} serviceName="Nonprofit Cloud" />
                ))}
              </div>
              <div className="mt-8 text-center">
                <Card className="inline-block bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
                  <CardContent className="p-6">
                    <p className="text-green-700 dark:text-green-300 font-medium">
                      💡 Las organizaciones sin ánimo de lucro pueden acceder a <strong>10 licencias gratuitas</strong> a través del programa Power of Us de Salesforce.org
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

          </Tabs>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <ExternalLink className="w-6 h-6 text-salesforce-blue shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Información importante sobre precios</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Los precios mostrados son los precios de lista de Salesforce y pueden variar.</li>
                    <li>• Todos los precios están en euros y no incluyen IVA.</li>
                    <li>• La facturación es anual salvo que se indique lo contrario.</li>
                    <li>• Consulta los precios actualizados en <a href="https://www.salesforce.com/es/editions-pricing/" target="_blank" rel="noopener noreferrer" className="text-salesforce-blue hover:underline">salesforce.com</a>.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-salesforce-blue to-navy-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿No sabes qué edición elegir?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Como consultor certificado de Salesforce, te ayudo a elegir la licencia que mejor se adapte 
            a las necesidades de tu negocio y presupuesto.
          </p>
          <ContactFormDialog variant="contact">
            <Button size="lg" variant="secondary">
              Solicitar asesoramiento gratuito
            </Button>
          </ContactFormDialog>
        </div>
      </section>
    </Layout>
  );
};

export default Precios;
