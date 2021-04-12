import React from 'react';
import  { Navbar, Button } from 'reactstrap';
import '../../css/navbar.css';
import { AppContext } from '../context/appContext.js';
import { Redirect } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import SunIcon from '../../assets/icon-sun.svg';
import MoonIcon from '../../assets/icon-moon.svg';
import ProfileImg from '../../assets/image-avatar.jpg';

class MyNavbar extends React.Component {
    state = {
        redirect: false,
        darkMode: this.context.state.darkMode,
    }

    handleRedirect = (event) => {
        event.preventDefault();
        this.setState({
            redirect: true
        })
    }   
    
    switchToDarkMode = (event) => {
        event.preventDefault();
        this.context.switchToDarkMode();
        this.setState({
            darkMode: true
        })
    }

    switchToLightMode = (event) => {
        event.preventDefault();
        this.context.switchToLightMode();
        this.setState({
            darkMode: false
        })
    }

    render() {
        return(
            <Navbar className='light-navbar'>
                {this.state.redirect ? <Redirect to={{ pathname:'/' }} /> : null}

                <div className='button-box'>
                    <Button className='button' onClick={this.handleRedirect}>
                        <img src={Logo} alt='Logo' className='logo' />
                        <div className='box' />
                    </Button>
                </div>
                
                <div className='second-box'>
                    {this.state.darkMode ? 
                        <img src={SunIcon} alt='Sun Icon' className='sun-icon' onClick={this.switchToLightMode} />
                        : 
                        <img src={MoonIcon} alt='Moon Icon' className='moon-icon' onClick={this.switchToDarkMode} />
                    }

                    <div className='second-box-line' />

                    <img src={ProfileImg} alt='Profile Img' className='profile-img' />
                </div>

            </Navbar>
        )
    }
}

MyNavbar.contextType = AppContext;

export default MyNavbar;