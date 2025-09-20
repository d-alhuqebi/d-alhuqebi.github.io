
import React, { useState } from 'react';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import ServicePages from './ServicePages';
import AchievementsPage from './AchievementsPage';
import { Header } from './accounting-website/layout/Header';
import { MobileMenu } from './accounting-website/layout/MobileMenu';
import { Footer } from './accounting-website/layout/Footer';
import { Hero } from './accounting-website/Hero';
import { ServicesOverview } from './accounting-website/ServicesOverview';
import { AboutPage } from './accounting-website/AboutPage';
import { TeamPage } from './accounting-website/TeamPage';
import { ContactPage } from './accounting-website/ContactPage';
import { ContactModal } from './accounting-website/ContactModal';
import { ServicesList } from './accounting-website/ServicesList';
import { WhatsAppButton } from './accounting-website/WhatsAppButton';
import { FeaturedProjects } from './accounting-website/FeaturedProjects';
import { TestimonialsCarousel } from './accounting-website/TestimonialsCarousel';
import { LatestNews } from './accounting-website/LatestNews';
import { PartnersClients } from './accounting-website/PartnersClients';
import { tabs, services } from './accounting-website/data';

const AccountingWebsite = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<number | null>(null);
  const { toast } = useToast();

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال رسالتك بنجاح",
      description: "سيتم التواصل معك قريباً إن شاء الله",
    });
    setIsContactOpen(false);
  };

  const handleMobileMenuTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMobileMenuOpen(false);
    setSelectedServiceDetail(null);
  };

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setSelectedServiceDetail(null);
  };

  return (
    <div className="min-h-screen bg-background font-arabic">
      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <Header 
          tabs={tabs}
          activeTab={activeTab}
          isMobileMenuOpen={isMobileMenuOpen}
          onTabChange={handleTabChange}
          onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        />
        
        <MobileMenu 
          tabs={tabs}
          activeTab={activeTab}
          onTabClick={handleMobileMenuTabClick}
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />

        <main className="pt-16">
          <TabsContent value="home" className="-mt-16 space-y-12">
            <Hero 
              onContactOpen={() => setIsContactOpen(true)}
              onServicesClick={() => handleTabChange("services")}
            />
            <FeaturedProjects />
            <TestimonialsCarousel />
            <ServicesOverview 
              services={services}
              onServiceClick={(index) => {
                handleTabChange("services");
                setSelectedServiceDetail(index);
              }}
              onViewAllClick={() => handleTabChange("services")}
            />
            <LatestNews />
            <PartnersClients />
          </TabsContent>

          <TabsContent value="about" className="space-y-8 container mx-auto px-4 py-8">
            <AboutPage />
          </TabsContent>

          <TabsContent value="services" className="space-y-8 container mx-auto px-4 py-8">
            {selectedServiceDetail !== null ? (
              <ServicePages
                serviceId={selectedServiceDetail}
                onBack={() => setSelectedServiceDetail(null)}
                onContactClick={(serviceName) => {
                  setSelectedService(serviceName);
                  setIsContactOpen(true);
                }}
              />
            ) : (
              <ServicesList 
                services={services}
                onServiceClick={(index) => setSelectedServiceDetail(index)}
                onConsultationClick={(title) => {
                  setSelectedService(title);
                  setIsContactOpen(true);
                }}
              />
            )}
          </TabsContent>

          <TabsContent value="achievements" className="container mx-auto px-4 py-8">
            <AchievementsPage />
          </TabsContent>

          <TabsContent value="team" className="space-y-8 container mx-auto px-4 py-8">
            <TeamPage />
          </TabsContent>

          <TabsContent value="contact" className="space-y-8 container mx-auto px-4 py-8">
            <ContactPage />
          </TabsContent>
        </main>
      </Tabs>

      <Footer />

      <ContactModal 
        isOpen={isContactOpen}
        onOpenChange={setIsContactOpen}
        onSubmit={handleContactSubmit}
        selectedService={selectedService}
        onServiceChange={setSelectedService}
      />
      
      <WhatsAppButton />
    </div>
  );
};

export default AccountingWebsite;
