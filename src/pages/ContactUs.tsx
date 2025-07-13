import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ContactUs = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setShowPopup(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FFF1D6] via-white to-purple-100">
      
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-orange-200/50">
       <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
  
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

      {/* Form Card */}
      <div className="max-w-3xl mx-auto bg-white mt-12 p-10 rounded-2xl shadow-2xl animate-fade-in-down">
        <h2 className="text-3xl font-bold text-purple-700 mb-8 text-center">Contact Us</h2>

        {showPopup && (
          <div className="mb-6 p-4 text-green-800 bg-green-100 border border-green-300 rounded-lg text-center transition-all duration-500 animate-fade-in">
            ✅ Thank you! We'll get back to you shortly.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FFB220]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FFB220]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FFB220]"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FFB220]"
            />
          </div>

          <textarea
            name="message"
            rows={5}
            placeholder="Your Query"
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#FFB220]"
          />

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#FFB220] hover:bg-purple-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
