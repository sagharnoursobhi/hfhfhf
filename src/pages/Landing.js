import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import landingPageFirst from '../assets/images/landingPageFirst.png';
import landingPageSecond from '../assets/images/landingPageSecond.png';
import landingPageThird from '../assets/images/landingPageThird.png';
import Map from '../assets/images/map.png';
import CheckIcon from '@material-ui/icons/Check';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/styles/landingPage.scss';
import data from '../data/data';
import { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import ListOfCars from '../components/ListOfCars';



export default function Landing(){

    const [numberOfItems, setNumberOfItems] = useState(3);
    let initialItems = data.slice(0, numberOfItems);


    const ItemsHandler = () => {
        setNumberOfItems(numberOfItems + numberOfItems);
    }

    const listOfOptions = [
        'Attractive rental prices', 'Most cars without a deposit', 'Possible delivery of cars in Krakow',
        'The best rental company in Krakow', 'Rental satisfaction guaranteed', 'We have beautiful and fast sports cars',
        'Short-term and long-term rental', 'Wypożyczamy nasze auta do Ślubu'
    ]

    const [cars, setCars] = useState({
        loading:false,
        data:null,
        err:false
    });

    useEffect(() => {
        setCars({
            loading:true,
            data:null,
            err:false
        })
        setTimeout(()=>{
            setCars({
                loading:false,
                data:data,
                err:false
            })
        }, 500);
        if(!data) {
            setCars({
                loading:false,
                data:null,
                err:true
            })
        }
    },[]);

    let content = null;

    if(cars.data) {
        content = <ListOfCars itemsToRender={initialItems}/>;
    }

    if(cars.loading) {
        content = <Loader/>
    }


        return(  
            <>
                { cars.err ? <h1 className="ml-5">There was an error. Please refresh the page or try again later.</h1> :
                
                <div className="landing-page-container">
                    <Navbar/>
                    <div className="heading">
                        <div className="position-absolute empty-div-transform heading-blur mw-100 mh-100 w-100 heading-desc">
                            <div>Dream car rental</div>
                            <div>We will make your dreams come true!</div>
                        </div>
                    </div>
                    <div className="container-fluid" id="main">
                        <div className={`p-5 ${cars.loading ? 'loader-container' : 'cars-container'}`}>
                            { content }
                        </div>
                        {numberOfItems < data.length && <div onClick={ItemsHandler} className="d-flex justify-content-center align-items-center more-btn">
                            See more!             
                        </div>}
                        <div className="meet-container pt-5">
                            <div className="meet-title">Meet our fleet!</div>
                            <div className="meet-desc">SexyCars sports and luxury car rental focuses on one goal, which is your complete satisfaction with renting a sports car with us. We will guarantee you maximum joy and comfort of using sports cars in our rental. We also try to make this pleasure not too expensive.</div>
                            <div className="meet-desc">We rent our sports cars all over Poland, and most often in the following cities: Kraków, Katowice, Wrocław, Warsaw without a deposit and at a good price. We rent our sports and luxury cars daily or for a longer period, i.e. long-term. When choosing a rental in the cities of Kraków, Warsaw, Katowice, Wrocław, Rzeszów, Częstochowa, Kielce, Częstochowa, Bydgoszcz, Białystok, you can expect professional service from us.</div>
                            <div className="meet-img-container mw-100 mh-100">
                                <img src={Map} alt="map" className="img-media"/>
                            </div>
                            <div className="meet-desc">Sports cars are a category of cars with a greater emphasis on driving dynamics than practicality. At the same time, they are civilian cars that must comply with all technical rules for traffic on public roads.</div>
                            <div className="meet-options">They can be:</div>
                            <div className="meet-options">Cars modified from classic bodies to sports bodies (e.g. as a result of tuning)</div>
                            <figure className="meet-img-container mw-100 mh-100">
                                <img src={landingPageFirst} alt="map" className="img-media"/>
                                <figcaption>2019 Toyota Corolla Hatchback (tuningowana)</figcaption>
                            </figure>
                            <div className="meet-options">They can be:</div>
                            <div className="meet-options">Typically sports cars produced for fun driving</div>
                            <figure className="meet-img-container mw-100 mh-100">
                                <img src={landingPageSecond} alt="car8"/>
                                <figcaption>2018 Lamborghini Huracan LP580</figcaption>
                            </figure>
                            <div className="meet-options">Extreme cars, designed for competitive and racing driving</div>
                            <figure className="meet-img-container mw-100 mh-100">
                                <img src={landingPageThird} alt="car8"/>
                                <figcaption>2016 Aston Martin Vulcan</figcaption>
                            </figure>
                            <div className="meet-options">So before you choose sports cars to rent or buy, find out which one is worth choosing. We, on the other hand, will provide appropriate preparation and professional service:</div>
                        </div>
                        <div className="list-of-options">
                            {listOfOptions.map((item, ix) => {
                                return(
                                    <div className="d-flex justify-content-start align-items-center" key={ix}>
                                        <div className="check-icon font-weight-bold"><CheckIcon className="icon-color"/></div>
                                        <div className="options ml-3 font-weight-bold">{ item }</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <Footer id="footer"/>
                </div>}
            </>
        )
    }

 