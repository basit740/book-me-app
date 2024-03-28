import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Custom Hook
import useScroll from '../components/useScroll'
import useActiveLink from '../components/useActiveLink'

// Image
import logoLight from "../assets/images/logo-light.png"
import logoDark from "../assets/images/logo-dark.png"

const Navbar3 = () => {

    // scroll page state call
    const navClass = useScroll();

      // activation
      const { activeLink, handleLinkClick } = useActiveLink('.navbar-nav li.active');

    // modal
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <React.Fragment>
            <nav className={"navbar navbar-expand-lg fixed-top navbar-custom tarnsperant-sticky " + navClass} id="navbar">
                <Container>
                    <Link className="navbar-brand logo" to="#">
                        <img src={logoLight} className="logo-light" alt="" height="16" />
                        <img src={logoDark} className="logo-dark" alt="" height="16" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" onClick={toggle}>
                        <i className="mdi mdi-menu"></i>
                    </button>
                    <Navbar.Collapse id="navbarSupportedContent" in={isOpen}>
                        <ul className="navbar-nav ms-auto navbar-center">
                            <li className={`nav-item ${activeLink === '/home' ? 'active' : ''}}`}>
                                <Nav.Link href="#home" onClick={() => handleLinkClick('/home')}>Home</Nav.Link>
                            </li>
                            <li className={`nav-item ${activeLink === "/about" ? "active" : ''}`}>
                                <Nav.Link href="#about" onClick={() => handleLinkClick('/about')}>about</Nav.Link>
                            </li>
                            <li className={`nav-item ${activeLink === "/features" ? "active" : ''}`}>
                                <Nav.Link href="#features" onClick={() => handleLinkClick('/features')}>features</Nav.Link>
                            </li>
                            <li className={`nav-item ${activeLink === "/client" ? "active" : ''}`}>
                                <Nav.Link href="#client" onClick={() => handleLinkClick('/client')}>client</Nav.Link>
                            </li>
                            <li className={`nav-item ${activeLink === "/pricing" ? "active" : ''}`}>
                                <Nav.Link href="#pricing" onClick={() => handleLinkClick('/pricing')}>pricing</Nav.Link>
                            </li>
                            <li className={`nav-item ${activeLink === "/team" ? "active" : ''}`}>
                                <Nav.Link href="#team" onClick={() => handleLinkClick('/team')}>team</Nav.Link>
                            </li>
                            <li className={`nav-item ${activeLink === "/blog" ? "active" : ''}`}>
                                <Nav.Link href="#blog" onClick={() => handleLinkClick('/blog')}>blog</Nav.Link>
                            </li>
                            <li className={`nav-item ${activeLink === "/contact" ? "active" : ''}`}>
                                <Nav.Link href="#contact" onClick={() => handleLinkClick('/contact')}>contact</Nav.Link>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </nav>
        </React.Fragment>
    )
}

export default Navbar3