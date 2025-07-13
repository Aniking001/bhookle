
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-orange-50 py-20 overflow-hidden">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-4 h-4 bg-[#FFB220] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-[#FFB220] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-orange-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center bg-gradient-to-r from-[#FFB220]/20 to-orange-200/20 text-gray-800 border border-[#FFB220]/30 px-6 py-3 rounded-full text-sm font-medium mb-6 animate-fade-in hover:scale-105 transition-all duration-500 hover:shadow-lg">
              <MapPin className="w-4 h-4 mr-2 animate-pulse" />
              Now Serving Chennai and Bengaluru
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Home Cooked{" "}
              <span className="text-[#FFB220] relative bg-gradient-to-r from-[#FFB220] to-orange-400 bg-clip-text text-transparent animate-scale-in hover:from-purple-600 hover:to-purple-400 transition-all duration-500" style={{ animationDelay: '0.5s' }}>
                Happiness
              </span>
              <br />
              <span className="text-gray-800 animate-fade-in hover:text-[#FFB220] transition-colors duration-500" style={{ animationDelay: '0.7s' }}>Delivered</span>
            </h1>
            
            <div className="text-2xl font-semibold text-[#FFB220] mb-6 animate-fade-in opacity-0 hover:text-purple-600 transition-colors duration-500" style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}>
              Amma in a Dabba
            </div>
            
            <p className="text-xl text-gray-700 mb-8 max-w-2xl animate-fade-in leading-relaxed opacity-0" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
              Connect with 1000+ neighborhood home chefs in your city. Experience authentic, fresh, and lovingly prepared meals made just for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in opacity-0" style={{ animationDelay: '1.3s', animationFillMode: 'forwards' }}>
              <div className="flex flex-wrap gap-4 items-center">
  <a href="https://apps.apple.com/in/app/bhookle/id6449941707" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
      alt="Download on the App Store" 
      className="h-12 w-auto hover:scale-105 transition-transform duration-300"
    />
  </a>
  <a href="https://play.google.com/store/apps/details?id=com.id.Bhookle&hl=en_IN" target="_blank" rel="noopener noreferrer">
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
      alt="Get it on Google Play" 
      className="h-12 w-auto hover:scale-105 transition-transform duration-300"
    />
  </a>
</div>


            </div>
            
            <div className="flex items-center justify-center lg:justify-start animate-fade-in opacity-0" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-4 shadow-lg flex items-center gap-3 hover:shadow-2xl transition-all duration-500 hover:scale-105 group border border-orange-200 hover:border-purple-400">
                 <Clock className="w-5 h-5 text-[#FFB220] group-hover:rotate-180 group-hover:text-purple-600 transition-all duration-500" />
                <span className="text-gray-800 font-medium group-hover:text-purple-700 transition-colors duration-500">Fresh & Hot - Delivered in 1 Hour</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative animate-scale-in opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFB220]/20 to-orange-400/10 rounded-2xl blur-2xl animate-pulse"></div>
              <img
                src="/lovable-uploads/21625d05-3b7b-4f82-be63-f01f5f87b42a.png"
                alt="Home Chef"
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-2xl relative z-10 hover:scale-105 transition-transform duration-700 border border-orange-200 hover:shadow-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
