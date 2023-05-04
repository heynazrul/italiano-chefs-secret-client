import React from 'react';
import Banner from '../../components/Banner/Banner';
import ChefDetails from '../../components/ChefDetails/ChefDetails';
import { useLoaderData } from 'react-router-dom';
import Partner from '../../components/Partner/Partner';
import Testimonial from '../../components/Testimonial/Testimonial';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import ParallaxBanner from '../../components/Banner/ParallaxBanner';

const Home = () => {
  const chefsInfo = useLoaderData();

  return (
    <>
      <Banner></Banner>
      <section
        id="meetChef"
        className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className=" font-logo text-4xl font-medium text-primary md:text-5xl">Meet Our Chefs</h2>
          <p className="mt-4 text-gray-600">
            Meet Our Talented and Experienced Chefs, Whose Expertise Guarantees, a Memorable Culinary Experience.
          </p>
        </div>
        <div className="my-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {chefsInfo.map((chef) => (
            <ChefDetails
              key={chef.id}
              chefDetails={chef}></ChefDetails>
          ))}
        </div>
      </section>
      <ParallaxBanner></ParallaxBanner>
      <Testimonial></Testimonial>
      <Partner></Partner>
      <NewsLetter></NewsLetter>
    </>
  );
};

export default Home;
