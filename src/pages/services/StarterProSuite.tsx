import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Rocket, DollarSign, Clock, Settings, CheckCircle2, ArrowRight } from "lucide-react";
import ContactFormDialog from "@/components/home/ContactFormDialog";
import SEO from "@/components/seo/SEO";
import StructuredData from "@/components/seo/StructuredData";

const benefits = [
  {
    icon: Rocket,
    title: "Rápida implementación",
    description: "Empieza a usar Salesforce en días, no meses. Configuración simplificada.",
  },
  {
    icon: DollarSign,
    title: "Precio accesible",
    description: "Todas las funcionalidades esenciales a un precio diseñado para PYMEs.",
  },
  {
    icon: Clock,
    title: "Fácil de usar",
    description: "Interfaz intuitiva que no requiere formación técnica avanzada.",
  },
  {
    icon: Settings,
    title: "Escalable",
    description: "Crece con tu negocio. Actualiza a productos más avanzados cuando lo necesites.",
  },
];

const features = [
  "Gestión de contactos y cuentas",
  "Seguimiento de oportunidades",
  "Email integrado",
  "Informes básicos",
  "App móvil incluida",
  "Soporte técnico",
];

const StarterProSuite = () => {
  return (
    <Layout>
      <SEO
        title="Starter & Pro Suite"
        description="CRM para PYMEs con Starter y Pro Suite. Implementación rápida, precio accesible y toda la potencia de Salesforce."
        canonical="/servicios/starter-pro-suite"
      />
      <StructuredData
        type="service"
        name="Starter & Pro Suite"
        description="Implementación de Salesforce Starter y Pro Suite para pequeñas y medianas empresas."
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
              Starter & Pro Suite
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              La solución perfecta para pequeñas y medianas empresas. Toda la potencia 
              de Salesforce con una implementación rápida y un precio accesible.
            </p>
            <ContactFormDialog variant="contact" defaultService="Starter & Pro Suite">
              <Button size="lg" variant="hero">
                Contactar
              </Button>
            </ContactFormDialog>
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
                Empieza tu transformación digital
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Starter y Pro Suite ofrecen todo lo que necesitas para empezar 
                a gestionar tu negocio de forma profesional sin complicaciones.
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
                ¿Es Starter & Pro Suite para ti?
              </h3>
              <p className="text-muted-foreground mb-6">
                Estas soluciones son ideales para empresas que buscan:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  Dar el primer paso con un CRM profesional
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  Implementación rápida sin complicaciones
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  Precio accesible para PYMEs
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  Capacidad de crecer con el negocio
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
            ¿Listo para empezar con Salesforce?
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Agenda una demostración personalizada de Starter & Pro Suite.
          </p>
          <Button asChild size="lg" variant="hero">
            <Link to="/contacto">Solicitar Demo Gratuita</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default StarterProSuite;
