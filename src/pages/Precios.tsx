import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo/SEO";
import ContactFormDialog from "@/components/home/ContactFormDialog";
import { Check, ExternalLink, Users, Building2, Heart, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";

const Precios = () => {
  const { t, language } = useLanguage();

  const salesCloudPlans = [
    {
      name: "Starter Suite",
      price: "25€",
      period: t("pricing.perUser"),
      billing: t("pricing.monthlyAnnual"),
      descriptionEs: "CRM inteligente con herramientas básicas de ventas",
      descriptionEn: "Smart CRM with basic sales tools",
      featuresEs: [
        "Gestión de candidatos y oportunidades",
        "Flujos de ventas integrados",
        "Sincronización de emails y calendario",
        "Análisis básicos",
        "Usuarios ilimitados"
      ],
      featuresEn: [
        "Lead and opportunity management",
        "Integrated sales flows",
        "Email and calendar sync",
        "Basic analytics",
        "Unlimited users"
      ],
      highlighted: false,
      cta: t("pricing.idealStart")
    },
    {
      name: "Pro Suite",
      price: "100€",
      period: t("pricing.perUser"),
      billing: t("pricing.annualBilling"),
      descriptionEs: "CRM flexible con automatización avanzada",
      descriptionEn: "Flexible CRM with advanced automation",
      featuresEs: [
        "Todo lo de Starter Suite",
        "Presupuestos y pronósticos",
        "Automatización avanzada",
        "Personalización completa",
        "Acceso a AppExchange"
      ],
      featuresEn: [
        "Everything in Starter Suite",
        "Quotes and forecasting",
        "Advanced automation",
        "Full customization",
        "AppExchange access"
      ],
      highlighted: true,
      cta: t("pricing.mostPopular")
    },
    {
      name: "Enterprise",
      price: "175€",
      period: t("pricing.perUser"),
      billing: t("pricing.annualBilling"),
      descriptionEs: "CRM para ventas con flexibilidad y API web",
      descriptionEn: "Sales CRM with flexibility and web API",
      featuresEs: [
        "Todo lo de Pro Suite",
        "Gestión avanzada del ciclo de ventas",
        "Inteligencia conversacional",
        "Agentforce incluido",
        "API web completa"
      ],
      featuresEn: [
        "Everything in Pro Suite",
        "Advanced sales cycle management",
        "Conversational intelligence",
        "Agentforce included",
        "Complete web API"
      ],
      highlighted: false,
      cta: t("pricing.forGrowth")
    },
    {
      name: "Unlimited",
      price: "350€",
      period: t("pricing.perUser"),
      billing: t("pricing.annualBilling"),
      descriptionEs: "CRM con automatización inteligente y soporte premium",
      descriptionEn: "CRM with intelligent automation and premium support",
      featuresEs: [
        "Todo lo de Enterprise",
        "IA predictiva",
        "Participación de ventas",
        "Plan Premier Success",
        "Sandbox completo"
      ],
      featuresEn: [
        "Everything in Enterprise",
        "Predictive AI",
        "Sales engagement",
        "Premier Success Plan",
        "Full sandbox"
      ],
      highlighted: false,
      cta: t("pricing.maxPower")
    }
  ];

  const serviceCloudPlans = [
    {
      name: "Starter Suite",
      price: "25€",
      period: t("pricing.perUser"),
      billing: t("pricing.monthlyAnnual"),
      descriptionEs: "Gestión de casos de atención al cliente básica",
      descriptionEn: "Basic customer service case management",
      featuresEs: [
        "Gestión de casos desde email",
        "Base de conocimientos",
        "Consola de servicio",
        "Informes básicos",
        "Usuarios ilimitados"
      ],
      featuresEn: [
        "Email case management",
        "Knowledge base",
        "Service console",
        "Basic reports",
        "Unlimited users"
      ],
      highlighted: false,
      cta: t("pricing.idealStart")
    },
    {
      name: "Pro Suite",
      price: "100€",
      period: t("pricing.perUser"),
      billing: t("pricing.annualBilling"),
      descriptionEs: "Atención omnicanal con automatización",
      descriptionEn: "Omnichannel service with automation",
      featuresEs: [
        "Todo lo de Starter Suite",
        "Chat en tiempo real",
        "Enrutamiento omnicanal",
        "Automatización de casos",
        "Acceso a AppExchange"
      ],
      featuresEn: [
        "Everything in Starter Suite",
        "Real-time chat",
        "Omnichannel routing",
        "Case automation",
        "AppExchange access"
      ],
      highlighted: true,
      cta: t("pricing.mostPopular")
    },
    {
      name: "Enterprise",
      price: "175€",
      period: t("pricing.perUser"),
      billing: t("pricing.annualBilling"),
      descriptionEs: "Servicio completo con IA y autoservicio",
      descriptionEn: "Complete service with AI and self-service",
      featuresEs: [
        "Todo lo de Pro Suite",
        "Portal de autoservicio",
        "Bots de Einstein",
        "Gestión de contratos",
        "API web completa"
      ],
      featuresEn: [
        "Everything in Pro Suite",
        "Self-service portal",
        "Einstein Bots",
        "Contract management",
        "Complete web API"
      ],
      highlighted: false,
      cta: t("pricing.forGrowth")
    },
    {
      name: "Unlimited",
      price: "350€",
      period: t("pricing.perUser"),
      billing: t("pricing.annualBilling"),
      descriptionEs: "Servicio inteligente con soporte premium",
      descriptionEn: "Intelligent service with premium support",
      featuresEs: [
        "Todo lo de Enterprise",
        "IA predictiva",
        "Chat de vídeo",
        "Plan Premier Success",
        "Sandbox completo"
      ],
      featuresEn: [
        "Everything in Enterprise",
        "Predictive AI",
        "Video chat",
        "Premier Success Plan",
        "Full sandbox"
      ],
      highlighted: false,
      cta: t("pricing.maxPower")
    }
  ];

  const nonprofitCloudPlans = [
    {
      name: "Enterprise",
      price: "60€",
      period: t("pricing.perUser"),
      billing: t("pricing.annualBilling"),
      descriptionEs: "CRM líder del mercado para organizaciones sin ánimo de lucro",
      descriptionEn: "Market-leading CRM for nonprofit organizations",
      featuresEs: [
        "Modelo de datos para ONGs",
        "Nonprofit Toolkit",
        "Gestión de recaudación",
        "Gestión de programas y resultados",
        "Gestión de voluntarios"
      ],
      featuresEn: [
        "NGO data model",
        "Nonprofit Toolkit",
        "Fundraising management",
        "Program and outcome management",
        "Volunteer management"
      ],
      highlighted: true,
      cta: t("pricing.mostPopular")
    },
    {
      name: "Unlimited",
      price: "100€",
      period: t("pricing.perUser"),
      billing: t("pricing.annualBilling"),
      descriptionEs: "Potencia y soporte ilimitado para ONGs",
      descriptionEn: "Unlimited power and support for NGOs",
      featuresEs: [
        "Todo lo de Enterprise",
        "IA predictiva",
        "Automatización avanzada",
        "Plan Premier Success",
        "Sandbox completo"
      ],
      featuresEn: [
        "Everything in Enterprise",
        "Predictive AI",
        "Advanced automation",
        "Premier Success Plan",
        "Full sandbox"
      ],
      highlighted: false,
      cta: t("pricing.maxPower")
    }
  ];

  const starterProPlans = [
    {
      name: "Free Suite",
      price: "0€",
      period: "",
      billing: t("pricing.maxUsers"),
      descriptionEs: "CRM básico gratuito para empezar",
      descriptionEn: "Free basic CRM to get started",
      featuresEs: [
        "Gestión de candidatos y contactos",
        "Gestión de casos de servicio",
        "Marketing por email básico",
        "Hasta 2 usuarios"
      ],
      featuresEn: [
        "Lead and contact management",
        "Service case management",
        "Basic email marketing",
        "Up to 2 users"
      ],
      highlighted: false,
      cta: t("pricing.startFree")
    },
    {
      name: "Starter Suite",
      price: "25€",
      period: t("pricing.perUser"),
      billing: t("pricing.monthlyAnnual"),
      descriptionEs: "Suite de CRM inteligente todo en uno",
      descriptionEn: "All-in-one smart CRM suite",
      featuresEs: [
        "Ventas, servicio y marketing",
        "Usuarios ilimitados",
        "Flujos de ventas integrados",
        "Marketing dinámico por email",
        "Escaparate e-commerce"
      ],
      featuresEn: [
        "Sales, service and marketing",
        "Unlimited users",
        "Integrated sales flows",
        "Dynamic email marketing",
        "E-commerce storefront"
      ],
      highlighted: true,
      cta: t("pricing.mostPopular")
    },
    {
      name: "Pro Suite",
      price: "100€",
      period: t("pricing.perUser"),
      billing: t("pricing.annualBilling"),
      descriptionEs: "Suite flexible con automatización completa",
      descriptionEn: "Flexible suite with complete automation",
      featuresEs: [
        "Todo lo de Starter Suite",
        "Chat en tiempo real mejorado",
        "Presupuestos y pronósticos",
        "Mayor personalización",
        "Acceso a AppExchange"
      ],
      featuresEn: [
        "Everything in Starter Suite",
        "Enhanced real-time chat",
        "Quotes and forecasting",
        "Greater customization",
        "AppExchange access"
      ],
      highlighted: false,
      cta: t("pricing.toGrow")
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
        <CardDescription className="min-h-[40px]">
          {language === "es" ? plan.descriptionEs : plan.descriptionEn}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-1">
        <div className="text-center mb-6">
          <p className="text-sm text-muted-foreground font-medium">
            {language === "es" ? "Precio a consultar" : "Price on request"}
          </p>
        </div>
        <ul className="space-y-3 flex-1">
          {(language === "es" ? plan.featuresEs : plan.featuresEn).map((feature, i) => (
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
            {t("pricing.requestInfo")}
          </Button>
        </ContactFormDialog>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      <SEO
        title={language === "es" ? "Precios de Salesforce 2025" : "Salesforce Pricing 2025"}
        description={language === "es" ? "Precios oficiales de licencias de Salesforce: Sales Cloud, Service Cloud, Nonprofit Cloud y Starter Suite. Consultor certificado te asesora gratis." : "Official Salesforce license pricing: Sales Cloud, Service Cloud, Nonprofit Cloud and Starter Suite. Certified consultant advises you for free."}
        canonical="/precios"
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-[#032D60] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#032D60] via-[#0176D3] to-[#1B96FF] opacity-90" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
              {t("pricing.badge")}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t("pricing.title")} <span className="text-orange-400">Salesforce</span>
            </h1>
            <p className="text-lg text-white/80 mb-8">
              {t("pricing.subtitle")}
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
                <span className="hidden sm:inline">{t("pricing.starterTab")}</span>
                <span className="sm:hidden">Starter</span>
              </TabsTrigger>
              <TabsTrigger value="sales" className="flex items-center gap-2 py-3">
                <Briefcase className="w-4 h-4" />
                <span className="hidden sm:inline">{t("pricing.salesTab")}</span>
                <span className="sm:hidden">Sales</span>
              </TabsTrigger>
              <TabsTrigger value="service" className="flex items-center gap-2 py-3">
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">{t("pricing.serviceTab")}</span>
                <span className="sm:hidden">Service</span>
              </TabsTrigger>
              <TabsTrigger value="nonprofit" className="flex items-center gap-2 py-3">
                <Heart className="w-4 h-4" />
                <span className="hidden sm:inline">{t("pricing.nonprofitTab")}</span>
                <span className="sm:hidden">Nonprofit</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="starter" className="mt-0">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold mb-2">{t("pricing.starterTitle")}</h2>
                <p className="text-muted-foreground">{t("pricing.starterSubtitle")}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {starterProPlans.map((plan, i) => (
                  <PricingCard key={i} plan={plan} serviceName="Starter and Pro Suite" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="sales" className="mt-0">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold mb-2">{t("pricing.salesTitle")}</h2>
                <p className="text-muted-foreground">{t("pricing.salesSubtitle")}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {salesCloudPlans.map((plan, i) => (
                  <PricingCard key={i} plan={plan} serviceName="Sales Cloud" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="service" className="mt-0">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold mb-2">{t("pricing.serviceTitle")}</h2>
                <p className="text-muted-foreground">{t("pricing.serviceSubtitle")}</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {serviceCloudPlans.map((plan, i) => (
                  <PricingCard key={i} plan={plan} serviceName="Service Cloud" />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="nonprofit" className="mt-0">
              <div className="text-center mb-10">
                <h2 className="text-2xl font-bold mb-2">{t("pricing.nonprofitTitle")}</h2>
                <p className="text-muted-foreground">{t("pricing.nonprofitSubtitle")}</p>
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
                      💡 {t("pricing.nonprofit.note")}
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
                  <h3 className="font-semibold mb-2">{t("pricing.disclaimer.title")}</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• {t("pricing.disclaimer.1")}</li>
                    <li>• {t("pricing.disclaimer.2")}</li>
                    <li>• {t("pricing.disclaimer.3")}</li>
                    <li>• {t("pricing.disclaimer.4")} <a href="https://www.salesforce.com/es/editions-pricing/" target="_blank" rel="noopener noreferrer" className="text-salesforce-blue hover:underline">salesforce.com</a>.</li>
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
            {t("pricing.cta.title")}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            {t("pricing.cta.subtitle")}
          </p>
          <ContactFormDialog variant="contact">
            <Button size="lg" variant="secondary">
              {t("pricing.cta.button")}
            </Button>
          </ContactFormDialog>
        </div>
      </section>
    </Layout>
  );
};

export default Precios;
