
import { TrendingUp, Users, Star } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8 text-[#FFB220]" />,
      number: "50K+",
      label: "Happy Meals Served",
      description: "Delicious home-cooked meals delivered with love"
    },
    {
      icon: <Users className="w-8 h-8 text-[#FFB220]" />,
      number: "20K+",
      label: "Active Customers",
      description: "Food lovers who trust us for authentic flavors"
    },
    {
      icon: <Star className="w-8 h-8 text-[#FFB220]" />,
      number: "1000+",
      label: "Home Chefs",
      description: "Talented neighborhood chefs ready to serve you"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#341c3c] to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-6 h-6 bg-[#FFB220] rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-4 h-4 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-[#FFB220] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-orange-300 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:from-[#FFB220] hover:to-purple-400 transition-all duration-500">
            Our Growing Community
          </h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Join thousands of food lovers experiencing the joy of authentic home-cooked meals
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-[#FFB220] to-orange-400 mx-auto mt-4 rounded-full animate-scale-in hover:from-purple-400 hover:to-[#FFB220] transition-all duration-500" style={{ animationDelay: '0.3s' }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group animate-fade-in hover:scale-110 transition-all duration-500 transform"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:shadow-2xl border border-white/10 hover:border-[#FFB220]/50 group-hover:-translate-y-3">
                <div className="flex justify-center mb-6 group-hover:scale-125 transition-transform duration-500">
                  <div className="p-4 bg-gradient-to-br from-[#FFB220]/20 to-orange-400/20 rounded-full group-hover:rotate-12 transition-transform duration-500">
                    <div className="group-hover:animate-pulse">
                      {stat.icon}
                    </div>
                  </div>
                </div>
                <div className="text-5xl font-bold text-[#FFB220] mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
                  index % 2 === 0 ? 'group-hover:text-[#FFB220]' : 'group-hover:text-purple-300'
                }`}>
                  {stat.label}
                </h3>
                <p className="text-purple-200 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
