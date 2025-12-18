import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesCarousel from "@/components/home/ServicesCarousel";
import WhySalesforce from "@/components/home/WhySalesforce";
import ContactStrip from "@/components/home/ContactStrip";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesCarousel />
      <WhySalesforce />
      <ContactStrip />
    </Layout>
  );
};

export default Index;
