import React from 'react';
import { AiFillLike } from 'react-icons/ai';

const Banner = () => {
  return (
    <section className="mb-12 md:mb-16 items-center bg-gray-600 bg-[url('https://images.pexels.com/photos/5779786/pexels-photo-5779786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat px-6 py-16 bg-blend-multiply md:px-20 md:py-24 lg:flex ">
      <div className="mx-auto max-w-7xl flex-1 space-y-4 ">
        <div className="mx-auto text-center md:w-1/2">
          <h1
            className="text-2xl font-bold text-white md:text-4xl xl:text-5xl"
            style={{ lineHeight: '1.3' }}>
            Transform Ordinary Ingredients into
            <span className=" text-secondary "> Extraordinary Meals</span>
          </h1>
          <p className="leading-relaxed text-gray-300">
            Discover classic and modern Italian recipes that will elevate your home cooking game. Join us and explore
            the delicious world of Italian cuisine today!
          </p>
          <div className="items-center space-y-3 pt-10 sm:flex sm:space-x-6 sm:space-y-0 md:justify-center">
            <a
              href="#"
              className="block w-full rounded-md bg-light px-7 py-3 text-center text-primary shadow-md  sm:w-auto">
              Get started
            </a>
            <a
              href="#meetChef"
              className="block w-full rounded-md bg-green-700 px-7 py-3 text-center text-white hover:bg-secondary sm:w-auto">
              Try it out
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
