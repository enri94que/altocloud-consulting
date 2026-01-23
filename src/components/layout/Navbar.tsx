import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logoAltocloud from "@/assets/logo-altocloud.png";
import ContactFormDialog from "@/components/home/ContactFormDialog";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    name: "Starter & Pro Suite",
    path: "/servicios/starter-pro-suite",
  },
  {
    name: "Sales Cloud",
    path: "/servicios/sales-cloud",
  },
  {
    name: "Service Cloud",
    path: "/servicios/service-cloud",
  },
  {
    name: "Nonprofit Cloud",
    path: "/servicios/nonprofit-cloud",
  },
  {
    nameKey: "implementation.navName",
    name: "Implementación Salesforce",
    path: "/servicios/implementacion-salesforce",
  },
  {
    nameKey: "optimization.navName",
    name: "Optimización y Ajustes",
    path: "/servicios/optimizacion-ajustes",
  },
  {
    nameKey: "administration.navName",
    name: "Administración y Soporte",
    path: "/servicios/administracion-soporte",
  },
  {
    nameKey: "consulting.navName",
    name: "Consultoría Estratégica",
    path: "/servicios/consultoria-estrategica",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img alt="Altocloud Consulting" className="h-12 md:h-14 object-contain" src={logoAltocloud} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-muted-foreground"}`}
            >
              {t("nav.home")}
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {t("nav.services")}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border border-border shadow-lg z-50">
                {services.map((service) => (
                  <DropdownMenuItem key={service.path} asChild>
                    <Link to={service.path} className="cursor-pointer hover:bg-secondary">
                      {service.nameKey ? t(service.nameKey) : service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/precios"
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/precios") ? "text-primary" : "text-muted-foreground"}`}
            >
              {t("nav.licenses")}
            </Link>

            <Link
              to="/contacto"
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/contacto") ? "text-primary" : "text-muted-foreground"}`}
            >
              {t("nav.contact")}
            </Link>
            
            <LanguageSwitcher variant="navbar" />
          </div>

          {/* CTA Button */}
          <ContactFormDialog variant="demo">
            <Button>{t("nav.requestDemo")}</Button>
          </ContactFormDialog>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.home")}
              </Link>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-foreground">{t("nav.services")}</span>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="text-sm text-muted-foreground hover:text-primary pl-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.nameKey ? t(service.nameKey) : service.name}
                  </Link>
                ))}
              </div>
              <Link
                to="/precios"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.prices")}
              </Link>
              <Link
                to="/contacto"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {t("nav.contact")}
              </Link>
              <div className="pt-2 border-t border-border">
                <LanguageSwitcher variant="navbar" />
              </div>
              <ContactFormDialog variant="demo">
                <Button className="mt-2 w-full">{t("nav.requestDemo")}</Button>
              </ContactFormDialog>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
