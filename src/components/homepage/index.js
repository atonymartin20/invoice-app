import React from 'react';
import { AppContext } from '../context/appContext.js';

import Navbar from '../navbar';
import '../../css/homepage.css';
import InvoicesHeader from './invoicesHeader.js';

class Homepage extends React.Component {
    state = {
        filterStatusContainerOpen: false,
        draftFilter: false,
        paidFilter: false,
        pendingFilter: false,
    }

    openFilterStatusMenu = (event) => {
        event.preventDefault();
        this.setState({
            filterStatusContainerOpen: true
        })
    }

    closeFilterStatusMenu = (event) => {
        event.preventDefault();
        this.setState({
            filterStatusContainerOpen: false
        })
    }

    filterByStatusDraft = (event) => {
        event.preventDefault();
        this.setState({
            draftFilter: !this.state.draftFilter
        })
    }

    render() {
        return(
            <div className='homepage-container-div'>
                <Navbar />
                {this.context.state.darkMode === true ?
                    <div className='homepage-inside-container-div-dark-mode'>
                        <InvoicesHeader type='dark' openFilterStatusMenu={this.openFilterStatusMenu} closeFilterStatusMenu={this.closeFilterStatusMenu} filterStatusContainerOpen={this.state.filterStatusContainerOpen} />
                    </div>
                :
                    <div className='homepage-inside-container-div'>
                        <InvoicesHeader type='light' openFilterStatusMenu={this.openFilterStatusMenu} closeFilterStatusMenu={this.closeFilterStatusMenu} filterStatusContainerOpen={this.state.filterStatusContainerOpen} />
                    </div>
                }
            </div>
        )
    }
}

Homepage.contextType = AppContext;

export default Homepage;