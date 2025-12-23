import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Target, BarChart3, Users, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import ContactFormDialog from "@/components/home/ContactFormDialog";
import SEO from "@/components/seo/SEO";
import StructuredData from "@/components/seo/StructuredData";

const benefits = [
  {
    icon: Target,
    title: "Gestión de leads y oportunidades",
    description: "Captura, califica y convierte leads en clientes con un pipeline visual y automatizado.",
  },
  {
    icon: BarChart3,
    title: "Previsiones de ventas precisas",
    description: "Obtén proyecciones de ingresos fiables basadas en datos reales de tu equipo.",
  },
  {
    icon: Users,
    title: "Colaboración en tiempo real",
    description: "Mantén a todo el equipo de ventas alineado con actualizaciones instantáneas.",
  },
  {
    icon: Zap,
    title: "Automatización inteligente",
    description: "Automatiza tareas repetitivas y enfócate en lo que importa: cerrar ventas.",
  },
];

const features = [
  "Gestión completa del ciclo de ventas",
  "Integración con email y calendario",
  "App móvil para ventas sobre la marcha",
  "Informes y dashboards personalizables",
  "IA Einstein para predicciones de ventas",
  "Integración con herramientas de marketing",
];

const SalesCloud = () => {
  return (
    <Layout>
      <SEO
        title="Sales Cloud"
        description="Acelera tus ventas con Sales Cloud. Gestión de leads, automatización comercial y previsiones de ventas con la plataforma CRM #1 del mundo."
        canonical="/servicios/sales-cloud"
      />
      <StructuredData
        type="service"
        name="Sales Cloud"
        description="Implementación y consultoría de Salesforce Sales Cloud para gestión comercial y automatización de ventas."
        url="/servicios/sales-cloud"
      />
      {/* Hero */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6">
              <TrendingUp className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Sales Cloud</h1>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Acelera tus ventas con la plataforma CRM #1 del mundo. Sales Cloud te ayuda a gestionar leads, cerrar más
              negocios y hacer crecer tus ingresos.
            </p>
            <ContactFormDialog variant="contact" defaultService="Sales_Cloud">
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Principales beneficios</h2>
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
                Todo lo que necesitas para vender más
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Sales Cloud ofrece un conjunto completo de herramientas diseñadas para ayudar a tu equipo de ventas a
                ser más productivo y cerrar más negocios.
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
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">¿Es Sales Cloud para ti?</h3>
              <p className="text-muted-foreground mb-6">Sales Cloud es ideal para empresas que buscan:</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  Aumentar la productividad del equipo de ventas
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  Mejorar la visibilidad del pipeline
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  Automatizar procesos de ventas
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  Tomar decisiones basadas en datos
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
            ¿Listo para potenciar tus ventas?
          </h2>
          <p className="text-primary-foreground/80 mb-8">Agenda una demostración personalizada de Sales Cloud.</p>
          <ContactFormDialog variant="demo" defaultService="Sales Cloud">
            <Button size="lg" variant="hero">
              Solicitar Demo Gratuita
            </Button>
          </ContactFormDialog>
        </div>
      </section>
    </Layout>
  );
};

export default SalesCloud;
