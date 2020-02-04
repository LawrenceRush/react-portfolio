import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const navButtonStyle = {
fontSize: "3vh"
}

const navTitleStyle = {
  fontSize: "4vh",
  color: "white",
}

const navbarStyle = {
  height: "3vh !important"
}
function Navigation() {
    return (
        
  <Navbar style = {navbarStyle} className= "nav-bg" expand="lg">
  <Navbar.Brand style = {navTitleStyle} href="#home"><span>Portfolio</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav style = {navButtonStyle} className="mr-auto, nav-ulb">
      <Nav.Link className = "nav-lib" href="#welcome">About</Nav.Link>
      <Nav.Link className = "nav-lib" href="#projects">Projects</Nav.Link>
      <Nav.Link className = "nav-lib" href="#contact">Contact</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>


    )
}

export default Navigation
