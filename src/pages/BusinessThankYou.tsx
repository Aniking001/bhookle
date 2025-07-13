import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BusinessThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="mb-8 animate-scale-in">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <CheckCircle className="w-24 h-24 text-green-500 animate-pulse" />
              <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Thank You for Your Inquiry!
          </h1>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Your request has been successfully submitted. Our enterprise team will reach out to you within 24 hours to discuss your needs.
          </p>
          
          <p className="text-gray-600 mb-8">
            We appreciate your interest in Bhookle for Business.
          </p>

          {/* Actions */}
          <div className="space-y-4">
            <Button 
              onClick={() => navigate('/business')}
              className="w-full bg-gradient-to-r from-[#FFB220] to-orange-400 hover:from-orange-500 hover:to-orange-600 text-white py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Bhookle Business
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => navigate('/')}
              className="w-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Go to Main Site
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <img 
            src="/lovable-uploads/a73cf128-8873-4519-be90-568657e11067.png" 
            alt="Bhookle Logo" 
            className="h-8 w-auto mx-auto opacity-60"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessThankYou;