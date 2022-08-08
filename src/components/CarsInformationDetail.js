
import { useParams, Link } from "react-router-dom";
import data from "../data/data";
import '../assets/styles/infoDetail.scss';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function CarsInformationDetail() {
    const { id } = useParams();
    let result = data.find(el => el.id === id)

    return(
        <>
            <Navbar />
            <div className="page-container">
                <div className="car-info-container">
                    <div><img src={result.carImageSrc} alt="" /></div>
                    <div>{result.enginInfo}</div>
                    <div>{result.rentalPrices}</div>
                </div>
                <Form className="mt-3 mb-3 rent-form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" className="rent-btn d-flex justify-content-center align-items-center" type="submit">
                        <LocalTaxiIcon/>
                        <span>Rent the Car</span>
                    </Button>
                </Form>
                <Link className="text-info cursor-pointer d-flex justify-content-start align-items-start mt-4" to="/">
                    <ArrowBackIcon/>
                    <span>Back to Home page</span>
                </Link>
            </div>
            <Footer />
        </>
    )
}