import React from 'react';

const NewsLetter = () => {
    return (
      <section className="mx-auto my-12 md:my-16 max-w-xl px-4 md:px-8">
        <div className="space-y-3 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto h-14 w-14 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
            />
          </svg>
          <h3 className="text-4xl md:text-5xl font-logo font-medium text-primary">Subscribe to our newsletter</h3>
          <p className="leading-relaxed text-gray-500">
            Stay up to date with the new recipe update, announcements and exclusive discounts feel free to sign up with
            your email.
          </p>
        </div>
        <div className="mt-6">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="items-center justify-center sm:flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md border p-3 text-gray-500 outline-none focus:border-primary"
            />
            <button className="mt-3 w-full rounded-md bg-primary px-5 py-3 text-white font-bold shadow-md outline-none  ring-offset-2 duration-150 hover:bg-green-900 focus:shadow-none focus:ring-2  sm:ml-3 sm:mt-0 sm:w-auto">
              Subscribe
            </button>
          </form>
          <p className="mx-auto mt-3 max-w-lg text-center text-[15px] text-gray-400">
            No spam ever, we are care about the protection of your data. Read our{' '}
            <a
              className="text-secondary underline"
              href="#">
              {' '}
              Privacy Policy{' '}
            </a>
          </p>
        </div>
      </section>
    );
};

export default NewsLetter;