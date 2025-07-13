
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#341c3c]/20 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img 
              src="/lovable-uploads/a73cf128-8873-4519-be90-568657e11067.png" 
              alt="Bhookle Logo" 
              className="h-12 w-auto hover:scale-110 transition-transform duration-300"
            />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Connecting food lovers with passionate home chefs, one meal at a time. 
            Experience the warmth of home-cooked food, made with love.
          </p>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            © 2025 Bhookle. Made with <span className="text-[#FFB220] animate-pulse">♥</span> for food lovers everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
