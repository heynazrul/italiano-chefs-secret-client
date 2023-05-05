/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-screen-xl items-center justify-between gap-x-12 overflow-hidden text-gray-600 md:flex md:px-8">
        <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
          <h1 className="text-sm font-medium text-secondary">Over 200 recipes</h1>
          <h2 className="text-4xl font-extrabold text-gray-800 md:text-5xl">
            Get inspired in the kitchen with our recipe collection
          </h2>
          <p>We have worlds best chefs in italy to satisfy your cravings. Easy to recipe to follow.</p>
          <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <Link
              to={'/'}
              className="block rounded-lg bg-primary px-4 py-2 text-center font-medium text-white shadow-lg duration-150 hover:bg-secondary hover:shadow-none ">
              Check our recipe
            </Link>
          </div>
        </div>
        <div className="mt-14 flex-none md:mt-0 md:max-w-xl">
          <img
            src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className=" md:rounded-tl-[108px]"
            alt=""
          />
        </div>
      </div>
      <section className=" my-12 bg-primary-light py-10 text-primary">
        <div className="container mx-auto my-6 space-y-1 p-4 text-center">
          <h2 className="pb-3 text-3xl font-bold md:text-4xl">About us</h2>
          <p>
            Welcome to Italiano Chef Secret, your go-to source for authentic Italian recipes and cooking secrets! <br />{' '}
            <br /> Our website is the passion project of a group of Italian chefs who are dedicated to sharing their
            love of Italian cuisine with the world. With decades of experience in some of Italy's finest restaurants,
            our chefs have mastered the art of Italian cooking and are excited to pass their knowledge on to you. <br />{' '}
            <br />
            At Italiano Chef Secret, we believe that cooking is more than just following a recipe. It's an art form that
            requires precision, creativity, and passion. That's why we not only share our favorite recipes with you, but
            also our secrets for achieving the perfect texture, flavor, and presentation. Whether you're a seasoned cook
            or a beginner in the kitchen, Italiano Chef Secret has something for you. From classic Italian dishes like
            spaghetti carbonara and margherita pizza to lesser-known regional specialties, we have a wide range of
            recipes to explore. And if you're looking to take your cooking to the next level, be sure to check out our
            tips and tricks for mastering the art of Italian cuisine. Thank you for visiting Italiano Chef Secret.{' '}
            <br /> <br /> We hope our website inspires you to discover the joy of Italian cooking and to create
            delicious meals that will bring friends and family together around the table. Buon appetito!
          </p>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
