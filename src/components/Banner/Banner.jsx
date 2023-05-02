import React from 'react';

const Banner = () => {
  return (
    <section className="mx-auto mt-24 max-w-screen-xl items-center px-4 pb-12 md:px-8 lg:flex">
      <div className="flex-1 space-y-4 sm:text-center lg:text-left">
        <h1 className="text-4xl font-bold text-secondary-light xl:text-5xl">
          Transform Ordinary Ingredients into
          <span className="text-primary"> Extraordinary Meals</span>
        </h1>
        <p className="max-w-xl leading-relaxed text-gray-700 sm:mx-auto lg:ml-0">
          Discover classic and modern Italian recipes that will elevate your home cooking game. Join us and explore the
          delicious world of Italian cuisine today!
        </p>
        <div className="items-center justify-center space-y-3 pt-10 sm:flex sm:space-x-6 sm:space-y-0 lg:justify-start">
          <a
            href="javascript:void(0)"
            className="block w-full rounded-md bg-white px-7 py-3 text-center text-gray-800 shadow-md outline outline-1 outline-secondary sm:w-auto">
            Get started
          </a>
          <a
            href="javascript:void(0)"
            className="block w-full rounded-md bg-secondary px-7 py-3 text-center text-gray-200 hover:bg-secondary-light sm:w-auto">
            Try it out
          </a>
        </div>
      </div>
      <div className="mt-7 flex-1 text-center lg:ml-3 lg:mt-0">
        <img
          src="https://www.wcrf-uk.org/wp-content/uploads/2021/06/588595864r-LS.jpg"
          className="mx-auto w-full sm:w-10/12  lg:w-full"
        />
      </div>
    </section>
  );
};

export default Banner;
