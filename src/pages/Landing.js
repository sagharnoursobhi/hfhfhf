import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SeventhCar from '../assets/images/car7.png';
import EighthCar from '../assets/images/car8.png';
import NinthCar from '../assets/images/car9.png';
import Map from '../assets/images/map.png';
import CheckIcon from '@material-ui/icons/Check';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../App.css';
import '../assets/styles/landingPage.scss';
import data from '../data/CarsInformation';
import CarInfo from '../data/CarInfo';


function Landing(){

        const listOfCars = data.map((item,ix) => {
                return(
                    <div className=" custom-orange-border car-card p-4" key={ix}>
                        <div className="car-title mb-3">{item.carName}</div>
                        <div className="car-info-container d-flex justify-content-around align-items-center">
                            <div className="img-container"><img src={item.carImageSrc} alt="" /></div>
                            <CarInfo brand={item.brand} enginInfo={item.enginInfo} color={item.color} speed={item.speed}/>
                        </div>
                    </div>
                )
            })

        return(
            
                <div className="landing-page-container">
                    <Navbar/>
                    <div className="container-fluid heading" id="main">
                        <div className="row">
                            <div className="col-lg-12 col-xs-12 col-sm-6 col-md-8 position-relative text-center text-white w-100 img-top">
                                <div className="position-absolute empty-div-transform heading-blur mw-100 mh-100 w-100">
                                <ul className="list-unstyled">
                                    <h3 className="text-danger">Dream car rental</h3>
                                    <h1>We will make your dreams come true!</h1>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className='cars-container pt-5'>
                            { listOfCars }
                        </div>
                        <div className="container ">
                            <div className="row">
                                <div className="col-4 ml-auto mr-auto margin2 border-warning d-flex justify-content-center align-items-center see-more">
                                    <h3 className="text-center">See more!</h3>
                                </div>                
                            </div>
                        </div>
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
                                    <img src={Map} alt="map" className="img-media"/>
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
                                                    <div className="col-10"><p className="font-weight-bold">Attractive rental prices</p></div>
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
                                                    <div className="col-2"><CheckIcon className="icon-color"/></div>
                                                    <div className="col-10"><p className="font-weight-bold">Most cars without a deposit</p></div>
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
                                                <div className="col-2"><CheckIcon className="icon-color"/></div>
                                                <div className="col-10"><p className="font-weight-bold">Possible delivery of cars in Krakow</p></div>
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
                                                <div className="col-2"><CheckIcon className="icon-color"/></div>
                                                <div className="col-10"><p className="font-weight-bold">The best rental company in Krakow</p></div>
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
                                                <div className="col-2"><CheckIcon className="icon-color"/></div>
                                                <div className="col-10"><p className="font-weight-bold">Rental satisfaction guaranteed</p></div>
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
                                                <div className="col-2"><CheckIcon className="icon-color"/></div>
                                                <div className="col-10"><p className="font-weight-bold">We have beautiful and fast sports cars</p></div>
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
                                                <div className="col-2"><CheckIcon className="icon-color"/></div>
                                                <div className="col-10"><p className="font-weight-bold">Short-term and long-term rental</p></div>
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
                                                <div className="col-2"><CheckIcon className="icon-color"/></div>
                                                <div className="col-10"><p className="font-weight-bold">Wypożyczamy nasze auta do Ślubu</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>             
                        </div>
                        <div/>
                        </section>
                        <section className="mt-5" id="footer">
                            <Footer id="footer"/>
                        </section>
                    </div>
                </div>
        )
    }

export default Landing