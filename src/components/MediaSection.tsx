
import { Newspaper, Award, Star, Quote } from "lucide-react";

const MediaSection = () => {
  const mediaItems = [
    {
      title: "Home Chefs Access Bigger Platforms",
      source: "Deccan Herald",
      icon: <Newspaper className="w-6 h-6" />,
      description: "Today, these home chefs have access to much bigger platforms than just social media and messaging groups to showcase their culinary skills, offering diners the opportunity to experience micro-regional dishes often missing from mainstream menus"
    },
    {
      title: "Transforming Bengaluru's Food Scene",
      source: "Hotelier India",
      icon: <Star className="w-6 h-6" />,
      description: "Bhookle is transforming the way Bengaluru experiences home-cooked meals. More than just a food delivery service, Bhookle connects food lovers with talented home chefs, bringing warmth, nostalgia, and authenticity to every dish."
    },
    {
      title: "Selling Memories Through Meals",
      source: "The Hindu",
      icon: <Quote className="w-6 h-6" />,
      description: "Food delivery app Bhookle and its army of homecooks aim to sell memories that make meals wholesome"
    },
    {
      title: "Best Food Delivery App Award",
      source: "Food Connoisseurs India Awards 2024",
      icon: <Award className="w-6 h-6" />,
      description: "Bhookle, a pioneering platform connecting home chefs with food lovers, has been honoured with the Best Food Delivery App of the Year award at the Food Connoisseurs India Awards 2024."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-[#341c3c] to-purple-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-8 h-8 bg-[#FFB220] opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-orange-400 opacity-20 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-[#FFB220] opacity-20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-20 w-7 h-7 bg-orange-300 opacity-20 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent hover:from-[#FFB220] hover:to-purple-300 transition-all duration-500">
            Bhookle in Media
          </h2>
          <p className="text-xl text-purple-200">
            Recognized by leading media outlets and industry awards
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mediaItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-500 hover:-translate-y-3 animate-fade-in group hover:shadow-2xl border border-white/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#FFB220]/20 rounded-lg text-[#FFB220] group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-[#FFB220] font-bold text-sm">{item.source}</div>
              </div>
              <h3 className={`font-bold text-lg mb-4 transition-colors duration-300 ${
                index % 2 === 0 ? 'group-hover:text-[#FFB220]' : 'group-hover:text-purple-300'
              }`}>
                {item.title}
              </h3>
              <p className="text-purple-200 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
