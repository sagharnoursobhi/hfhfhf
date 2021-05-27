    import React from 'react';
    import FacebookIcon from '@material-ui/icons/Facebook';
    import InstagramIcon from '@material-ui/icons/Instagram';
    import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Logo from '../images/logo.png'
    import './navbar.css'
    import { NavLink } from 'react-router-dom'
    import styled from 'styled-components'



const NavbarSecond = ()=> {
   
        
        return (
            <>
                <div className="container-fluid">
                    <div className="row nav2">
                        <div className="col-4 d-flex justify-content-center align-items-center">
                            <div className="col-2 "><span><h5><a href="#footer" className="link">SexyCars</a></h5></span></div>
                            <div className="col-2"><img src={Logo} alt="logo" className="mw-100 mh-100 width" /></div>
                        </div>
                        <div className="col-4 d-flex justify-content-around align-items-center">
                            <span><NavLink className="link" to='/cars' >Cars</NavLink></span>
                            <span><a className="link" href='#footer'>Information</a></span>
                            <span><a href="#footer" className="link">Contact</a></span>
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


export default NavbarSecond;