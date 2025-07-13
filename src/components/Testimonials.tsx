
const Testimonials = () => {
  const testimonials = [
    {
      text: "I love the platform and the idea behind Bhookle as it permits those who enjoy food to share their joy with other food lovers. All the bachelors and those who find it difficult to make food at home can definitely benefit from this platform by ordering healthy and tasty homemade food. Looking forward to making full use of this service.",
      author: "Nitin Saxena",
      rating: 5
    },
    {
      text: "The best app for home-cooked food! The main highlight is that you can find a variety of cuisines with authentic homemade flavors. My go-to app for healthy and delicious homemade food!",
      author: "Bharati J",
      rating: 5
    },
    {
      text: "Excellent App for food from Home Chefs. Affordable cost and Quantity. Bought Kochu dosai and Idicha Milagu and Puttu Kadalai Curry. The taste was awesome and authentic taste of Kerala.",
      author: "Raghu",
      rating: 5
    },
    {
      text: "Have had an opportunity to try them out at my friend's home in Bangalore. There were Dabeli's, Vada Pavs, Rajma and Chole Sabji from two wonderful chefs. They all tasted sooo good. And because it was home made, it also felt super light on my tummy.",
      author: "Nanditha Shyam Prasad",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-16 w-20 h-20 bg-gradient-to-br from-[#FFB220] to-orange-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-24 right-20 w-16 h-16 bg-gradient-to-br from-purple-400 to-[#FFB220] rounded-full blur-lg animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-gradient-to-br from-orange-300 to-[#FFB220] rounded-full blur-md animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 hover:text-purple-600 transition-colors duration-500">
            What Our Food Lovers Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFB220] to-orange-400 mx-auto rounded-full animate-scale-in hover:from-purple-600 hover:to-purple-400 transition-all duration-500"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in border-l-4 border-transparent hover:border-[#FFB220] hover:bg-gradient-to-br hover:from-white hover:to-orange-50 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="hover:animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4 border-gray-100">
                <div className={`font-bold text-gray-900 transition-colors duration-300 ${
                  index % 2 === 0 ? 'group-hover:text-[#FFB220]' : 'group-hover:text-purple-600'
                }`}>
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-500 mt-1">Verified Customer</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
