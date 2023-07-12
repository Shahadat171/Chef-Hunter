import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';


const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;