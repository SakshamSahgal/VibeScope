import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LogoutBtn from './logout';

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" text="light" className="justify-content-between px-3" >
      <Navbar.Brand href="/home" style={{ color: 'white' }}>Monitoring</Navbar.Brand>
      <Navbar.Brand href="/resources" style={{ color: 'white' }}>Resources</Navbar.Brand>
      
      <Nav className="ml-auto">
        <LogoutBtn />
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
