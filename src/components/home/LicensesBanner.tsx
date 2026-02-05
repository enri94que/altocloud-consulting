 import { Link } from "react-router-dom";
 import { Button } from "@/components/ui/button";
 import { CreditCard, ArrowRight } from "lucide-react";
 import { useLanguage } from "@/contexts/LanguageContext";
 
 const LicensesBanner = () => {
   const { t } = useLanguage();
 
   return (
     <section className="py-12 bg-secondary/50 border-y border-border">
       <div className="container mx-auto px-4">
         <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
           <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
               <CreditCard className="h-6 w-6 text-primary" />
             </div>
             <div>
               <h3 className="font-serif text-lg md:text-xl font-semibold text-foreground">
                 {t("licensesBanner.title")}
               </h3>
               <p className="text-muted-foreground text-sm md:text-base">
                 {t("licensesBanner.description")}
               </p>
             </div>
           </div>
           <Link to="/precios">
             <Button variant="outline" className="gap-2 whitespace-nowrap">
               {t("licensesBanner.cta")}
               <ArrowRight className="h-4 w-4" />
             </Button>
           </Link>
         </div>
       </div>
     </section>
   );
 };
 
 export default LicensesBanner;