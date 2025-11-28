import React from "react";

const About: React.FC = () => {
  return (
    <div id="About" className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text mb-6">About Us</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Welcome to our food delivery web app! We are dedicated to bringing you
          the most delicious meals, freshly prepared and delivered straight to
          your door. Our mission is simple: fast delivery, quality food, and the
          best customer experience.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-14">
        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-3xl font-bold text-amber-400">1500+</h2>
          <p className="text-gray-500 mt-1">Daily Orders</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-3xl font-bold text-amber-400">50+</h2>
          <p className="text-gray-500 mt-1">Partner Restaurants</p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 text-center">
          <h2 className="text-3xl font-bold text-amber-400">98%</h2>
          <p className="text-gray-500 mt-1">Customer Satisfaction</p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Story</h2>
        <p className="text-gray-600 text-lg">
          We started as a small kitchen with a big dream—to deliver happiness
          through food. Today, we collaborate with top-rated chefs and
          restaurants to bring you diverse cuisines that satisfy every taste
          bud. We promise freshness, quality, and flavor in every bite.
        </p>
      </div>
    </div>
  );
};

export default About;
