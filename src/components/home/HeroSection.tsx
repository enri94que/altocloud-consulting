import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ContactFormDialog from "./ContactFormDialog";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-hero-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full text-primary-foreground/90 text-sm font-medium mb-6 animate-fade-up">
            {t("hero.badge")}
          </span>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            {t("hero.title")}{" "}
            <span className="text-accent">Salesforce®</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {t("hero.description")}
          </p>

          <div className="flex justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <ContactFormDialog variant="contact">
              <Button size="lg" variant="hero">
                {t("hero.cta")}
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </ContactFormDialog>
          </div>

          {/* Trust badges */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-primary-foreground/80 text-base mb-4">
              {t("hero.intro")} <span className="font-semibold">{t("hero.name")}</span>, {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/40">
              <span className="text-sm font-medium">{t("hero.certified")}</span>
              <span className="text-sm font-medium">{t("hero.experience")}</span>
              <span className="text-sm font-medium">{t("hero.projects")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
