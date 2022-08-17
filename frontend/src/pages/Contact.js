import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import mapSecond from '../assets/images/mapContact.png';
import StarIcon from '@material-ui/icons/Star';
import '../assets/styles/contact.scss';


const ContactPage = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="text-danger text-center mt-4 mb-4 contact-exp text-title">SexyCars Sports and Luxury Car Rental</div>
                <hr />
                <div className="text-bold text-medium">Contact: </div>
                <div className="row mt-4">
                    <div className='col-xl-6 col-lg-6 col-md-6 col-12 text-medium'>Address: ul. Maria and Bolesław Koniecouchów 49/6 30-611 Krakow, Poland</div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-12 text-medium'>Availability: Monday - Sunday from 08:00 to 22:00</div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-12 mt-4 text-medium'>Telephone: +48 501 140 391</div>
                    <div className='col-xl-6 col-lg-6 col-md-6 col-12 mt-4 text-medium'>Mail: biuro@sexycars.pl</div>
                    <div className='col-12 mt-4 text-medium'><img src={mapSecond} alt="map-second"/></div>
                    <div className='col-12 mt-4 mb-4 d-flex justify-content-center align-items-center text-medium'>
                        <StarIcon className="bg-success"/>
                        <StarIcon className="bg-success ml-2"/>
                        <StarIcon className="bg-success ml-2"/>
                        <StarIcon className="bg-success ml-2"/>
                        <span className='text-medium ml-2'>6 dni temu</span>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default ContactPage