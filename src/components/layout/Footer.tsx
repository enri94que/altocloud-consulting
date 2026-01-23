import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";
import logoAltocloud from "@/assets/logo-altocloud.png";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src={logoAltocloud} alt="Altocloud" className="h-12 object-contain" />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md">
              {t("footer.description")}
            </p>
            <div className="mt-4">
              <LanguageSwitcher variant="footer" />
            </div>
          </div>

          {/* Soluciones */}
          <div>
            <h4 className="font-semibold mb-4">{t("nav.solutions")}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link to="/servicios/starter-pro-suite" className="hover:text-primary-foreground transition-colors">
                  Starter & Pro Suite
                </Link>
              </li>
              <li>
                <Link to="/servicios/sales-cloud" className="hover:text-primary-foreground transition-colors">
                  Sales Cloud
                </Link>
              </li>
              <li>
                <Link to="/servicios/service-cloud" className="hover:text-primary-foreground transition-colors">
                  Service Cloud
                </Link>
              </li>
              <li>
                <Link to="/servicios/nonprofit-cloud" className="hover:text-primary-foreground transition-colors">
                  Nonprofit Cloud
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link to="/servicios/implementacion-salesforce" className="hover:text-primary-foreground transition-colors">
                  {t("nav.implementation")}
                </Link>
              </li>
              <li>
                <Link to="/servicios/optimizacion-ajustes" className="hover:text-primary-foreground transition-colors">
                  {t("nav.optimization")}
                </Link>
              </li>
              <li>
                <Link to="/servicios/administracion-soporte" className="hover:text-primary-foreground transition-colors">
                  {t("nav.administration")}
                </Link>
              </li>
              <li>
                <Link to="/servicios/consultoria-estrategica" className="hover:text-primary-foreground transition-colors">
                  {t("nav.consulting")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:enrique@altocloud-consulting.com"
                  className="hover:text-primary-foreground transition-colors"
                >
                  enrique@altocloud-consulting.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+34681229933" className="hover:text-primary-foreground transition-colors">
                  +34 681 22 99 33
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{t("footer.location")}</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/in/enrique-arrufat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center text-sm text-primary-foreground/50">
          <p className="mb-2">© {new Date().getFullYear()} Altocloud Consulting. {t("footer.rights")}</p>
          <Link to="/politica-privacidad" className="hover:text-primary-foreground transition-colors">
            {t("footer.privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
