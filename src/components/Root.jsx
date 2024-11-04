import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import HomeNavBanner from './HomeNavBanner';

const Root = () => {

    const { pathname } = useLocation();
    // console.log(pathname);

    return (
        <div>
            <div className='m-4 min-h-screen'>
                {/* <HomeNavBanner></HomeNavBanner> */}
                {/* <Navbar></Navbar> */}

                {
                    pathname === '/' ?
                        <div className='max-w-7xl mx-auto'><HomeNavBanner></HomeNavBanner></div> :
                        <div className='max-w-7xl mx-auto'><Navbar></Navbar></div>
                }
                <div className='max-w-7xl mx-auto'>
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;