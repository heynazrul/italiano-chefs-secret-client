/* eslint-disable react/prop-types */
import React from 'react';
import { AiFillLike, AiOutlineArrowRight } from 'react-icons/ai';
import { GiHotMeal } from 'react-icons/gi';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import { Link } from 'react-router-dom';

const ChefDetails = ({ chefDetails }) => {
  const { id, chef_name, chef_picture, experience, likes, num_recipes } = chefDetails;

  return (
    <section className="flex flex-col items-center justify-center rounded-md border text-center shadow hover:bg-primary-light">
      <div className="h-fit w-full ">
        <LazyLoadImage
          className=" rounded-t-md object-cover object-center shadow-md "
          effect="blur"
          src={chef_picture}
          placeholderSrc={chef_picture}
          threshold={50}
        />
      </div>
      {/* <div className="mx-auto h-24 w-24">
        <img
          src={chef_picture}
          className="h-full w-full rounded-full object-cover object-center"
          alt=""
        />
      </div> */}
      <div className="mt-4 space-y-4 px-4 pb-6">
        <h4 className="text-lg font-semibold text-dark">{chef_name}</h4>

        <p className="text-[#FF5200]">{experience} experience</p>
        <div className="flex items-center justify-center gap-2">
          <GiHotMeal className="text-xl text-primary"></GiHotMeal>
          <p className="text-primary">Recipes: {num_recipes}</p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <AiFillLike className="text-xl text-primary"></AiFillLike>
          <p className="text-primary">Likes: {likes}</p>
        </div>
        <div className="mt-6">
          <Link
            to={`/chef/${id}`}
            className="inline-flex items-center gap-x-1 rounded-sm border border-primary px-3 py-2 text-center font-medium  text-primary duration-150 hover:bg-primary  hover:text-white">
            View Recipes <AiOutlineArrowRight className="inline-block" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChefDetails;
