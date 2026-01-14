import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import ContactFormDialog from "./ContactFormDialog";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactStrip = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
              {t("contactStrip.title")}
            </h2>
            <p className="text-primary-foreground/80">
              {t("contactStrip.description")}
            </p>
          </div>
          <ContactFormDialog variant="contact">
            <Button size="lg" variant="hero">
              <MessageCircle className="h-5 w-5 mr-2" />
              {t("contactStrip.cta")}
            </Button>
          </ContactFormDialog>
        </div>
      </div>
    </section>
  );
};

export default ContactStrip;
