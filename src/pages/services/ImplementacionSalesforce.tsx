import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Settings, Search, Code, TestTube, GraduationCap, Rocket, CheckCircle2 } from "lucide-react";
import ContactFormDialog from "@/components/home/ContactFormDialog";
import SEO from "@/components/seo/SEO";
import StructuredData from "@/components/seo/StructuredData";
import { useLanguage } from "@/contexts/LanguageContext";

const ImplementacionSalesforce = () => {
  const { t, language } = useLanguage();

  const phases = [
    {
      icon: Search,
      number: 1,
      titleKey: "implementation.phase1.title",
      periodKey: "implementation.phase1.period",
      stepsKeys: [
        "implementation.phase1.step1",
        "implementation.phase1.step2",
        "implementation.phase1.step3",
        "implementation.phase1.step4",
        "implementation.phase1.step5",
      ],
    },
    {
      icon: Code,
      number: 2,
      titleKey: "implementation.phase2.title",
      periodKey: "implementation.phase2.period",
      stepsKeys: [
        "implementation.phase2.step1",
        "implementation.phase2.step2",
        "implementation.phase2.step3",
      ],
    },
    {
      icon: TestTube,
      number: 3,
      titleKey: "implementation.phase3.title",
      periodKey: "implementation.phase3.period",
      stepsKeys: [
        "implementation.phase3.step1",
        "implementation.phase3.step2",
        "implementation.phase3.step3",
        "implementation.phase3.step4",
      ],
    },
    {
      icon: GraduationCap,
      number: 4,
      titleKey: "implementation.phase4.title",
      periodKey: "implementation.phase4.period",
      stepsKeys: [
        "implementation.phase4.step1",
      ],
    },
    {
      icon: Rocket,
      number: 5,
      titleKey: "implementation.phase5.title",
      periodKey: "implementation.phase5.period",
      stepsKeys: [
        "implementation.phase5.step1",
        "implementation.phase5.step2",
      ],
    },
  ];

  return (
    <Layout>
      <SEO
        title={language === "es" ? "Implementación Salesforce - Metodología" : "Salesforce Implementation - Methodology"}
        description={language === "es" ? "Metodología de implementación Salesforce en 5 fases: Discovery, Desarrollo, UAT, Training y Go Live. Consultor certificado en España." : "Salesforce implementation methodology in 5 phases: Discovery, Development, UAT, Training and Go Live. Certified consultant in Spain."}
        canonical="/servicios/implementacion-salesforce"
      />
      <StructuredData
        type="service"
        name={language === "es" ? "Implementación Salesforce" : "Salesforce Implementation"}
        description={language === "es" ? "Servicio de implementación profesional de Salesforce con metodología ágil en 5 fases." : "Professional Salesforce implementation service with agile methodology in 5 phases."}
        url="/servicios/implementacion-salesforce"
      />
      
      {/* Hero */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-6">
              <Settings className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              {t("implementation.title")}
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              {t("implementation.description")}
            </p>
            <ContactFormDialog variant="contact" defaultService="Implementacion">
              <Button size="lg" variant="hero">
                {t("service.contact")}
              </Button>
            </ContactFormDialog>
          </div>
        </div>
      </section>

      {/* Methodology Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("implementation.methodology.title")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t("implementation.methodology.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl border border-border p-6 md:p-8 hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Phase header */}
                  <div className="flex items-center gap-4 md:min-w-[280px]">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <phase.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-primary">
                        {t("implementation.phase")} {phase.number}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-foreground">
                        {t(phase.titleKey)}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {t(phase.periodKey)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Phase steps */}
                  <div className="flex-1">
                    <ul className="space-y-3">
                      {phase.stepsKeys.map((stepKey, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{t(stepKey)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                {t("implementation.benefits.title")}
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                {t("implementation.benefits.desc")}
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "implementation.benefit1",
                  "implementation.benefit2",
                  "implementation.benefit3",
                  "implementation.benefit4",
                  "implementation.benefit5",
                  "implementation.benefit6",
                ].map((key, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{t(key)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                {t("implementation.agile.title")}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t("implementation.agile.desc")}
              </p>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "implementation.agile1",
                  "implementation.agile2",
                  "implementation.agile3",
                  "implementation.agile4",
                ].map((key, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
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
            {t("implementation.cta.title")}
          </h2>
          <p className="text-primary-foreground/80 mb-8">{t("implementation.cta.desc")}</p>
          <ContactFormDialog variant="demo" defaultService="Implementacion">
            <Button size="lg" variant="hero">
              {t("service.requestDemo")}
            </Button>
          </ContactFormDialog>
        </div>
      </section>
    </Layout>
  );
};

export default ImplementacionSalesforce;