import React, { Component } from 'react';
import Footer from './Footer'
import NavbarApp from './Navbar';
import NavbarSecond from './NavbarSecond';


class Contact extends Component {

    render() { 
        return (
            <>
                <NavbarApp/>
                <NavbarSecond/>
                <Footer/>
            </>

          );
    }
}
 
export default Contact;