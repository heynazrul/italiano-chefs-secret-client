import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { GoBriefcase } from 'react-icons/go';
import { GiHotMeal } from 'react-icons/gi';

const ChefBanner = ({ chefData }) => {
  const { chef_picture, chef_name, bio, likes, experience, num_recipes } = chefData;
  return (
    <div>
      <section className="py-14">
        <div className="mx-auto max-w-screen-xl md:px-8">
          <div className="flex flex-col gap-12 px-4 md:px-0 lg:flex-row lg:items-center">
            <div className="flex-1  lg:block">
              <img
                src={chef_picture}
                className="h-80 w-full object-cover object-center sm:rounded-lg"
                alt=""
              />
            </div>
            <div className="mt-6 max-w-xl space-y-3 px-4 sm:px-0 md:mt-0 lg:max-w-2xl">
              <h2 className="text-3xl font-semibold text-gray-800 sm:text-4xl">{chef_name}</h2>
              <p className="mt-3 text-gray-600">{bio}</p>
              <div className="flex items-center gap-2">
                <GoBriefcase className="text-xl text-gray-700"></GoBriefcase>
                <p className="text-gray-700">Experience: {experience}</p>
              </div>
              <div className="flex items-center gap-2">
                <GiHotMeal className="text-xl text-gray-700"></GiHotMeal>
                <p className="text-gray-700">Recipes: {num_recipes}</p>
              </div>
              <div className="flex items-center gap-2">
                <AiFillLike className="text-xl text-gray-700"></AiFillLike>
                <p className="text-gray-700">Likes: {likes}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChefBanner;
