
import { Button } from "@/components/ui/button";
import { Play, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#0a0a2a] shadow-lg border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 animate-fade-in hover:scale-105 transition-transform duration-300 bg-transparent border-none cursor-pointer"
          >
            <img 
              src="/lovable-uploads/a73cf128-8873-4519-be90-568657e11067.png" 
              alt="Bhookle Logo" 
              className="h-10 w-auto"
            />
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Button 
              variant="ghost" 
              className="text-white hover:text-purple-400 flex items-center gap-2 transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://www.youtube.com/watch?v=e6FdOXB80Fs', '_blank')}
            >
              <Play className="w-4 h-4" />
              Our Story
            </Button>
            <Button 
  className="bg-[#FFB220] text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-purple-600 hover:text-white hover:scale-105 hover:shadow-lg"
  onClick={() => navigate('/contacts')}
>
  Contact Us
</Button>

            <Button 
  className="bg-purple-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-[#FFB220] hover:text-white hover:scale-105 hover:shadow-lg"
  onClick={() => navigate('/chef-signup')}
>
  Become a Chef
</Button>

          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-purple-400 transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a2a] border-t border-gray-700 animate-fade-in">
            <nav className="flex flex-col space-y-4 p-4">
              <Button 
                variant="ghost" 
                className="text-white hover:text-purple-400 flex items-center gap-2 transition-all duration-300 justify-start"
                onClick={() => {
                  window.open('https://www.youtube.com/watch?v=e6FdOXB80Fs', '_blank');
                  setIsMobileMenuOpen(false);
                }}
              >
                <Play className="w-4 h-4" />
                Our Story
              </Button>
              <Button 
                className="bg-[#FFB220] hover:bg-purple-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg"
                onClick={() => {
                  navigate('/contacts');
                  setIsMobileMenuOpen(false);
                }}
              >
                Contact Us
              </Button>
              <Button 
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg"
                onClick={() => {
                  navigate('/chef-signup');
                  setIsMobileMenuOpen(false);
                }}
              >
                Become a Chef
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
