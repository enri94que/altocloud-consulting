import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhySalesforce from "@/components/home/WhySalesforce";
import ContactStrip from "@/components/home/ContactStrip";
 import LicensesBanner from "@/components/home/LicensesBanner";
import SEO from "@/components/seo/SEO";
import StructuredData from "@/components/seo/StructuredData";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Inicio"
        description="Consultor Salesforce certificado en España. Implementación de Sales Cloud, Service Cloud, Nonprofit Cloud y Starter Suite. Transforma tu empresa."
        canonical="/"
      />
      <StructuredData type="organization" />
      <HeroSection />
      <ServicesGrid />
      <WhySalesforce />
       <LicensesBanner />
      <ContactStrip />
    </Layout>
  );
};

export default Index;
