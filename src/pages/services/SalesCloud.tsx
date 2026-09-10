import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, BarChart3, Users, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import ContactFormDialog from "@/components/home/ContactFormDialog";
 import LicensesBanner from "@/components/home/LicensesBanner";
import SEO from "@/components/seo/SEO";
import StructuredData from "@/components/seo/StructuredData";
import { useLanguage } from "@/contexts/LanguageContext";

const SalesCloud = () => {
  const { t, language } = useLanguage();

  const benefits = [
    {
      icon: Target,
      titleKey: "salesCloud.benefit1.title",
      descKey: "salesCloud.benefit1.desc",
    },
    {
      icon: BarChart3,
      titleKey: "salesCloud.benefit2.title",
      descKey: "salesCloud.benefit2.desc",
    },
    {
      icon: Users,
      titleKey: "salesCloud.benefit3.title",
      descKey: "salesCloud.benefit3.desc",
    },
    {
      icon: Zap,
      titleKey: "salesCloud.benefit4.title",
      descKey: "salesCloud.benefit4.desc",
    },
  ];

  const featureKeys = [
    "salesCloud.feature1",
    "salesCloud.feature2",
    "salesCloud.feature3",
    "salesCloud.feature4",
    "salesCloud.feature5",
    "salesCloud.feature6",
  ];

  const idealKeys = [
    "salesCloud.ideal1",
    "salesCloud.ideal2",
    "salesCloud.ideal3",
    "salesCloud.ideal4",
  ];

  return (
    <Layout>
      <SEO
        title={language === "es" ? "Sales Cloud - CRM Ventas" : "Sales Cloud - Sales CRM"}
        description={language === "es" ? "Sales Cloud: gestión de leads, automatización comercial y previsiones de ventas. Consultor de Salesforce® certificado para impulsar tus ventas." : "Sales Cloud: lead management, sales automation and forecasting. Certified Salesforce® consultant to boost your sales."}
        canonical="/servicios/sales-cloud"
      />
      <StructuredData
        type="service"
        name="Sales Cloud"
        description={language === "es" ? "Implementación y consultoría de Salesforce Sales Cloud para gestión comercial y automatización de ventas." : "Salesforce Sales Cloud implementation and consulting for commercial management and sales automation."}
        url="/servicios/sales-cloud"
      />
      {/* Hero */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6">
              <TrendingUp className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{t("salesCloud.title")}</h1>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              {t("salesCloud.description")}
            </p>
            <ContactFormDialog variant="contact" defaultService="Sales_Cloud">
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
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                {t("salesCloud.features.title")}
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {t("salesCloud.features.desc")}
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
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">{t("salesCloud.ideal.title")}</h3>
              <p className="text-muted-foreground mb-6">{t("salesCloud.ideal.desc")}</p>
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
            {t("salesCloud.cta.title")}
          </h2>
          <p className="text-primary-foreground/80 mb-8">{t("salesCloud.cta.desc")}</p>
          <ContactFormDialog variant="demo" defaultService="Sales Cloud">
            <Button size="lg" variant="hero">
              {t("service.requestDemo")}
            </Button>
          </ContactFormDialog>
        </div>
      </section>
    </Layout>
  );
};

export default SalesCloud;
