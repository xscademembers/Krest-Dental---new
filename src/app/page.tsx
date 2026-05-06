import { ComfortGallery } from "@/components/ComfortGallery";
import { FloatingCallButton } from "@/components/FloatingCallButton";
import { HeroSection } from "@/components/HeroSection";
import { InstagramStrip } from "@/components/InstagramStrip";
import { ServicesSection } from "@/components/ServicesSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StatsBanner } from "@/components/StatsBanner";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <StatsBanner />
        <TestimonialsCarousel />
        <ServicesSection />
        <ComfortGallery />
        <InstagramStrip />
      </main>
      <SiteFooter />
      <FloatingCallButton />
    </>
  );
}
