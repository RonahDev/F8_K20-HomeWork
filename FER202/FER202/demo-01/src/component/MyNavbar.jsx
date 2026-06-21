import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet } from 'react-router'
import React from 'react'

function MyNavBar() {
    //theme === 'light' ? 'dark' : 'light'
    // ->react goi la: conditional renderting
    return (
        <>
            <div style={{
                backgroundColor: 'red',
                height: '50px',
            }}>Navbar</div >
            <Outlet />
        </>
    );
}

export default MyNavBar;