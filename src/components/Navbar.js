import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap'
import {NavDropdown , Nav , } from 'react-bootstrap'
import Logo from '../images/logo.png'
import '../index.css'

class AppNavbar extends React.Component {
    render(){
        
        return(
            
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="mb-auto ml-auto mr-auto mt-auto">
                <Nav.Link href="#pricing">
                    <ul className="list-group text-light">
                        <li className="list-group-item bg-dark">Call us!</li>
                        <li className="list-group-item bg-dark">+46 501 140 391</li>
                    </ul>
                </Nav.Link>
                <Nav.Link href="#features">
                    <img src={Logo} alt="Logo" className="mx-100"/>
                </Nav.Link>
                <Nav.Link href="#pricing">
                    <ul className="list-group text-light">
                        <li className="list-group-item bg-dark">Send us Email!</li>
                        <li className="list-group-item bg-dark">biuro@sexycars.pl</li>
                    </ul>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
        </Navbar>
        <div className="container">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4"></div>
                <div className="col-4"></div>
            </div>
            <Navbar collapseOnSelect  bg="white" variant="dark" className="h-41">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                <Nav className="mb-auto ml-auto mr-auto mt-auto">
                    <Nav.Link href="#pricing">
                        <div>
                            <div className="container">
                                <div className="row d-flex">
                                    <div className="col-9 text-dark mt-auto mb-auto"><h3>SexyCars</h3></div>
                                    <div className="col-3 text-dark d-flex justify-content-center align-items-center"><img src={Logo} alt="Logo" className="imgWidth mt-auto mb-auto"/></div>
                                </div>
                            </div>
                        </div>
                    </Nav.Link>
                    <Nav.Link href="#features">
                        <img src={Logo} alt="Logo" className="mx-100"/>
                    </Nav.Link>
                        <Nav.Link href="#pricing">
                            <ul className="list-group text-light">
                                <li className="list-group-item bg-dark">SexyCars</li>
                                <li className="list-group-item bg-dark">biuro@sexycars.pl</li>
                            </ul>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
        <div className="container">
            <div className="row"><img scr="../images/LandingPage.png" alt="LandingPage"/></div>
        </div>
            </>
        )
    }
}

export default AppNavbar