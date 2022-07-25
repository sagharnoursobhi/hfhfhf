import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../assets/images/logo.png'
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import DraftsIcon from '@material-ui/icons/Drafts';
import '../assets/styles/footer.scss';

function Footer(){
        return ( 
        <footer className="text-center text-white bg-dark footer-container" style={{height:200}}>
            <div className="d-flex justify-content-center align-items-center">
              <div className=""><img className="btn w-75 btn-link btn-floating btn-lg text-dark m-1 mx-100" src={Logo} alt="Logo"/></div>
              <div className="text-white">Sexy Cars</div>
            </div>
            <div className="mt-3 mb-3 d-flex justify-content-xl-center justify-content-lg-center
            justify-content-md-start justify-content-sm-start">
                <h4 className="text-white">@2020 Sexy Cars All Rights Reserved</h4>
            </div>
            <div container="fluid">
              <div className="row footer-items-container">
                  <div className="footer-item col-xl-3 col-lg-3 col-md-3 col-sm-3 d-flex justify-content-xl-center justify-content-lg-center
                  justify-content-md-start justify-content-sm-start align-items-center">
                      <PhoneIcon/>
                      <div className='ml-2' style={{textSize:10}}>Telefon: +48 501 140 391</div>
                  </div>
                  <div className="footer-item col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-xl-center 
                  justify-content-lg-center justify-content-md-start justify-content-sm-start">
                      <RoomIcon/>
                      <div className='ml-2' style={{fontSize:'13px'}}>Location: ul. Maria i Bolesława Ślubów 49/6, 30-611 Kraków</div>
                  </div>
                  <div className="footer-item col-xl-3 col-lg-3 col-md-3 col-sm-3 d-flex d-flex justify-content-xl-center 
                  justify-content-lg-center justify-content-md-start justify-content-sm-start align-items-center">
                      <DraftsIcon/>
                      <div className='ml-2' style={{textSize:10}}>Email: biuro@sexycars.pl</div>
                  </div>
                </div>
            </div>
        </footer>
         );
    }

export default Footer;