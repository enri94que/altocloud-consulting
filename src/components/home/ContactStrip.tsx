import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import ContactFormDialog from "./ContactFormDialog";

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
            <ContactFormDialog variant="contact">
              <Button size="lg" variant="hero">
                <MessageCircle className="h-5 w-5 mr-2" />
                Contactar ahora
              </Button>
            </ContactFormDialog>
            <ContactFormDialog variant="demo">
              <Button size="lg" variant="heroOutline">
                Solicitar Demo
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </ContactFormDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;
