const Shop = () => {
  return (
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
  );
};

export default Shop;
