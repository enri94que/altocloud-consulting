import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import SalesCloud from "./pages/services/SalesCloud";
import ServiceCloud from "./pages/services/ServiceCloud";
import NonprofitCloud from "./pages/services/NonprofitCloud";
import StarterProSuite from "./pages/services/StarterProSuite";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/servicios/sales-cloud" element={<SalesCloud />} />
          <Route path="/servicios/service-cloud" element={<ServiceCloud />} />
          <Route path="/servicios/nonprofit-cloud" element={<NonprofitCloud />} />
          <Route path="/servicios/starter-pro-suite" element={<StarterProSuite />} />
          <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
