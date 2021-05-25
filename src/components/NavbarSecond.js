import React, { Component } from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/logo.png'
import './navbar.css'
import { NavLink } from 'react-router-dom'



class NavbarSecond extends Component {
    // onMouseEnter={()=>{
    //     document.getElementById('id').style.cursor = 'pointer';
    // }}

    render() {
        return (
            <>
                <div className="container-fluid">
                    <div className="row nav2">
                        <div className="col-4 d-flex justify-content-center align-items-center">
                            <div className="col-2 "><span><a href='#footer' className='header-link'><h5>SexyCars</h5></a></span></div>
                            <div className="col-2"><img src={Logo} alt="logo" className="mw-100 mh-100 width" /></div>
                        </div>
                        <div className="col-4 d-flex justify-content-around align-items-center">
                            <span><NavLink to='/cars' className='header-link'>Cars</NavLink></span>
                            <span><a href='#footer'>Information</a></span>
                            <span>Contact</span>
                        </div>
                        <div className="col-4 d-flex justify-content-around align-items-center ">
                            <span className="ml-auto"><InstagramIcon /></span>
                            <span><FacebookIcon /></span>
                            <span className="mr-auto"><PlayCircleFilledWhiteIcon /></span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default NavbarSecond;