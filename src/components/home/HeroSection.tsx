import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
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
            Consultor Certificado Salesforce
          </span>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Transforma tu empresa con el poder de{" "}
            <span className="text-accent">Salesforce</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Impulsa tus ventas, mejora tu atención al cliente y optimiza tus procesos 
            con las soluciones CRM líderes del mercado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" variant="hero">
              <Link to="/contacto">
                Solicitar Demo
                <Play className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="heroOutline">
              <Link to="/contacto">
                Contactar
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-primary-foreground/60 text-sm mb-4">Experto en soluciones empresariales</p>
            <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/40">
              <span className="text-sm font-medium">✓ Consultor Certificado</span>
              <span className="text-sm font-medium">✓ +5 años de experiencia</span>
              <span className="text-sm font-medium">✓ Proyectos exitosos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
