import React from 'react';
import { AiFillLike, AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ChefDetails = () => {
  //   const team = [
  //     {
  //       avatar:
  //         'https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',
  //       name: 'Martiana dialan',
  //       title: 'Product designer',
  //       desc: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry.',
  //       linkedin: 'javascript:void(0)',
  //       twitter: 'javascript:void(0)',
  //       github: 'javascript:void(0)',
  //     },
  //     {
  //       avatar:
  //         'https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80',
  //       name: 'Micheal colorand',
  //       title: 'Software engineer',
  //       desc: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry.',
  //       linkedin: 'javascript:void(0)',
  //       twitter: 'javascript:void(0)',
  //       github: 'javascript:void(0)',
  //     },
  //     {
  //       avatar:
  //         'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  //       name: 'Brown Luis',
  //       title: 'Full stack engineer',
  //       desc: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry.',
  //       linkedin: 'javascript:void(0)',
  //       twitter: 'javascript:void(0)',
  //       github: 'javascript:void(0)',
  //     },
  //     {
  //       avatar:
  //         'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  //       name: 'Lysa sandiago',
  //       title: 'Head of designers',
  //       desc: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry.',
  //       linkedin: 'javascript:void(0)',
  //       twitter: 'javascript:void(0)',
  //       github: 'javascript:void(0)',
  //     },
  //     {
  //       avatar:
  //         'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  //       name: 'Daniel martin',
  //       title: 'Product designer',
  //       desc: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry.',
  //       linkedin: 'javascript:void(0)',
  //       twitter: 'javascript:void(0)',
  //       github: 'javascript:void(0)',
  //     },
  //     {
  //       avatar:
  //         'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  //       name: 'Vicky tanson',
  //       title: 'Product manager',
  //       desc: 'Lorem Ipsum is simply dummy text of the printing and typesettin industry.',
  //       linkedin: 'javascript:void(0)',
  //       twitter: 'javascript:void(0)',
  //       github: 'javascript:void(0)',
  //     },
  //   ];

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
          src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80"
          className="h-full w-full rounded-full object-cover object-center"
          alt=""
        />
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-semibold text-gray-700">Chef Name</h4>
        <p className="text-secondary">5+ Years of experience</p>
        <p className="mt-2 text-gray-600">
          <AiFillLike className="inline-block text-xl" /> Recipes: 10
        </p>
        <div className="mt-6">
          <Link
            to={`/chef`}
            className="inline-flex items-center gap-x-1 font-medium text-indigo-600 duration-150 hover:text-indigo-400">
            View Recipes <AiOutlineArrowRight className="inline-block" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChefDetails;
