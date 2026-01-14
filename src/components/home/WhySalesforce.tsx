import { CheckCircle2, Cloud, Shield, BarChart3, Users, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhySalesforce = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Cloud,
      titleKey: "why.cloud",
      descKey: "why.cloud.desc",
    },
    {
      icon: Shield,
      titleKey: "why.security",
      descKey: "why.security.desc",
    },
    {
      icon: BarChart3,
      titleKey: "why.analytics",
      descKey: "why.analytics.desc",
    },
    {
      icon: Users,
      titleKey: "why.vision",
      descKey: "why.vision.desc",
    },
    {
      icon: Sparkles,
      titleKey: "why.ai",
      descKey: "why.ai.desc",
    },
    {
      icon: CheckCircle2,
      titleKey: "why.scalability",
      descKey: "why.scalability.desc",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {t("why.label")}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              {t("why.title")}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {t("why.description")}
            </p>
            <div className="flex items-center gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary">150K+</div>
                <div className="text-sm text-muted-foreground">{t("why.companies")}</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-4xl font-bold text-primary">#1</div>
                <div className="text-sm text-muted-foreground">{t("why.globalCRM")}</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <div className="text-4xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right grid */}
          <div className="grid grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <benefit.icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{t(benefit.titleKey)}</h3>
                <p className="text-sm text-muted-foreground">{t(benefit.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySalesforce;
