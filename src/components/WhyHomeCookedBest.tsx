
import { Heart, Shield, Clock, Users } from "lucide-react";

const WhyHomeCookedBest = () => {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Made with Love",
      description: "Every meal is prepared with care and passion by home chefs who love cooking"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "Fresh & Healthy",
      description: "No preservatives, no artificial ingredients - just pure, wholesome food"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-500" />,
      title: "Always Fresh",
      description: "Meals are cooked fresh daily and delivered hot to your doorstep"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Community Connect",
      description: "Support local home chefs and build connections in your neighborhood"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 hover:text-purple-600 transition-colors duration-500">
            Why Home-Cooked is Best
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the difference that authentic home cooking makes
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFB220] to-orange-400 mx-auto mt-4 rounded-full animate-scale-in hover:from-purple-600 hover:to-purple-400 transition-all duration-500" style={{ animationDelay: '0.3s' }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl hover:shadow-2xl transition-all duration-500 animate-fade-in group hover:bg-gradient-to-br hover:from-white hover:to-orange-50 transform hover:-translate-y-2 hover:scale-105 border border-transparent hover:border-orange-200"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gray-50 rounded-full group-hover:bg-white group-hover:shadow-lg transition-all duration-500 group-hover:scale-110">
                  <div className="group-hover:animate-pulse">
                    {benefit.icon}
                  </div>
                </div>
              </div>
              <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                index % 2 === 0 ? 'group-hover:text-[#FFB220]' : 'group-hover:text-purple-600'
              }`}>
                {benefit.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHomeCookedBest;
