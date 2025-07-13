
import { Button } from "@/components/ui/button";

const AppDownload = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-400 to-orange-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-300 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 hover:scale-105 transition-transform duration-300">Ready to Taste Home?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Download the Bhookle app and connect with amazing home chefs in your neighborhood
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
        
        <p className="text-orange-100 animate-fade-in" style={{ animationDelay: '0.6s' }}>Available on iOS and Android • Free Download</p>
      </div>
    </section>
  );
};

export default AppDownload;
