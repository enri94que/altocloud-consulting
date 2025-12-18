import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Users, DollarSign, Calendar, Zap, CheckCircle2, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Gestión de donantes",
    description: "Construye relaciones duraderas con donantes y aumenta la recaudación.",
  },
  {
    icon: Users,
    title: "Coordinación de voluntarios",
    description: "Organiza, asigna y motiva a tu base de voluntarios de forma eficiente.",
  },
  {
    icon: Calendar,
    title: "Gestión de programas",
    description: "Planifica, ejecuta y mide el impacto de tus programas y proyectos.",
  },
  {
    icon: Zap,
    title: "Automatización de campañas",
    description: "Crea campañas de fundraising efectivas con herramientas automatizadas.",
  },
];

const features = [
  "Gestión integral de donantes",
  "Seguimiento de voluntarios",
  "Gestión de subvenciones",
  "Informes de impacto",
  "Integración con plataformas de donación",
  "Comunicación personalizada",
];

const NonprofitCloud = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6">
              <Heart className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Nonprofit Cloud
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Potencia el impacto de tu ONG con herramientas diseñadas específicamente 
              para organizaciones sin ánimo de lucro. Gestiona donantes, voluntarios y programas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="hero">
                <Link to="/contacto">Solicitar Demo</Link>
              </Button>
              <Button asChild size="lg" variant="heroOutline">
                <Link to="/contacto">Contactar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
              Principales beneficios
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:shadow-card-hover transition-all duration-300"
              >
                <benefit.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
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
                Maximiza tu impacto social
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Nonprofit Cloud está diseñado para ayudar a las organizaciones sin 
                ánimo de lucro a gestionar sus operaciones y amplificar su misión.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                ¿Es Nonprofit Cloud para ti?
              </h3>
              <p className="text-muted-foreground mb-6">
                Nonprofit Cloud es ideal para organizaciones que buscan:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  Aumentar la recaudación de fondos
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  Mejorar la gestión de voluntarios
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  Medir y comunicar el impacto
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  Profesionalizar sus operaciones
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            ¿Listo para amplificar tu impacto?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Agenda una demostración personalizada de Nonprofit Cloud.
          </p>
          <Button asChild size="lg" variant="hero">
            <Link to="/contacto">Solicitar Demo Gratuita</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default NonprofitCloud;
