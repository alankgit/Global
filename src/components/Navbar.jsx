import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className='flex bg-blue-500 text-white text-center h-16'>
        <NavLink to='/' className='nav text-5xl ml-6 mr-32'>
          <h1>Protofolio</h1>
        </NavLink>
        <div className='flex text-2xl items-center space-x-4'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/find'>Find More</NavLink>
        </div>
      </div>
    </>
  );
};
