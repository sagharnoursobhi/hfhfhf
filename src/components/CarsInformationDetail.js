
import { useParams, Link } from "react-router-dom";
import data from "../data/data";
import '../assets/styles/infoDetail.scss';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import ErrorModal from "./ErrorModal";


export default function CarsInformationDetail() {
    const { id } = useParams();
    let result = data.find(el => el.id === id);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [newUser, setNewUser] = useState('');
    const [error, setError] = useState();

    const onConfirm = () => {
        setError(null);
    }

    const onSubmithandler = (e) => {
        e.preventDefault();

        if(fullName.trim().length === 0 || email.trim().length === 0) {
            setError({
                name:"Invalid Input!",
                message:"Name and email fields must be filled out.",
                show:true
            })
        }

        setNewUser([...newUser, {name: fullName, email: email, phone: phoneNum}]);
        setFullName('');
        setEmail('');
        setPhoneNum('');
    }

    return(
        <div className="position-relative">
            <Navbar />
            <div className="page-container">
                <div className="car-info-container">
                    <div><img src={result.carImageSrc} alt="" /></div>
                    <div>{result.enginInfo}</div>
                    <div>{result.rentalPrices}</div>
                </div>
                <Form className="mt-3 mb-3 rent-form" onSubmit={onSubmithandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control onChange={(e)=>setFullName(e.target.value)} value={fullName} type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control onChange={(e)=>setPhoneNum(e.target.value)} value={phoneNum} type="text" placeholder="Telephone" />
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
            { error && <ErrorModal showModal={error.show} onConfirm={onConfirm} message={error.message} name={error.name}/> } 
            <Footer />
        </div>
    )
}