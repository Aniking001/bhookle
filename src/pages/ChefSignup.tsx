import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChefHat, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChefSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    area: "",
    experience: "",
    specialties: "",
    additionalInfo: "",
    foodType: "veg",
    fssai: "no",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Chef signup form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-orange-200/50">
  <div className="container mx-auto px-4 py-4 flex items-center justify-between">

  
  {/* Logo + CONTACT US text */}
  <div className="flex items-center gap-3">
    <img
      src="/lovable-uploads/a73cf128-8873-4519-be90-568657e11067.png"
      alt="Bhookle Logo"
      className="h-10 w-auto cursor-pointer transition-transform duration-300 hover:scale-110"
      onClick={() => navigate('/')}
    />
    
  </div>

  {/* Back to Home Button */}
  <button
    onClick={() => navigate('/')}
    className="flex items-center gap-2 border border-orange-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-orange-50 transition self-start sm:self-auto"
  >
    <ArrowLeft className="w-4 h-4" />
    Back to Home
  </button>
</div>

</div>


      {/* Centered Form */}
      <div className="flex justify-center px-4 py-12">
        <div className="w-full max-w-2xl bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-orange-200/50">
          <div className="flex items-center gap-3 mb-6">
            <ChefHat className="w-8 h-8 text-[#FFB220]" />
            <h2 className="text-2xl font-bold text-gray-900">Chef Application</h2>
          </div>

          {submitted && (
            <div className="mb-4 p-3 text-green-800 bg-green-100 border border-green-300 rounded-lg text-center">
              ✅ Thank you for your response! We'll reach out soon.
            </div>
          )}

         <form onSubmit={handleSubmit} className="space-y-6">
  <InputGroup 
    label="Full Name *" 
    id="fullName" 
    value={formData.fullName} 
    onChange={e => handleInputChange("fullName", e.target.value)} 
  />

  <InputGroup 
    label="Email Address *" 
    id="email" 
    type="email" 
    value={formData.email} 
    onChange={e => handleInputChange("email", e.target.value)} 
  />

  <InputGroup 
    label="Phone Number *" 
    id="phone" 
    type="tel" 
    value={formData.phone} 
    onChange={e => handleInputChange("phone", e.target.value)} 
  />

  {/* City FIRST */}
  <div className="space-y-2">
    <Label htmlFor="city" className="text-gray-700 font-medium">City *</Label>
    <Select onValueChange={value => handleInputChange("city", value)} required>
      <SelectTrigger className="border-orange-200 focus:border-[#FFB220]">
        <SelectValue placeholder="Select your city" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="chennai">Chennai</SelectItem>
        <SelectItem value="bengaluru">Bengaluru</SelectItem>
        <SelectItem value="other">Other</SelectItem>
      </SelectContent>
    </Select>
  </div>

  {/* Area NEXT */}
  <InputGroup 
    label="Area *" 
    id="area" 
    value={formData.area} 
    onChange={e => handleInputChange("area", e.target.value)} 
  />

            {/* Experience */}
            <div className="space-y-2">
              <Label htmlFor="experience" className="text-gray-700 font-medium">Cooking Experience *</Label>
              <Select onValueChange={value => handleInputChange("experience", value)} required>
                <SelectTrigger className="border-orange-200 focus:border-[#FFB220]">
                  <SelectValue placeholder="Select your experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
                  <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                  <SelectItem value="experienced">Experienced (5+ years)</SelectItem>
                  <SelectItem value="professional">Professional Chef</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <InputGroup label="Cuisine Specialties *" id="specialties" value={formData.specialties} onChange={e => handleInputChange("specialties", e.target.value)} />

            {/* Veg / Non-Veg */}
            <div className="space-y-2">
              <Label className="text-gray-700 font-medium">Veg / Non-Veg *</Label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input type="radio" name="foodType" value="veg" checked={formData.foodType === "veg"} onChange={e => handleInputChange("foodType", e.target.value)} />
                  Veg
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="foodType" value="nonveg" checked={formData.foodType === "nonveg"} onChange={e => handleInputChange("foodType", e.target.value)} />
                  Non-Veg
                </label>
              </div>
            </div>

            {/* FSSAI */}
            <div className="space-y-2">
              <Label className="text-gray-700 font-medium">FSSAI Registered *</Label>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input type="radio" name="fssai" value="yes" checked={formData.fssai === "yes"} onChange={e => handleInputChange("fssai", e.target.value)} />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="fssai" value="no" checked={formData.fssai === "no"} onChange={e => handleInputChange("fssai", e.target.value)} />
                  No
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalInfo" className="text-gray-700 font-medium">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                placeholder="Tell us about your cooking style, any certifications, or special dishes..."
                value={formData.additionalInfo}
                onChange={e => handleInputChange("additionalInfo", e.target.value)}
                className="border-orange-200 focus:border-[#FFB220] min-h-[100px]"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FFB220] to-orange-500 hover:from-orange-500 hover:to-[#FFB220] text-white py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Submit Application
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Reusable Input Group
const InputGroup = ({ label, id, value, type = "text", onChange }: any) => (
  <div className="space-y-2">
    <Label htmlFor={id} className="text-gray-700 font-medium">{label}</Label>
    <Input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      required
      className="border-orange-200 focus:border-[#FFB220] focus:ring-[#FFB220]"
    />
  </div>
);

export default ChefSignup;
