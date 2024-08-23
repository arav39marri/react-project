import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="h-16  bg-blue-700  sticky top-0 flex justify-between items-center text-slate-300 p-4">
      <div className="font-mono text-xl text-center md:text-left">
        MY Website
      </div>
      <ul className="flex space-x-10">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/body">Body</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
