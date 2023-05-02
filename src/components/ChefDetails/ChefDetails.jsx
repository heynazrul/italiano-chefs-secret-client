/* eslint-disable react/prop-types */
import React from 'react';
import { AiFillLike, AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ChefDetails = ({ chefDetails }) => {
  const {id, chef_name, chef_picture, experience, likes, num_recipes } = chefDetails;

  return (
    <section className="my-12 flex flex-col items-center justify-center rounded-md border px-4 py-8 text-center shadow-sm">
      {/* <div className="h-60 w-full sm:h-52 md:h-56">
        <img
          src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
          className="h-full w-full rounded-xl object-cover object-center shadow-md"
          alt=""
        />
      </div> */}
      <div className="mx-auto h-24 w-24">
        <img
          src={chef_picture}
          className="h-full w-full rounded-full object-cover object-center"
          alt=""
        />
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-semibold text-gray-700">{chef_name}</h4>
        <p className="text-secondary">{experience}</p>
        <p className="mt-2 text-gray-600">
          <AiFillLike className="inline-block text-xl" /> Recipes: {num_recipes}
        </p>
        <div className="mt-6">
          <Link
            to={`/chef/${id}`}
            className="inline-flex items-center gap-x-1 font-medium text-indigo-600 duration-150 hover:text-indigo-400">
            View Recipes <AiOutlineArrowRight className="inline-block" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChefDetails;
