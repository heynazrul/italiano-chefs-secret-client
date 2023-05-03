import React from 'react';
import { AiFillLike } from 'react-icons/ai';

const Banner = () => {
  return (
    <section className="mb-12 mt-3 items-center bg-gray-600 bg-[url('https://images.pexels.com/photos/5779786/pexels-photo-5779786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat px-20 py-16 bg-blend-multiply lg:flex ">
      <div className="mx-auto max-w-7xl flex-1 space-y-4 ">
        <div className="mx-auto md:w-1/2 md:text-center">
          <h1
            className="text-4xl font-bold  text-white xl:text-5xl"
            style={{ lineHeight: '3.5rem' }}>
            Transform Ordinary Ingredients into
            <span className=" text-primary"> Extraordinary Meals</span>
          </h1>
          <p className="leading-relaxed text-gray-300">
            Discover classic and modern Italian recipes that will elevate your home cooking game. Join us and explore
            the delicious world of Italian cuisine today!
          </p>
          <div className="items-center space-y-3 pt-10 sm:flex sm:space-x-6 sm:space-y-0 md:justify-center">
            <a
              href="#"
              className="block w-full rounded-md bg-white px-7 py-3 text-center text-gray-800 shadow-md outline outline-1 outline-secondary sm:w-auto">
              Get started
            </a>
            <a
              href="#"
              className="block w-full rounded-md bg-primary px-7 py-3 text-center text-white hover:bg-primary-light sm:w-auto">
              Try it out
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
