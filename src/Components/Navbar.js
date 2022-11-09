import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    // const {user}=useContext(AuthContext);
    const blogAndHome=<>
    <li><Link to='/' >Home</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    <li><Link to='/login' className='ml-0 lg:ml-40 mt-5 lg:mt-0'>Login</Link></li>
    <li><Link to='/register'>Register</Link></li>
    {/* <li><Link >{user?.name}</Link></li> */}
    <li><Link >LogOut</Link></li>
    
    </>
    return (
        <div className="navbar bg-green-500 sticky z-50 top-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
             {blogAndHome}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">Wild- <span className='text-white'>Photography</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-bold">
            {blogAndHome}
          </ul>
        </div>
       
      </div>
    );
};

export default Navbar;