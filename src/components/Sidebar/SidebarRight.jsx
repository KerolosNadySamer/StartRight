import React from 'react';
import { Link } from 'react-router-dom';

const SidebarRight = () => {
  return (
    <div className='w-100 d-flex flex-column align-items-center p-3'>
        <h1 className="fs-4 text-white mt-5 mb-4">Right Menu</h1>
        <Link to='/' className='btn btn-outline-light w-75 mb-3'>Mission</Link>
        <Link to='/about' className='btn btn-outline-light w-75 mb-3'>Main</Link>
    </div>
  );
};

export default SidebarRight;