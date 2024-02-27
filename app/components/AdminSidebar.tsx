'use client';

import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';



const AdminSidebar = () => {
    const pathname = usePathname();
    return (

      <Navbar bg="light" expand="lg" className="flex-column">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        
        </Navbar.Collapse>
        </Navbar>
    )
}

export default AdminSidebar