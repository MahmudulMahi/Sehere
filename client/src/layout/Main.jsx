import React from 'react';
import Navber from '../components/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <div className='min-h-[calc(100vh-306px)]'>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;