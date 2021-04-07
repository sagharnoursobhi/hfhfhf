import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'react-bootstrap'
import {NavDropdown , Nav , } from 'react-bootstrap'
import Logo from '../images/logo.png'
import '../App.css'
import LandingPage from '../images/LandingPage.png'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import FirstCar from '../images/car1.png'
class AppNavbar extends React.Component {
    render(){
        
        return(
            
                <>
        
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mw-100">
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
                                    <ul className="list-group text-light border-0">
                                        <li className="list-group-item bg-dark">Send us Email!</li>
                                        <li className="list-group-item bg-dark">biuro@sexycars.pl</li>
                                    </ul>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div className="container-fluid">
                        <div className="row nav2">
                            <div className="col-4 d-flex justify-content-center align-items-center">
                                <div className="col-2 "><span><h5>SexyCars</h5></span></div>
                                <div className="col-2"><img src={Logo} alt="logo" className="mw-100 mh-100 width"/></div>
                            </div>
                            <div className="col-4 d-flex justify-content-around align-items-center">
                                <span>Cars</span>
                                <span>Information</span>
                                <span>Contact</span>
                            </div>
                            <div className="col-4 d-flex justify-content-around align-items-center ">
                                <span className="ml-auto"><InstagramIcon/></span>
                                <span><FacebookIcon/></span>
                                <span className="mr-auto"><PlayCircleFilledWhiteIcon/></span>
                            </div>                        
                        </div> 
                    </div>
        <div className="container-fluid" id="main">
            <div className="row">
                <div className="col-lg-12 col-xs-12 col-sm-6 col-md-8 position-relative text-center text-white w-100">
                    <img src={LandingPage} alt="LandingPage" className="img-fluid w-100"/>
                    <div className="position-absolute transform blur mw-100 mh-100 w-100">
                    <ul className="list-unstyled">
                        <h3 className="text-danger">Dream car rental</h3>
                        <h1>We will make yours come true!</h1>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12 extraBorder">
                    <img src={FirstCar} alt="firstCar"/>
                </div>
                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12"></div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-xl-6 col-md-6 col-sm-12"></div>
            </div>
        </div>
            
    </>
        )
    }
}

export default AppNavbar