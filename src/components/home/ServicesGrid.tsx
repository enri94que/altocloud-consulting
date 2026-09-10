import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Headphones, Heart, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesGrid = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: TrendingUp,
      title: "Sales Cloud",
      descriptionKey: "services.salesCloud.description",
      path: "/servicios/sales-cloud",
      color: "from-blue-500 to-blue-600",
      linkKey: "services.salesCloud.link",
    },
    {
      icon: Headphones,
      title: "Service Cloud",
      descriptionKey: "services.serviceCloud.description",
      path: "/servicios/service-cloud",
      color: "from-green-500 to-green-600",
      linkKey: "services.serviceCloud.link",
    },
    {
      icon: Heart,
      title: "Nonprofit Cloud",
      descriptionKey: "services.nonprofitCloud.description",
      path: "/servicios/nonprofit-cloud",
      color: "from-purple-500 to-purple-600",
      linkKey: "services.nonprofitCloud.link",
    },
    {
      icon: Zap,
      title: "Starter & Pro Suite",
      descriptionKey: "services.starterSuite.description",
      path: "/servicios/starter-pro-suite",
      color: "from-orange-500 to-orange-600",
      linkKey: "services.starterSuite.link",
    },
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            {t("services.label")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2">
            {t("services.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card 
              key={service.path} 
              className="group h-full border-0 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {t(service.descriptionKey)}
                </p>
                <Link
                  to={service.path}
                  className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all"
                  aria-label={`${t(service.linkKey)} - ${language === "es" ? "Consultor de Salesforce en España" : "Salesforce consultant in Spain"}`}
                >
                  {t(service.linkKey)}
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
