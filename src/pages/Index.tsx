import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import WhySalesforce from "@/components/home/WhySalesforce";
import ContactStrip from "@/components/home/ContactStrip";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesGrid />
      <WhySalesforce />
      <ContactStrip />
    </Layout>
  );
};

export default Index;
