import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/images/logo.png'
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import DraftsIcon from '@material-ui/icons/Drafts';
import '../assets/styles/footer.scss';
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';


export default function Footer() {
    const [mobileAccordion, setMobileAccordion] = useState(window.innerWidth > 650);

    const updateMedia = () => {
        setMobileAccordion(window.innerWidth > 650);
    }

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    })

    return (           
        <footer className="text-center text-white bg-dark footer-container">
            <div className="d-flex justify-content-center align-items-center">
              <div className=""><img className="btn w-75 btn-link btn-floating btn-lg text-dark m-1 mx-100" src={Logo} alt="Logo"/></div>
              <div className="text-white">Sexy Cars</div>
            </div>
            <div className="mt-3 mb-3 d-flex justify-content-center align-items-center">
                <h4 className="text-white">@2020 Sexy Cars All Rights Reserved</h4>
            </div>
            { mobileAccordion ? 
                <div container="fluid" className="pb-3">
                    <div className="row footer-items-container">
                        <div className="footer-item col-12 d-flex justify-content-center
                        align-items-center">
                            <PhoneIcon/>
                            <div className='ml-2' style={{textSize:10}}>Telefon: +48 501 140 391</div>
                        </div>
                        <div className="footer-item col-12 d-flex align-items-center justify-content-center ">
                            <RoomIcon/>
                            <div className='ml-2' style={{fontSize:'13px'}}>Location: ul. Maria i Bolesława Ślubów 49/6, 30-611 Kraków</div>
                        </div>
                        <div className="footer-item col-12 d-flex justify-content-center align-items-center">
                            <DraftsIcon/>
                            <div className='ml-2' style={{textSize:10}}>Email: biuro@sexycars.pl</div>
                        </div>
                    </div>
                </div> : 
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>More Info</Accordion.Header>
                        <Accordion.Body>
                            <div className="d-flex justify-content-center align-items-center">
                                <div>Telefon: +48 501 140 391</div>
                                <PhoneIcon/>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <RoomIcon/>
                                <div>Location: ul. Maria i Bolesława Ślubów 49/6, 30-611 Kraków</div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center">
                                <DraftsIcon/>
                                <div>Email: biuro@sexycars.pl</div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion> 
            }
        </footer>
    );
}
