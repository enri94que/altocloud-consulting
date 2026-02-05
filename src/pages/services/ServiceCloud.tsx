import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Headphones, MessageSquare, Clock, Smile, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import ContactFormDialog from "@/components/home/ContactFormDialog";
 import LicensesBanner from "@/components/home/LicensesBanner";
import SEO from "@/components/seo/SEO";
import StructuredData from "@/components/seo/StructuredData";
import { useLanguage } from "@/contexts/LanguageContext";

const ServiceCloud = () => {
  const { t, language } = useLanguage();

  const benefits = [
    {
      icon: MessageSquare,
      titleKey: "serviceCloud.benefit1.title",
      descKey: "serviceCloud.benefit1.desc",
    },
    {
      icon: Clock,
      titleKey: "serviceCloud.benefit2.title",
      descKey: "serviceCloud.benefit2.desc",
    },
    {
      icon: Smile,
      titleKey: "serviceCloud.benefit3.title",
      descKey: "serviceCloud.benefit3.desc",
    },
    {
      icon: Zap,
      titleKey: "serviceCloud.benefit4.title",
      descKey: "serviceCloud.benefit4.desc",
    },
  ];

  const featureKeys = [
    "serviceCloud.feature1",
    "serviceCloud.feature2",
    "serviceCloud.feature3",
    "serviceCloud.feature4",
    "serviceCloud.feature5",
    "serviceCloud.feature6",
  ];

  const idealKeys = [
    "serviceCloud.ideal1",
    "serviceCloud.ideal2",
    "serviceCloud.ideal3",
    "serviceCloud.ideal4",
  ];

  return (
    <Layout>
      <SEO
        title={language === "es" ? "Service Cloud - Atención Cliente" : "Service Cloud - Customer Service"}
        description={language === "es" ? "Service Cloud: soporte omnicanal, gestión de casos y automatización. Mejora la satisfacción de tus clientes con consultoría Salesforce." : "Service Cloud: omnichannel support, case management and automation. Improve customer satisfaction with Salesforce consulting."}
        canonical="/servicios/service-cloud"
      />
      <StructuredData
        type="service"
        name="Service Cloud"
        description={language === "es" ? "Implementación y consultoría de Salesforce Service Cloud para atención al cliente omnicanal." : "Salesforce Service Cloud implementation and consulting for omnichannel customer service."}
        url="/servicios/service-cloud"
      />
      {/* Hero */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-6">
              <Headphones className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{t("serviceCloud.title")}</h1>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              {t("serviceCloud.description")}
            </p>
            <ContactFormDialog variant="contact" defaultService="Service_Cloud">
              <Button size="lg" variant="hero">
                {t("service.contact")}
              </Button>
            </ContactFormDialog>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">{t("service.mainBenefits")}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:shadow-card-hover transition-all duration-300"
              >
                <benefit.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg text-foreground mb-2">{t(benefit.titleKey)}</h3>
                <p className="text-muted-foreground text-sm">{t(benefit.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">{t("serviceCloud.features.title")}</h2>
              <p className="text-muted-foreground text-lg mb-8">
                {t("serviceCloud.features.desc")}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {featureKeys.map((key, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{t(key)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">{t("serviceCloud.ideal.title")}</h3>
              <p className="text-muted-foreground mb-6">{t("serviceCloud.ideal.desc")}</p>
              <ul className="space-y-3 text-muted-foreground">
                {idealKeys.map((key, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

       <LicensesBanner />

      {/* CTA */}
      <section className="py-16 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            {t("serviceCloud.cta.title")}
          </h2>
          <p className="text-primary-foreground/80 mb-8">{t("serviceCloud.cta.desc")}</p>
          <ContactFormDialog variant="demo" defaultService="Service Cloud">
            <Button size="lg" variant="hero">
              {t("service.requestDemo")}
            </Button>
          </ContactFormDialog>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceCloud;
