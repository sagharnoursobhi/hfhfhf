    import React from 'react';
    import FacebookIcon from '@material-ui/icons/Facebook';
    import InstagramIcon from '@material-ui/icons/Instagram';
    import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Logo from '../images/logo.png'
    import './navbar.css'
    import { NavLink, useLocation } from 'react-router-dom'
    import 'bootstrap/dist/css/bootstrap.min.css';
    import {Navbar, Nav} from 'react-bootstrap'
    import './navbar.scss'
    import Container from 'react-bootstrap/Container';
    import { useEffect, useState } from 'react';



const NavbarSecond = ()=> {
   
        
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navbar-custom-container">
                    <Container>
                        <Navbar.Brand as={NavLink} to='/' className="d-flex justify-content-center align-items-center">
                            <img src={Logo} alt="Logo" className="mx-100"/>
                            <h5 className="ml-1">SexyCars</h5>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-around">
                            <Nav className="me-auto align-items-center ml-3 mr-3 links-container">
                                <Nav.Link as={NavLink} className="link" to='/cars'>Cars</Nav.Link>
                                <Nav.Link as={NavLink} className="link" to='/car-details'>Information</Nav.Link>
                                <Nav.Link as={NavLink} className="link" to='/contact'>Contact</Nav.Link>
                            </Nav>
                            <Nav className="links-container align-items-center ">
                                <Nav.Link  className="link" href="#deets"><InstagramIcon /></Nav.Link>
                                <Nav.Link  className="link" href="#deets"><FacebookIcon /></Nav.Link>
                                <Nav.Link  className="link" href="#deets"><PlayCircleFilledWhiteIcon /></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }


export default NavbarSecond;