import React from 'react';
import  { Navbar, Button } from 'reactstrap';
import '../../css/navbar.css';
import Logo from '../../assets/logo.svg';
import AppContext from '../context/appContext.js';
import { Redirect } from 'react-router-dom';

class MyNavbar extends React.Component {
    render() {
        return(
            <Navbar className='navbar'>

                <div className='button-box'>
                    <Button className='button'>
                        <img src={Logo} alt='Logo' className='logo' />
                        <div className='box' />
                    </Button>
                </div>
                
                <div className='second-box'>
                </div>

            </Navbar>
        )
    }
}

MyNavbar.contextType = AppContext;

export default MyNavbar;