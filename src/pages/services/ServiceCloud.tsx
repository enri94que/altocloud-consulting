import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Headphones, MessageSquare, Clock, Smile, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import ContactFormDialog from "@/components/home/ContactFormDialog";
import SEO from "@/components/seo/SEO";
import StructuredData from "@/components/seo/StructuredData";

const benefits = [
  {
    icon: MessageSquare,
    title: "Soporte omnicanal",
    description: "Atiende a tus clientes por email, chat, teléfono y redes sociales desde un solo lugar.",
  },
  {
    icon: Clock,
    title: "Resolución más rápida",
    description: "Reduce tiempos de respuesta con automatización y base de conocimientos.",
  },
  {
    icon: Smile,
    title: "Mejora la satisfacción",
    description: "Ofrece experiencias personalizadas que fidelizan a tus clientes.",
  },
  {
    icon: Zap,
    title: "Automatización inteligente",
    description: "Automatiza casos rutinarios y libera tiempo para consultas complejas.",
  },
];

const features = [
  "Gestión de casos centralizada",
  "Base de conocimientos",
  "Chat en vivo y chatbots",
  "Portal de autoservicio",
  "Encuestas de satisfacción",
  "Métricas y SLAs",
];

const ServiceCloud = () => {
  return (
    <Layout>
      <SEO
        title="Service Cloud"
        description="Mejora tu atención al cliente con Service Cloud. Soporte omnicanal, gestión de casos y automatización para aumentar la satisfacción."
        canonical="/servicios/service-cloud"
      />
      <StructuredData
        type="service"
        name="Service Cloud"
        description="Implementación y consultoría de Salesforce Service Cloud para atención al cliente omnicanal."
        url="/servicios/service-cloud"
      />
      {/* Hero */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center mb-6">
              <Headphones className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Service Cloud</h1>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Ofrece un servicio al cliente excepcional con herramientas omnicanal. Resuelve casos más rápido y aumenta
              la satisfacción de tus clientes.
            </p>
            <ContactFormDialog variant="contact" defaultService="Service_Cloud">
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
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Transforma tu atención al cliente</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Service Cloud te proporciona todas las herramientas para ofrecer un servicio al cliente de primera clase
                que fideliza y genera valor.
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
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">¿Es Service Cloud para ti?</h3>
              <p className="text-muted-foreground mb-6">Service Cloud es ideal para empresas que buscan:</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  Centralizar todos los canales de atención
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  Reducir tiempos de resolución de casos
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  Mejorar la satisfacción del cliente
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  Escalar el soporte sin perder calidad
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
            ¿Listo para mejorar tu servicio al cliente?
          </h2>
          <p className="text-primary-foreground/80 mb-8">Agenda una demostración personalizada de Service Cloud.</p>
          <ContactFormDialog variant="demo" defaultService="Service Cloud">
            <Button size="lg" variant="hero">
              Solicitar Demo Gratuita
            </Button>
          </ContactFormDialog>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceCloud;
