import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useScroll from '../components/useScroll'

// Image
import logoLight from "../assets/images/logo-light.png"
import logoDark from "../assets/images/logo-dark.png"

const Navbar2 = () => {

    // scroll page state call
    const navClass = useScroll();

    // modal open+close state
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
                            <li className="nav-item active">
                                <Nav.Link href="#home">Home</Nav.Link>
                            </li>
                            <li className="nav-item">
                                <Nav.Link href="#about">about</Nav.Link>
                            </li>
                            <li className="nav-item">
                                <Nav.Link href="#services">services</Nav.Link>
                            </li>
                            <li className="nav-item">
                                <Nav.Link href="#work">work</Nav.Link>
                            </li>
                            <li className="nav-item">
                                <Nav.Link href="#pricing">pricing</Nav.Link>
                            </li>
                            <li className="nav-item">
                                <Nav.Link href="#team">team</Nav.Link>
                            </li>
                            <li className="nav-item">
                                <Nav.Link href="#client">client</Nav.Link>
                            </li>
                            <li className="nav-item">
                                <Nav.Link href="#blog">blog</Nav.Link>
                            </li>
                            <li className="nav-item">
                                <Nav.Link href="#contact">contact</Nav.Link>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </nav>
        </React.Fragment>
    )
}

export default Navbar2