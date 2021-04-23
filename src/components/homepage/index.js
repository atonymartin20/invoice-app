import React from 'react';
import { AppContext } from '../context/appContext.js';

import Navbar from '../navbar';
import '../../css/homepage.css';
import InvoicesHeader from './invoicesHeader.js';

class Homepage extends React.Component {
    render() {
        return(
            <div className='homepage-container-div'>
                <Navbar />
                {this.context.state.darkMode === true ?
                    <div className='homepage-inside-container-div-dark-mode'>
                        <InvoicesHeader />
                    </div>
                :
                    <div className='homepage-inside-container-div'>
                        <InvoicesHeader />
                    </div>
                }
            </div>
        )
    }
}

Homepage.contextType = AppContext;

export default Homepage;