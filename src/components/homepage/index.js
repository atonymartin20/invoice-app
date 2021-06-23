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
        activeFilter: false,
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
        if(this.state.pendingFilter === true) {
            this.setState({
                activeFilter: false,
                draftFilter: !this.state.draftFilter,
                paidFilter: false,
                pendingFilter: false,
            })
        }

        else {
            this.setState({
                activeFilter: true,
                draftFilter: !this.state.draftFilter,
                paidFilter: false,
                pendingFilter: false,
            })
        }
    }

    filterByStatusPaid = (event) => {
        event.preventDefault();
        if(this.state.pendingFilter === true) {
            this.setState({
                activeFilter: false,
                draftFilter: false,
                paidFilter: !this.state.paidFilter,
                pendingFilter: false,
            })
        }

        else {
            this.setState({
                activeFilter: true,
                draftFilter: false,
                paidFilter: !this.state.paidFilter,
                pendingFilter: false,
            })
        }
    }

    filterByStatusPending = (event) => {
        event.preventDefault();
        if(this.state.pendingFilter === true) {
            this.setState({
                activeFilter: false,
                draftFilter: false,
                paidFilter: false,
                pendingFilter: !this.state.pendingFilter
            })
        }

        else {
            this.setState({
                activeFilter: true,
                draftFilter: false,
                paidFilter: false,
                pendingFilter: !this.state.pendingFilter
            })
        }
    }

    render() {
        return(
            <div className='homepage-container-div'>
                <Navbar />
                {this.context.state.darkMode === true ?
                    <div className='homepage-inside-container-div-dark-mode'>
                        <InvoicesHeader type='dark' openFilterStatusMenu={this.openFilterStatusMenu} closeFilterStatusMenu={this.closeFilterStatusMenu} filterStatusContainerOpen={this.state.filterStatusContainerOpen} activeFilter={this.state.activeFilter} draftFilter={this.state.draftFilter} paidFilter={this.state.paidFilter} pendingFilter={this.state.pendingFilter} />
                    </div>
                :
                    <div className='homepage-inside-container-div'>
                        <InvoicesHeader type='light' openFilterStatusMenu={this.openFilterStatusMenu} closeFilterStatusMenu={this.closeFilterStatusMenu} filterStatusContainerOpen={this.state.filterStatusContainerOpen} activeFilter={this.state.activeFilter} draftFilter={this.state.draftFilter} paidFilter={this.state.paidFilter} pendingFilter={this.state.pendingFilter} />
                    </div>
                }
            </div>
        )
    }
}

Homepage.contextType = AppContext;

export default Homepage;