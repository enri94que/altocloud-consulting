import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Users, DollarSign, Calendar, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import ContactFormDialog from "@/components/home/ContactFormDialog";
import SEO from "@/components/seo/SEO";
import StructuredData from "@/components/seo/StructuredData";
import { useLanguage } from "@/contexts/LanguageContext";

const NonprofitCloud = () => {
  const { t, language } = useLanguage();

  const benefits = [
    {
      icon: DollarSign,
      titleKey: "nonprofitCloud.benefit1.title",
      descKey: "nonprofitCloud.benefit1.desc",
    },
    {
      icon: Users,
      titleKey: "nonprofitCloud.benefit2.title",
      descKey: "nonprofitCloud.benefit2.desc",
    },
    {
      icon: Calendar,
      titleKey: "nonprofitCloud.benefit3.title",
      descKey: "nonprofitCloud.benefit3.desc",
    },
    {
      icon: Zap,
      titleKey: "nonprofitCloud.benefit4.title",
      descKey: "nonprofitCloud.benefit4.desc",
    },
  ];

  const featureKeys = [
    "nonprofitCloud.feature1",
    "nonprofitCloud.feature2",
    "nonprofitCloud.feature3",
    "nonprofitCloud.feature4",
    "nonprofitCloud.feature5",
    "nonprofitCloud.feature6",
  ];

  const idealKeys = [
    "nonprofitCloud.ideal1",
    "nonprofitCloud.ideal2",
    "nonprofitCloud.ideal3",
    "nonprofitCloud.ideal4",
  ];

  return (
    <Layout>
      <SEO
        title={language === "es" ? "Nonprofit Cloud - CRM ONGs" : "Nonprofit Cloud - NGO CRM"}
        description={language === "es" ? "Nonprofit Cloud para ONGs: gestión de donantes, voluntarios y programas. Maximiza tu impacto social con consultoría Salesforce certificada." : "Nonprofit Cloud for NGOs: donor, volunteer and program management. Maximize your social impact with certified Salesforce consulting."}
        canonical="/servicios/nonprofit-cloud"
      />
      <StructuredData
        type="service"
        name="Nonprofit Cloud"
        description={language === "es" ? "Implementación y consultoría de Salesforce Nonprofit Cloud para organizaciones sin ánimo de lucro." : "Salesforce Nonprofit Cloud implementation and consulting for nonprofit organizations."}
        url="/servicios/nonprofit-cloud"
      />
      {/* Hero */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">{t("nonprofitCloud.title")}</h1>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              {t("nonprofitCloud.description")}
            </p>
            <ContactFormDialog variant="contact" defaultService="Nonprofit_Cloud">
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
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">{t("nonprofitCloud.features.title")}</h2>
              <p className="text-muted-foreground text-lg mb-8">
                {t("nonprofitCloud.features.desc")}
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
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">{t("nonprofitCloud.ideal.title")}</h3>
              <p className="text-muted-foreground mb-6">{t("nonprofitCloud.ideal.desc")}</p>
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
            {t("nonprofitCloud.cta.title")}
          </h2>
          <p className="text-primary-foreground/80 mb-8">{t("nonprofitCloud.cta.desc")}</p>
          <ContactFormDialog variant="demo" defaultService="Nonprofit Cloud">
            <Button size="lg" variant="hero">
              {t("service.requestDemo")}
            </Button>
          </ContactFormDialog>
        </div>
      </section>
    </Layout>
  );
};

export default NonprofitCloud;
