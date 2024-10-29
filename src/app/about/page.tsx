const About = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div id="about" className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">About BakeCrafters</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto">
          At BakeCrafters, we believe in crafting every product with passion, dedication, and a sprinkle of love. 
          With years of experience in the art of baking, our team is committed to offering freshly baked goods 
          made from the finest ingredients. Whether you're craving the classic favorites or something innovative, 
          we've got you covered. Join us in celebrating the joy of baking, where every bite tells a story!
        </p>

        {/* Our Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/freshness.jpg" alt="Freshness" className="w-16 h-16 mx-auto mb-4"/>
            <h3 className="text-2xl font-bold text-gray-800">Fresh Ingredients</h3>
            <p className="text-gray-600">We use only the freshest, high-quality ingredients to ensure every bite is perfection.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/craftmanship-icon.jpg" alt="Craftsmanship" className="w-16 h-16 mx-auto mb-4"/>
            <h3 className="text-2xl font-bold text-gray-800">Craftsmanship</h3>
            <p className="text-gray-600">Our bakers are true artisans, dedicated to making every creation with skill and care.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img src="/customer-satisffaction-icon.jpg" alt="Customer Satisfaction" className="w-16 h-16 mx-auto mb-4"/>
            <h3 className="text-2xl font-bold text-gray-800">Customer Satisfaction</h3>
            <p className="text-gray-600">Your happiness is our top priority, and we strive to make your experience delightful.</p>
          </div>
        </div>

        <a
          href="/shop"
          className="bg-blue-600 text-white py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Explore Our Bakery
        </a>
      </div>
    </section>
  );
};

export default About;
