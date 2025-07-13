import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ChefHat, Users, Heart, Utensils } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Business = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: "",
    cityName: "",
    contactPerson: "",
    businessEmail: "",
    phoneNumber: "",
    numberOfEmployees: "",
    additionalInfo: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "Form Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    navigate('/business/thankyou');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="flex items-center gap-2 hover:bg-gray-100"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Bhookle
              </Button>
              <img 
                src="/lovable-uploads/a73cf128-8873-4519-be90-568657e11067.png" 
                alt="Bhookle Logo" 
                className="h-8 w-auto"
              />
            </div>
            <div className="text-xl font-bold">
              <span className="text-[#FFB220]">Bhookle</span>
              <span className="text-purple-600 ml-2">Business</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Give Your Employees the Gift of{" "}
                <span className="bg-gradient-to-r from-[#FFB220] to-orange-400 bg-clip-text text-transparent">
                  Home-Cooked Food
                </span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                With Bhookle for Business, corporate teams enjoy curated, nutritious meals powered by 100s of trusted home chefs. Elevate workplace wellness and boost productivity—one meal at a time.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3 p-4 bg-white/60 rounded-lg">
                <ChefHat className="w-8 h-8 text-[#FFB220]" />
                <div>
                  <h3 className="font-semibold text-gray-900">100+ Home Chefs</h3>
                  <p className="text-sm text-gray-600">Verified & trusted</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/60 rounded-lg">
                <Users className="w-8 h-8 text-purple-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Team Wellness</h3>
                  <p className="text-sm text-gray-600">Healthy & fresh</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/60 rounded-lg">
                <Heart className="w-8 h-8 text-red-500" />
                <div>
                  <h3 className="font-semibold text-gray-900">Made with Love</h3>
                  <p className="text-sm text-gray-600">Authentic flavors</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/60 rounded-lg">
                <Utensils className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">Daily Fresh</h3>
                  <p className="text-sm text-gray-600">No preservatives</p>
                </div>
              </div>
            </div>

            {/* Chef Image */}
            <div className="relative animate-scale-in" style={{ animationDelay: '0.5s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFB220]/20 to-purple-400/10 rounded-2xl blur-2xl animate-pulse"></div>
              <img
                src="/lovable-uploads/cooking-5510047_1920.png"
                alt="Professional Chef"
                className="w-full max-w-sm mx-auto rounded-2xl shadow-2xl relative z-10 hover:scale-105 transition-transform duration-700 border border-orange-200"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Started Today</h2>
              <p className="text-gray-600">Fill out the form below and our team will reach out within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <Input
                  type="text"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City Name *
                </label>
                <Input
                  type="text"
                  placeholder="City Name"
                  value={formData.cityName}
                  onChange={(e) => handleInputChange('cityName', e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Person *
                </label>
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={formData.contactPerson}
                  onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Email *
                </label>
                <Input
                  type="email"
                  placeholder="you@company.com"
                  value={formData.businessEmail}
                  onChange={(e) => handleInputChange('businessEmail', e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  placeholder="10 digit mobile number"
                  value={formData.phoneNumber}
                  onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees *
                </label>
                <Select onValueChange={(value) => handleInputChange('numberOfEmployees', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="1-20 employees" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-20">1-20 employees</SelectItem>
                    <SelectItem value="21-50">21-50 employees</SelectItem>
                    <SelectItem value="51-100">51-100 employees</SelectItem>
                    <SelectItem value="101-500">101-500 employees</SelectItem>
                    <SelectItem value="500+">500+ employees</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information *
                </label>
                <Textarea
                  placeholder="Tell us about your specific requirements, preferred meal times, dietary restrictions, etc."
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                  required
                  className="w-full min-h-[100px]"
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-[#FFB220] to-orange-400 hover:from-orange-500 hover:to-orange-600 text-white py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;