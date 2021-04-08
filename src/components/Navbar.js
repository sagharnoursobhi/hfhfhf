import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
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
import SecondCar from '../images/car2.png'
import ThirdCar from '../images/car3.png'
import FourthCar from '../images/car4.png'
import FifthCar from '../images/car5.png'
import SixthCar from '../images/car6.png'
import SeventhCar from '../images/car7.png'
import EighthCar from '../images/car8.png'
import NinthCar from '../images/car9.png'
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import Map from '../images/map.png';
import CheckIcon from '@material-ui/icons/Check';

const App = () => (
    <i>
      <FontAwesomeIcon icon={faHome} />
    </i>
  );
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
            <section id="section2">
                <div className="row justify-content-center align-items-center d-flex">
                    <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 extraBorder d-flex ml-auto mr-auto ">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 style ">
                                    <div className="col-7"><h4 className="text-center">Porsche 911 Carrera 4s</h4></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 margin">
                                    <img src={FirstCar} alt="firstCar"/>
                                </div>
                                <div className="col-6 margin">
                                    <ul class="list-group">
                                        <li class="list-group-item border-0 list"><span><LocalTaxiIcon/></span><span className="margin1">Coupe</span></li>
                                        <li class="list-group-item border-0 list"><span><ViewCarouselIcon/></span><span className="margin1">3.0l Twin Turbo</span></li>
                                        <li class="list-group-item border-0 list"><span><InvertColorsIcon/></span><span className="margin1">Red</span></li>
                                        <li class="list-group-item border-0 list"><span><App/></span><span className="margin1">450 Hourses</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 extraBorder d-flex ml-auto mr-auto">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 style ">
                                    <div className="col-7"><h4 className="text-center">Porsche 718 Cayman</h4></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 margin">
                                    <img src={SecondCar} alt="firstCar"/>
                                </div>
                                <div className="col-6 margin">
                                    <ul class="list-group">
                                        <li class="list-group-item border-0 list"><span><LocalTaxiIcon/></span><span className="margin1">Coupe</span></li>
                                        <li class="list-group-item border-0 list"><span><ViewCarouselIcon/></span><span className="margin1">3.0l Twin Turbo</span></li>
                                        <li class="list-group-item border-0 list"><span><InvertColorsIcon/></span><span className="margin1">Yellow</span></li>
                                        <li class="list-group-item border-0 list"><span><App/></span><span className="margin1">300 Hourses</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 extraBorder d-flex ml-auto mr-auto ">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 style ">
                                    <div className="col-7"><h4 className="text-center">Mercedes A45 AMG</h4></div>
                                </div>
                            </div>
                            <div className="row justify-content-center align-items-center d-flex">
                                <div className="col-6 margin">
                                    <img src={ThirdCar} alt="firstCar"/>
                                </div>
                                <div className="col-6 margin">
                                    <ul class="list-group">
                                        <li class="list-group-item border-0 list"><span><LocalTaxiIcon/></span><span className="margin1">Coupe</span></li>
                                        <li class="list-group-item border-0 list"><span><ViewCarouselIcon/></span><span className="margin1">3.0l Twin Turbo</span></li>
                                        <li class="list-group-item border-0 list"><span><InvertColorsIcon/></span><span className="margin1">Gold</span></li>
                                        <li class="list-group-item border-0 list"><span><App/></span><span className="margin1">421 Hourses</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 extraBorder d-flex ml-auto mr-auto">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 style ">
                                    <div className="col-7"><h4 className="text-center">BMW M5 Competition</h4></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 margin">
                                    <img src={FourthCar} alt="firstCar"/>
                                </div>
                                <div className="col-6 margin">
                                    <ul class="list-group">
                                        <li class="list-group-item border-0 list"><span><LocalTaxiIcon/></span><span className="margin1">Coupe</span></li>
                                        <li class="list-group-item border-0 list"><span><ViewCarouselIcon/></span><span className="margin1">3.0l Twin Turbo</span></li>
                                        <li class="list-group-item border-0 list"><span><InvertColorsIcon/></span><span className="margin1">Blue</span></li>
                                        <li class="list-group-item border-0 list"><span><App/></span><span className="margin1">625 Hourses</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center d-flex">
                    <div className="col-lg-4 col-xl-4 col-md-4 col-sm-6 extraBorder d-flex ml-auto mr-auto ">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 style ">
                                    <div className="col-7"><h4 className="text-center">BMW M4</h4></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 margin">
                                    <img src={FifthCar} alt="firstCar"/>
                                </div>
                                <div className="col-6 margin">
                                    <ul class="list-group">
                                        <li class="list-group-item border-0 list"><span><LocalTaxiIcon/></span><span className="margin1">Coupe</span></li>
                                        <li class="list-group-item border-0 list"><span><ViewCarouselIcon/></span><span className="margin1">3.0l Twin Turbo</span></li>
                                        <li class="list-group-item border-0 list"><span><InvertColorsIcon/></span><span className="margin1">Gold</span></li>
                                        <li class="list-group-item border-0 list"><span><App/></span><span className="margin1">450 Hourses</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xl-4 col-md-6 col-sm-6 extraBorder d-flex ml-auto mr-auto">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 style ">
                                    <div className="col-7"><h4 className="text-center">Nissan GT-R</h4></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 margin">
                                    <img src={SixthCar} alt="firstCar"/>
                                </div>
                                <div className="col-6 margin">
                                    <ul class="list-group">
                                        <li class="list-group-item border-0 list"><span><LocalTaxiIcon/></span><span className="margin1">Coupe</span></li>
                                        <li class="list-group-item border-0 list"><span><ViewCarouselIcon/></span><span className="margin1">3.0l Twin Turbo</span></li>
                                        <li class="list-group-item border-0 list"><span><InvertColorsIcon/></span><span className="margin1">Copper</span></li>
                                        <li class="list-group-item border-0 list"><span><App/></span><span className="margin1">570 Hourses</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section3">
                <div className="row">
                    <div className="col-4 ml-auto mr-auto margin2 border-warning d-flex justify-content-center align-items-center">
                        <h3 className="text-center">See more!</h3>
                    </div>                
                </div>
            </section>
            <section id="section4">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-8 ">
                        <h2 className="margin3">Meet our fleet!</h2>
                    </div>
                </div>
                <div className="row justify-content-center d-flex align-items-center">
                    <div className="col-8 h-200  ">
                        <p className="text-left">SexyCars sports and luxury car rental focuses on one goal, which is your complete satisfaction with renting a sports car with us. We will guarantee you maximum joy and comfort of using sports cars in our rental. We also try to make this pleasure not too expensive.</p>
                    </div>
                </div>
                <div className="row justify-content-center d-flex align-items-center">
                    <div className="col-8 h-200">
                        <p className="text-left ml-auto">We rent our sports cars all over Poland, and most often in the following cities: Kraków, Katowice, Wrocław, Warsaw without a deposit and at a good price. We rent our sports and luxury cars daily or for a longer period, i.e. long-term. When choosing a rental in the cities of Kraków, Warsaw, Katowice, Wrocław, Rzeszów, Częstochowa, Kielce, Częstochowa, Bydgoszcz, Białystok, you can expect professional service from us.</p>
                    </div>
                </div>
                <div className="row justify-content-center d-flex align-items-center margin4">
                    <div className="col-8 h-200">
                        <img src={Map} alt="map" />
                    </div>
                </div>
                <div className="row justify-content-center d-flex align-items-center margin4">
                    <div className="col-8 h-200">
                        <p>Sports cars are a category of cars with a greater emphasis on driving dynamics than practicality. At the same time, they are civilian cars that must comply with all technical rules for traffic on public roads.</p>
                    </div>
                    <div className="col-8 h-200">
                        <h3>They can be:</h3>
                    </div>
                    <div className="col-8 h-200 margin4">
                        <h4>Cars modified from classic bodies to sports bodies (e.g. as a result of tuning)</h4>
                    </div>
                    <div className="col-8 h-200 margin4">
                        <img src={SeventhCar} alt="car7"/>
                    </div>
                    <div className="col-8 h-200 d-flex justify-content-end" id="label7">
                        <div className="col-5"><p className="text-muted text-right">2019 Toyota Corolla Hatchback (tuningowana)</p></div>
                    </div>
                    <div className="col-8 h-200 margin4">
                        <h4>Typically sports cars produced for fun driving</h4>
                    </div>
                    <div className="col-8 h-200 margin4">
                        <img src={EighthCar} alt="car8"/>
                    </div>
                    <div className="col-8 h-200 d-flex justify-content-end" id="label7">
                        <div className="col-5"><p className="text-muted text-right">2018 Lamborghini Huracan LP580</p></div>
                    </div>
                    <div className="col-8 h-200 margin4">
                        <h4>Extreme cars, designed for competitive and racing driving</h4>
                    </div>
                    <div className="col-8 h-200 margin4">
                        <img src={NinthCar} alt="car9"/>
                    </div>
                    <div className="col-8 h-200 d-flex justify-content-end" id="label7">
                        <div className="col-5"><p className="text-muted text-right">2016 Aston Martin Vulcan</p></div>
                    </div>
                    <div className="col-8 h-200 margin4">
                        <p>So before you choose sports cars to rent or buy, find out which one is worth choosing. We, on the other hand, will provide appropriate preparation and professional service:</p>
                    </div>
                </div>
                <div className="row justify-content-center d-flex align-items-center">
                    <div className="col-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 ml-auto">
                                    <div className="row">
                                        <div className="col-2"><CheckIcon className="icon-color"/></div>
                                        <div className="col-10"><h5 className="font-weight-bold">Atrakcyjne ceny wynajmu</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="col-6">
                        <div className="container">
                            <div className="row">
                                <div className="col-6 mr-auto">
                                    <div className="row">
                                        <div className="col-2"><CheckIcon/></div>
                                        <div className="col-10"><h5 className="font-weight-bold">Atrakcyjne ceny wynajmu</h5></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="col-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 ml-auto">
                                <div className="row">
                                    <div className="col-2"><CheckIcon/></div>
                                    <div className="col-10"><h5 className="font-weight-bold">Atrakcyjne ceny wynajmu</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 mr-auto">
                                <div className="row">
                                    <div className="col-2"><CheckIcon/></div>
                                    <div className="col-10"><h5 className="font-weight-bold">Atrakcyjne ceny wynajmu</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 ml-auto">
                                <div className="row">
                                    <div className="col-2"><CheckIcon/></div>
                                    <div className="col-10"><h5 className="font-weight-bold">Atrakcyjne ceny wynajmu</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 mr-auto">
                                <div className="row">
                                    <div className="col-2"><CheckIcon/></div>
                                    <div className="col-10"><h5 className="font-weight-bold">Atrakcyjne ceny wynajmu</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 ml-auto">
                                <div className="row">
                                    <div className="col-2"><CheckIcon/></div>
                                    <div className="col-10"><h5 className="font-weight-bold">Atrakcyjne ceny wynajmu</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="col-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 mr-auto">
                                <div className="row">
                                    <div className="col-2"><CheckIcon className=""/></div>
                                    <div className="col-10"><h5 className="font-weight-bold">Atrakcyjne ceny wynajmu</h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>             
            </div>
            <div/>
            </section>
            <section id="footer">
            <footer class="text-center text-black">
            <div class="container pt-4">
              <section class="mb-4">
                <a
                  class="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"><i class="fab fa-facebook-f"></i>a</a>
                <a
                  class="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"><i class="fab fa-twitter"></i>b</a>
                <a
                  class="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"><i class="fab fa-google"></i></a>
          
                <a
                  class="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"><i class="fab fa-instagram"></i></a>
                <a
                  class="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                  ><i class="fab fa-linkedin"></i></a>
                <a
                  class="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                  ><i class="fab fa-github"></i></a>
              </section>
                </div>
                <div class="text-center text-dark p-3">
                © 2020 Copyright:
                <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>
            </footer>
            </section>
        </div>
            
    </>
        )
    }
}

export default AppNavbar