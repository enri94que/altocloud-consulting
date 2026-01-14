import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Zap, Rocket, DollarSign, Clock, Settings, CheckCircle2, ArrowRight } from "lucide-react";
import ContactFormDialog from "@/components/home/ContactFormDialog";
import SEO from "@/components/seo/SEO";
import StructuredData from "@/components/seo/StructuredData";
import { useLanguage } from "@/contexts/LanguageContext";

const StarterProSuite = () => {
  const { t, language } = useLanguage();

  const benefits = [
    {
      icon: Rocket,
      titleKey: "starterSuite.benefit1.title",
      descKey: "starterSuite.benefit1.desc",
    },
    {
      icon: DollarSign,
      titleKey: "starterSuite.benefit2.title",
      descKey: "starterSuite.benefit2.desc",
    },
    {
      icon: Clock,
      titleKey: "starterSuite.benefit3.title",
      descKey: "starterSuite.benefit3.desc",
    },
    {
      icon: Settings,
      titleKey: "starterSuite.benefit4.title",
      descKey: "starterSuite.benefit4.desc",
    },
  ];

  const featureKeys = [
    "starterSuite.feature1",
    "starterSuite.feature2",
    "starterSuite.feature3",
    "starterSuite.feature4",
    "starterSuite.feature5",
    "starterSuite.feature6",
  ];

  const idealKeys = [
    "starterSuite.ideal1",
    "starterSuite.ideal2",
    "starterSuite.ideal3",
    "starterSuite.ideal4",
  ];

  return (
    <Layout>
      <SEO
        title={language === "es" ? "Starter & Pro Suite - CRM PYMEs" : "Starter & Pro Suite - SMB CRM"}
        description={language === "es" ? "Starter y Pro Suite: CRM Salesforce para PYMEs. Implementación rápida, precio accesible. Consultor certificado en España." : "Starter and Pro Suite: Salesforce CRM for SMBs. Quick implementation, affordable price. Certified consultant in Spain."}
        canonical="/servicios/starter-pro-suite"
      />
      <StructuredData
        type="service"
        name="Starter & Pro Suite"
        description={language === "es" ? "Implementación de Salesforce Starter y Pro Suite para pequeñas y medianas empresas." : "Salesforce Starter and Pro Suite implementation for small and medium businesses."}
        url="/servicios/starter-pro-suite"
      />
      {/* Hero */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              {t("starterSuite.title")}
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              {t("starterSuite.description")}
            </p>
            <ContactFormDialog variant="contact" defaultService="Starter_and_Pro_Suite">
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
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">{t("starterSuite.features.title")}</h2>
              <p className="text-muted-foreground text-lg mb-8">
                {t("starterSuite.features.desc")}
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
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">{t("starterSuite.ideal.title")}</h3>
              <p className="text-muted-foreground mb-6">{t("starterSuite.ideal.desc")}</p>
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

      {/* CTA */}
      <section className="py-16 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            {t("starterSuite.cta.title")}
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            {t("starterSuite.cta.desc")}
          </p>
          <ContactFormDialog variant="demo" defaultService="Starter & Pro Suite">
            <Button size="lg" variant="hero">
              {t("service.requestDemo")}
            </Button>
          </ContactFormDialog>
        </div>
      </section>
    </Layout>
  );
};

export default StarterProSuite;
