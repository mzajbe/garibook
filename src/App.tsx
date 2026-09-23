import { Navbar } from './components/common/Navbar';
import { HeroSection } from './components/home/HeroSection';
import { StatsSection } from './components/home/StatsSection';
import { ServicesSection } from './components/home/ServicesSection';
import { FreedomSection } from './components/home/FreedomSection';
import { MoreThanMilesSection } from './components/home/MoreThanMilesSection';
import { HandsOnBentoSection } from './components/home/HandsOnBentoSection';
import { DriverCtaSection } from './components/home/DriverCtaSection';
import { NewsSection } from './components/home/NewsSection';
import { TestimonialsSection } from './components/home/TestimonialsSection';
import { BeyondDestinationsSection } from './components/home/BeyondDestinationsSection';
import { AppDownloadCtaSection } from './components/home/AppDownloadCtaSection';
import { Footer } from './components/common/Footer';

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      {/* 1. Header Navigation */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* 2 & 3. Hero Section & Overlapping Search Widget */}
        <HeroSection />

        {/* 4. Blue Statistics & City Silhouette Section */}
        <StatsSection />

        {/* 5. Services Section ("Every Ride, One Platform") */}
        <ServicesSection />

        {/* 6. Freedom in Every Journey (Black section with luxury car couple) */}
        <FreedomSection />

        {/* 7. More Than Miles — We Bring People Together (3 Story cards) */}
        <MoreThanMilesSection />

        {/* 8. From Booking to Arrival It's All In Your Hands (Dark Bento Grid) */}
        <HandsOnBentoSection />

        {/* 9. Be a Smart Driver (Yellow banner with driver cutout) */}
        <DriverCtaSection />

        {/* 10. We Featured by Top news Platforms */}
        <NewsSection />

        {/* 11. Our Passengers Speak For Us (Video testimonials with red play buttons) */}
        <TestimonialsSection />

        {/* 12. Beyond Destinations (3 Travel guide cards) */}
        <BeyondDestinationsSection />

        {/* 13. Download Garibook Mobile App (Blue banner with phone in hand) */}
        <AppDownloadCtaSection />
      </main>

      {/* 14. Footer with multi-column links, partner portal, payment methods */}
      <Footer />
    </div>
  );
}

export default App;
