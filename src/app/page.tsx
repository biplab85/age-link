import Hero from "@/components/sections/Hero";
import ValueProps from "@/components/sections/ValueProps";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import ServicesOverview from "@/components/sections/ServicesOverview";
import DoctorProfile from "@/components/sections/DoctorProfile";
import HowItWorks from "@/components/sections/HowItWorks";
import ImageGallery from "@/components/sections/ImageGallery";
import ContactSection from "@/components/sections/ContactSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueProps />
      <WhoWeHelp />
      <ServicesOverview />
      <DoctorProfile />
      <HowItWorks />
      <ImageGallery />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
