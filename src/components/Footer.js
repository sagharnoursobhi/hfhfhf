import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/logo.png'
import PhoneIcon from '@material-ui/icons/Phone';
import RoomIcon from '@material-ui/icons/Room';
import DraftsIcon from '@material-ui/icons/Drafts';

function Footer(){
        return ( 
        <footer className="text-center text-white bg-dark">
            <div className="container pt-4">
              <section className="mb-4">
                <img className="btn btn-link btn-floating btn-lg text-dark m-1 mx-100" src={Logo} alt="Logo"/>
                <a
                  className="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"><i className="fab fa-google"></i></a>
          
                <a
                  className="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"><i className="fab fa-instagram"></i></a>
                <a
                  className="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                  ><i className="fab fa-linkedin"></i></a>
                <a
                  className="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                  ><i className="fab fa-github"></i></a>
              </section>
                </div>
            <div className="text-center p-3">
                <h4 className="text-white">@2020 Sexy Cars All Rights Reserved</h4>
            </div>
            <div container="fluid">
              <div className="row">
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <span className="d-flex justify-content-end align-items-center">
                      <PhoneIcon/>
                      <p style={{textSize:10}}>Telefon: +48 501 140 391</p>
                    </span>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <span className="d-flex justify-content-center align-items-center">
                      <RoomIcon/>
                      <p style={{fontSize:'13px'}}>Location: ul. Maria i Bolesława Ślubów 49/6, 30-611 Kraków</p>
                    </span>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                    <span className="d-flex justify-content-start align-items-center">
                      <DraftsIcon/>
                      <p style={{textSize:10}}>Email: biuro@sexycars.pl</p>
                    </span>
                  </div>
                </div>
            </div>
        </footer>
         );
    }

export default Footer;