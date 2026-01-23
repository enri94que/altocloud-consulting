import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Precios from "./pages/Precios";
import SalesCloud from "./pages/services/SalesCloud";
import ServiceCloud from "./pages/services/ServiceCloud";
import NonprofitCloud from "./pages/services/NonprofitCloud";
import StarterProSuite from "./pages/services/StarterProSuite";
import ImplementacionSalesforce from "./pages/services/ImplementacionSalesforce";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Notarias from "./pages/landing/Notarias";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/precios" element={<Precios />} />
          <Route path="/servicios/sales-cloud" element={<SalesCloud />} />
          <Route path="/servicios/service-cloud" element={<ServiceCloud />} />
          <Route path="/servicios/nonprofit-cloud" element={<NonprofitCloud />} />
          <Route path="/servicios/starter-pro-suite" element={<StarterProSuite />} />
          <Route path="/servicios/implementacion-salesforce" element={<ImplementacionSalesforce />} />
          <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
          <Route path="/notarias" element={<Notarias />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
