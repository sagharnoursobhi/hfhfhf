import Navbar from "../components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/Footer";
import CarsInfoMoreDetail from '../components/CarsInfoMoreDetail'
import rentCar from '../assets/images/rentCar.jpeg';
import '../assets/styles/carInformation.scss';
import { FetchData } from "../data/FetchData";

const SecondCar = () => {

    const products = FetchData('http://localhost:1337/api/cars?populate=%2A');
    let content = [];

    if(products.data) {
       content =  products.data.map((item,ix) => {
            return <CarsInfoMoreDetail name={item.attributes.carName} source={`http://localhost:1337${item.attributes.carImage.data.attributes.url}`} rentalPrices={item.attributes.rentalPrices} key={ix} id={item.id}/>
        })
    }


    return (
        <>
            <Navbar />
            <div className="title">SexyCars Sports and Luxury Car Rental</div>
            <div className="cars-details-container pl-4 pr-4">
                { content }
            </div>
            <div className='other-details pl-4 pr-4'>
                <div>Among passers-by, the most attention is always drawn to the passing car, arousing considerable admiration and sometimes envious glances. Thanks to SexyCars, everyone can experience a bit of luxury and feel special.</div>
                <div>We offer you a car, which can be offered by our rental company in the following cities: Kraków, Katowice, Wrocław, Warsaw, Rzeszów, Łódź, Częstochowa, Oświęcim, Kielce, Gdańsk, Gdynia, Sopot, and Tricity. More and more often, future newlyweds borrow this model for their wedding in order to add splendor to the most important day of their lives. We encourage you to familiarize yourself with our diverse and extremely affordable offer.</div>
                <div className="other-details-car-container"><img src={rentCar} alt="" /></div>
                <div className="mt-4">- 20 - inch Carrera S wheels with high aesthetic values,</div>
                <div>- navigation in the Connect Plus system,</div>
                <div>- a perfectly functioning transmission thanks to the Sport Chrono Package, which guarantees a dynamic suspension of the gearbox,</div>
                <div>- a sensitive steering wheel that reacts immediately to all movements,</div>
                <div>- high degree of adhesion,</div>
                <div>- extremely comfortable, quite narrow and low armchairs,</div>
                <div>- two luggage racks of different capacity.</div>
                <div>Znajdujący się w naszej ofercie czyli wypożyczalnia Porsche 718 Cayman, zachwyci każdego miłośnika sportowych aut. Dzięki rasowemu brzmieniu silnika, wysokiemu komfortowi jazdy i nowoczesnemu, designerskiemu wnętrzu, przejażdżka będzie niezapomnianym doświadczeniem. Doskonale sprawdzi się jako niebanalny prezent urodzinowy lub auto na ślub. Goście będą pod wrażeniem Państwa dobrego gustu w wyborze środka transportu.</div>
            </div>
        <Footer/>
        </>
    )
}
export default SecondCar