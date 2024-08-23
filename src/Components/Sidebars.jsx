import React from 'react';
import { Link } from 'react-router-dom';

const Sidebars = () => {
  return (
    <div className=' '>
      <div className='w-[15%] h-full fixed text-white bg-blue-600 rounded-sd   overflow-y-auto   p-0  hidden lg:flex'>
        <div className='mx-auto items-center justify-center'>
          <ul className=' container flex flex-col p-4 text-2xl  text-slate-50' >
          
          <Link to='/hello'> hello</Link>
          <Link to='/components'> compon</Link>
          <Link to='/ingredients'> ingredients</Link>
          <Link to='/requirements'> requirements</Link>
          
           
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebars;
