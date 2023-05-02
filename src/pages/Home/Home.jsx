import React from 'react';
import Banner from '../../components/Banner/Banner';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <h2 className="text-center text-4xl font-medium text-gray-900 xl:text-5xl">Meet Our Chefs</h2>
      <p className="mt-4 text-center text-gray-600">
        Meet Our Talented and Experienced Chefs, Whose Expertise Guarantees <br /> a Memorable Culinary Experience.
      </p>
    </div>
  );
};

export default Home;
