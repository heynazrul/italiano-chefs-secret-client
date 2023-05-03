import React from 'react';
import Header from '../components/shared/Header/Header';
import Footer from '../components/shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const Main = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster position='top-right' />
    </>
  );
};

export default Main;
