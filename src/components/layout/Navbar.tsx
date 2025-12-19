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
const services = [
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
    name: "Starter & Pro Suite",
    path: "/servicios/starter-pro-suite",
  },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              alt="Altocloud Consulting"
              className="w-10 h-10 object-contain"
              src="https://res.cloudinary.com/dxw7yodru/image/upload/v1766136416/Logo_Altocloud_ki6tke.png"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-muted-foreground"}`}
            >
              Inicio
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Servicios
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border border-border shadow-lg z-50">
                {services.map((service) => (
                  <DropdownMenuItem key={service.path} asChild>
                    <Link to={service.path} className="cursor-pointer hover:bg-secondary">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/contacto"
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/contacto") ? "text-primary" : "text-muted-foreground"}`}
            >
              Contacto
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild>
              <Link to="/contacto">Solicitar Demo</Link>
            </Button>
          </div>

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
                Inicio
              </Link>
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold text-foreground">Servicios</span>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="text-sm text-muted-foreground hover:text-primary pl-4"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <Link
                to="/contacto"
                className="text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <Button asChild className="mt-2">
                <Link to="/contacto" onClick={() => setIsOpen(false)}>
                  Solicitar Demo
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
