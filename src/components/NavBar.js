import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../../src/assets/logo/logo.png';
import '../css/navbar.css';

import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar  expand="md" className={scrolled ? "scrolled" :"" }>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" style={{marginRight:"10px"}}/>
            <span style={{color:"white"}}> BSEAM</span>
          </Navbar.Brand>
          
          <Navbar.Toggle  aria-controls="basic-navbar-nav ">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><p className="navbar-link">Home</p></Nav.Link>
              <Nav.Link href="#authoring" className={activeLink === 'Authoring' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}><p className="navbar-link">Authoring</p></Nav.Link>
              <Nav.Link href="#features" className={activeLink === 'Features' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}><p className="navbar-link">Features</p></Nav.Link>
              <Nav.Link href="#designs" className={activeLink === 'Designs' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}><p className="navbar-link">Designs</p></Nav.Link>
              <Nav.Link href="#contact" className={activeLink === 'Contact Us' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}><p className="navbar-link">Contact Us</p></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}