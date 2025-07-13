
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyHomeCookedBest from "@/components/WhyHomeCookedBest";
import Testimonials from "@/components/Testimonials";
import MediaSection from "@/components/MediaSection";
import AppDownload from "@/components/AppDownload";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="animate-fade-in">
        <Hero />
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Stats />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <WhyHomeCookedBest />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Testimonials />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <MediaSection />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: '1s' }}>
          <AppDownload />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Index;
