import Hero from "../components/Hero";


const HomePage = () => {
  return (
    
    <div>
      <Hero />

      {/* Home Section */}
      <section id="home" className="min-h-screen bg-white text-center py-20">
        <h1 className="text-5xl font-bold mb-6"> Uniqueness of BakeCrafters</h1>
        <p className="text-lg mb-6">At BakeCrafters, we believe that every baked good should be more than just a treat; it should be a memorable experience. From the moment you step into our bakery, the tantalizing aroma of freshly baked bread, cakes, and pastries will captivate your senses. We pride ourselves on using only the finest, all-natural ingredients, carefully handpicked to ensure each bite is as delightful as the last. Whether you're craving a melt-in-your-mouth cupcake, a rich and decadent chocolate cake, or a rustic loaf of artisanal bread, we've got something for every taste and occasion. At BakeCrafters, we pour our passion for baking into every creation, offering a perfect blend of traditional recipes with a modern twist. Come in, take a moment to indulge, and let us sweeten your day with something truly special. After all, at BakeCrafters, we don’t just bake – we craft joy, one treat at a time.

.</p>
        <button className=" bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600">
          Explore Our Shop
        </button>
      </section>
      </div>
)
}

 {/* About Section */}
 <section id='about' className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-800">About BakeCrafters</h2>
        <p className="text-lg text-gray-600 mb-20 max-w-xl px-4 sm:px-0">
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

     {/* Shop Section */}
     <section id="shop" className="min-h-screen bg-gray-100 text-center py-20">
      <h1 className="text-4xl font-bold mb-10">Our Delicious Bakery Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Item 1: Cupcakes */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="/cupcakes.jpg"
            alt="Cupcakes"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold">Cupcakes</h2>
          <p className="text-lg">$12.99</p>
        </div>

        {/* Item 2: Chocolate Cake */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="/chocolate-cake.jpg"
            alt="Chocolate Cake"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold">Chocolate Cake</h2>
          <p className="text-lg">$25.99</p>
        </div>

        {/* Item 3: Fresh Breads */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="/fresh-bread.jpg"
            alt="Fresh Breads"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold">Fresh Breads</h2>
          <p className="text-lg">$8.99</p>
        </div>

        {/* New Item 4: Lemon Bars */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="/lemon-bar.jpg"
            alt="Lemon Bars"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold">Lemon Bars</h2>
          <p className="text-lg">$5.99 for a pack of 4</p>
        </div>

        {/* New Item 5: Fruit Tarts */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="/fruit-tarts.jpg"
            alt="Fruit Tarts"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold">Fruit Tarts</h2>
          <p className="text-lg">$7.50 each</p>
        </div>

        {/* New Item 1: Macarons */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="/macarons.jpg"
            alt="Macarons"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold">Macarons</h2>
          <p className="text-lg">$15.99 per dozen</p>
        </div>

        {/* New Item 2: Croissants */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="/croissants.jpg"
            alt="Croissants"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold">Croissants</h2>
          <p className="text-lg">$3.50 each</p>
        </div>

        {/* New Item 3: Cinnamon Rolls */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="/cinamon-rolls.jpg"
            alt="Cinnamon Rolls"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold">Cinnamon Rolls</h2>
          <p className="text-lg">$4.99 each</p>
        </div>

        {/* New Item 4: Blueberry Muffins */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src="/blueberry-muffins.jpg"
            alt="Blueberry Muffins"
            className="w-full h-40 object-cover rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold">Blueberry Muffins</h2>
          <p className="text-lg">$2.99 each</p>
        </div>
      </div>
    </section>

     {/* Contact Section */}
     <section id='contact' className="py-16 bg-gray-100">
      <div className= "text-center py-20">
        <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
        <p className="text-lg mb-4">We would love to hear from you! Reach us through the following:</p>
        <p className="text-lg">Email: contact@bakecrafters.com</p>
        <p className="text-lg">Phone: (123) 456-7890</p>
        <p className="text-lg">Location: 123 Bakery Street, BakeTown</p>
      </div>
      </section>

      
  
export default HomePage;

