'use client'

import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';

const AppNavbar = () => {
  const menus = [
    { name: 'Dashboard', href: '/admin'},
    {
      name: 'Users',
      href: '/admin/users'
      }
  ];
  return (
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand >NGT Admin</Navbar.Brand>
          <Nav >
        {menus.map((menu) => {
            return (
              <Link key={menu.name}

                href={menu.href}
                      >{menu.name}
            </Link>
            );
        })}
        </Nav>
        </Container>
      </Navbar>
  )
}

export default AppNavbar