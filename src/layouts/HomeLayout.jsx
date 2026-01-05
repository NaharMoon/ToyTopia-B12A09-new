import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify';
import FringeDesign from '../components/FringeDesign';

const HomeLayout = () => {
    return (
        <div>
            <Navbar>
                <FringeDesign></FringeDesign>
            </Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default HomeLayout;