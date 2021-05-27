import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap'
import {NavDropdown , Nav , } from 'react-bootstrap'
import Logo from '../images/logo.png'

const NavbarApp = ()=> {
        return ( 
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mw-100">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="mb-auto ml-auto mr-auto mt-auto">
                        <Nav.Link href="#pricing">
                            <ul className="list-group text-light">
                                <li className="list-group-item bg-dark border-0">Call us!</li>
                                <li className="list-group-item bg-dark border-0">+46 501 140 391</li>
                            </ul>
                            </Nav.Link>
                        <Nav.Link href="#features">
                            <img src={Logo} alt="Logo" className="mx-100"/>
                        </Nav.Link>
                        <Nav.Link href="#pricing">
                            <ul className="list-group text-light">
                                <li className="list-group-item bg-dark border-0">Send us Email!</li>
                                <li className="list-group-item bg-dark border-0">biuro@sexycars.pl</li>
                                </ul>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
         );
    }
 
export default NavbarApp;