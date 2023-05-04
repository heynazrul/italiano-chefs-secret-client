import React from 'react';
import Header from '../../components/shared/Header/Header';
import { Link } from 'react-router-dom';
import Footer from '../../components/shared/Footer/Footer';

const ErrorPage = () => {
  return (
    <>
      <Header></Header>
      <section className="mx-auto mb-16 mt-16 flex max-w-screen-xl justify-center px-4 md:px-8">
        <div className=" ">
          <div className=" text-center">
            <img
              className=""
              src="/404.png"
              alt="404"
            />
            <h1 className="mb-2 mt-2 text-4xl font-bold text-primary">Page not found</h1>
            <p className="mb-10">
              Uh-oh! Looks like the page you are trying to access, does not <br />
              exist. Please start afresh.
            </p>
            <Link
              to={'/'}
              className="block rounded-lg bg-primary px-4 py-3 text-center font-medium text-white shadow hover:bg-green-800 md:inline">
              Go Home
            </Link>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default ErrorPage;
