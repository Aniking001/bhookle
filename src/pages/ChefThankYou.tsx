import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChefThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 shadow-2xl border border-orange-200/50">
            {/* Success Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <CheckCircle className="w-24 h-24 text-green-500 animate-scale-in" />
                <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
              </div>
            </div>

            {/* Thank You Message */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Thank You for Your Application!
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Your chef application has been successfully submitted. Our team will review your 
              application and reach out to you within 24-48 hours to discuss the next steps.
            </p>

            <div className="bg-gradient-to-r from-[#FFB220]/10 to-orange-200/10 rounded-xl p-6 mb-8">
              <p className="text-gray-800 font-medium">
                We appreciate your interest in joining the Bhookle chef community and 
                look forward to welcoming you aboard!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/chef-signup')}
                className="bg-[#FFB220] hover:bg-orange-600 text-white px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Chef Signup
              </Button>
              
              <Button
                variant="outline"
                onClick={() => navigate('/')}
                className="border-2 border-orange-200 text-gray-700 hover:bg-orange-50 px-8 py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefThankYou;