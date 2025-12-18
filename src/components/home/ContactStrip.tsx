import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const ContactStrip = () => {
  return (
    <section className="py-16 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              ¿Listo para transformar tu negocio?
            </h2>
            <p className="text-primary-foreground/80">
              Agenda una consulta gratuita y descubre cómo Salesforce puede ayudarte.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" variant="hero">
              <Link to="/contacto">
                <MessageCircle className="h-5 w-5 mr-2" />
                Contactar ahora
              </Link>
            </Button>
            <Button asChild size="lg" variant="heroOutline">
              <Link to="/contacto">
                Solicitar Demo
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;
