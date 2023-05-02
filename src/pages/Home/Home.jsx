import React from 'react';
import Banner from '../../components/Banner/Banner';
import ChefDetails from '../../components/ChefDetails/ChefDetails';

const Home = () => {
  return (
    <div className=" ">
      <Banner></Banner>
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className=" text-4xl font-medium text-gray-900 xl:text-5xl">Meet Our Chefs</h2>
          <p className="mt-4 text-gray-600">
            Meet Our Talented and Experienced Chefs, Whose Expertise Guarantees, a Memorable Culinary Experience.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <ChefDetails></ChefDetails>
          <ChefDetails></ChefDetails>
          <ChefDetails></ChefDetails>
        </div>
      </div>
    </div>
  );
};

export default Home;
