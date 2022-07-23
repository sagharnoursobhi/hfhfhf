import Navbar from "../Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Car from '../../images/car.jpg'
import YellowCar from '../../images/yellowcar.png'
import Footer from "../Footer";

const SecondCar = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <p>Porsche 911 Carrera 4s</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <p className="text-danger">SexyCars Sports and Luxury Car Rental</p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-10 col-xs-10">
                        <img src={Car} alt="car" />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-2 col-xs-2">
                        <div className="container-fluid">
                            <div className="row">
                                <h3>Gross Rental Prices:</h3>
                            </div>
                            <div className="row">
                                <p>- 1 day / 24h: PLN 990</p>
                            </div>
                            <div className="row">
                                <p>3 - 6 days: PLN 890 / day</p>
                            </div>
                            <div className="row">
                                <p>- Week / 7 days: PLN 4,400</p>
                            </div>
                            <div className="row">
                                <p>- Month: PLN 11,000</p>
                            </div>
                            <div className="row">
                                <p>- 350 km / day limit - then PLN 3 / km</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <p className="">Among passers-by, the most attention is always drawn to the passing Porsche 718 Cayman, arousing considerable admiration and sometimes envious glances. Thanks to SexyCars, everyone can experience a bit of luxury and feel special.</p>
                </div>
                <div className="row mt-5">
                    <p>We offer you a Porsche 718 Cayman rental, which can be offered by our rental company in the following cities: Kraków, Katowice, Wrocław, Warsaw, Rzeszów, Łódź, Częstochowa, Oświęcim, Kielce, Gdańsk, Gdynia, Sopot, and Tricity. More and more often, future newlyweds borrow this model for their wedding in order to add splendor to the most important day of their lives. We encourage you to familiarize yourself with our diverse and extremely affordable offer.</p>
                </div>
                <div className="row mt-5">
                    <img src={YellowCar} alt="yellow-car" />
                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6">
                        <p>- 20 - inch Carrera S wheels with high aesthetic values,</p>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6">
                        <p>- navigation in the Connect Plus system,</p>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6">
                        <p>- a perfectly functioning transmission thanks to the Sport Chrono</p>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6">
                        <p>Package, which guarantees a dynamic suspension of the gearbox,</p>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6">
                        <p>- a sensitive steering wheel that reacts immediately to all movements,</p>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6">
                        <p>- high degree of adhesion,</p>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6">
                        <p>- extremely comfortable, quite narrow and low armchairs,</p>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6">
                        <p>- two luggage racks of different capacity.</p>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6">
                        <p>Znajdujący się w naszej ofercie czyli wypożyczalnia Porsche 718 Cayman, zachwyci każdego miłośnika sportowych aut. Dzięki rasowemu brzmieniu silnika, wysokiemu komfortowi jazdy i nowoczesnemu, designerskiemu wnętrzu, przejażdżka będzie niezapomnianym doświadczeniem. Doskonale sprawdzi się jako niebanalny prezent urodzinowy lub auto na ślub. Goście będą pod wrażeniem Państwa dobrego gustu w wyborze środka transportu.</p>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}
export default SecondCar