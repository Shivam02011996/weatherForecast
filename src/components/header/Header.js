import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import logo from '../images/logo.svg';

function Header(){
  return (
    <div>
  <Navbar bg="dark" variant="dark" className="header-logo" style={{opacity: 1}}>
    <img 
    style={{width:"200px"}}
    src={logo}
    alt="logo"
    />


    <Nav className="header" >
      <Nav.Link href="#home" className="nav-link" style={{color: "white"}}>MAPS</Nav.Link>
      <Nav.Link href="#features" className="nav-link" style={{color: "white"}}>VIDEO</Nav.Link>
      <Nav.Link href="#features" className="nav-link" style={{color: "white"}}>Severe Weather</Nav.Link>
      <Nav.Link href="#pricing" className="nav-link" style={{color: "white"}}>more</Nav.Link>
    </Nav>
    
  </Navbar>
  
</div>)
}

export default Header;