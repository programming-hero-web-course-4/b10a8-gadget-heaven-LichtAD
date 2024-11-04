import React from 'react';
import { NavLink } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {

    // const links = <>
    //     <div className='flex gap-4'>
    //         <li><a>Item 1</a></li>
    //         <li><a>Item 2</a></li>
    //         <li><a>Item 3</a></li>
    //     </div>
    // </>

    const links = <>
        <div className='flex gap-4'>
            <li><NavLink className={({ isActive }) => (isActive ? 'underline p-2 text-white rounded-lg' : undefined)} to='/'>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'underline decoration-purple-400 p-2 bg-purple-400 text-transparent bg-clip-text rounded-lg' : undefined)} to={'/statistics'}>Statistics</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'underline decoration-purple-400 p-2 bg-purple-400 text-transparent bg-clip-text rounded-lg' : undefined)} to={'/dashboard'}>Dashboard</NavLink></li>
        </div>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 px-12">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <NavLink to={'/'} className="btn btn-ghost text-xl">Gadget Heaven</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <div className='bg-white border-2 p-2 rounded-full'><CiShoppingCart /></div>
                    <div className='bg-white border-2 p-2 rounded-full'><CiHeart /></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;