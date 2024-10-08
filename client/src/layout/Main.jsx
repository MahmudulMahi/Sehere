import React from 'react';
import Navber from '../components/Navber';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;