import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";

interface LanguageSwitcherProps {
  variant?: "navbar" | "footer";
}

const LanguageSwitcher = ({ variant = "navbar" }: LanguageSwitcherProps) => {
  const { language, setLanguage, t } = useLanguage();

  if (variant === "footer") {
    return (
      <div className="flex items-center gap-2">
        <Globe className="h-4 w-4 text-primary-foreground/70" />
        <button
          onClick={() => setLanguage("es")}
          className={`text-sm transition-colors ${
            language === "es"
              ? "text-primary-foreground font-medium"
              : "text-primary-foreground/70 hover:text-primary-foreground"
          }`}
        >
          ES
        </button>
        <span className="text-primary-foreground/50">|</span>
        <button
          onClick={() => setLanguage("en")}
          className={`text-sm transition-colors ${
            language === "en"
              ? "text-primary-foreground font-medium"
              : "text-primary-foreground/70 hover:text-primary-foreground"
          }`}
        >
          EN
        </button>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{language.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card border border-border shadow-lg z-50">
        <DropdownMenuItem
          onClick={() => setLanguage("es")}
          className={`cursor-pointer ${language === "es" ? "bg-secondary" : ""}`}
        >
          🇪🇸 {t("language.es")}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`cursor-pointer ${language === "en" ? "bg-secondary" : ""}`}
        >
          🇬🇧 {t("language.en")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
