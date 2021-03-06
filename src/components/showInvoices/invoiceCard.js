import React from 'react';

import '../../css/showInvoices.css';
import RightArrowIcon from '../../assets/icon-arrow-right.svg';
import { Redirect } from 'react-router-dom';

class InvoiceCard extends React.Component {
	state = {
        providedDueDate: this.props.paymentDue,
        testDate: new Date(this.props.paymentDue),
        month: 0,
        day: 0,
        year: 0,
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        total: this.props.total.toFixed(2),
        redirect: false,

	};

    componentDidMount = () => {
        let month = this.state.testDate.getUTCMonth();
        let day = this.state.testDate.getUTCDate();
        let year = this.state.testDate.getFullYear();
        let newTotal = this.state.total.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        this.setState({
            month,
            day,
            year,
            total: newTotal
        })
    }

    handleRedirect = (event) => {
        event.preventDefault();
        this.setState({
            redirect: true
        })
    }   
    
	render() {
        
        if (this.props.type === 'unfiltered' && this.props.colorType === 'dark') {
            return (
                <div className="card-outside-div" onClick={this.handleRedirect}>
                    {this.state.redirect ? <Redirect to={{ pathname:'/view', state: {id: this.props.id} }} /> : null}
                    <div className="card-inside-div-dark-mode">
                        <span className='id-span'>#<span className='white-font-span'>{this.props.id}</span></span>
                        <span className='due-date-span-dark-mode'>Due {this.state.day.toString().padStart(2,0)} {this.state.months[this.state.month]} {this.state.year}</span>
                        <span className='client-name-span-dark-mode'>{this.props.clientName}</span>
                        <span className='totals-span-dark-mode'>£ {this.state.total}</span>
                        {this.props.status === 'draft' ? <div className='draft-status-div-dark-mode'><span className='status-span-draft-dark-mode'><div className='draft-ball-div-dark-mode' />{this.props.status}</span></div>: null }
                        {this.props.status === 'pending' ? <div className='pending-status-div'><span className='status-span-pending'><div className='pending-ball-div' />{this.props.status}</span></div>: null }
                        {this.props.status === 'paid' ? <div className='paid-status-div'><span className='status-span-paid'><div className='paid-ball-div' />{this.props.status}</span></div> : null }
                        
                        <img src={RightArrowIcon} alt='right arrow' />
                    </div>
                </div>
            );
        }

        else if (this.props.type === 'unfiltered' && this.props.colorType === 'light') {
            return (
                <div className="card-outside-div" onClick={this.handleRedirect}>
                    {this.state.redirect ? <Redirect to={{ pathname:'/view', state: {id: this.props.id} }} /> : null}
                    <div className="card-inside-div">
                        <span className='id-span'>#<span className='black-font-span'>{this.props.id}</span></span>
                        <span className='due-date-span'>Due {this.state.day.toString().padStart(2,0)} {this.state.months[this.state.month]} {this.state.year}</span>
                        <span className='client-name-span'>{this.props.clientName}</span>
                        <span className='totals-span'>£ {this.state.total}</span>
                        {this.props.status === 'draft' ? <div className='draft-status-div'><span className='status-span-draft'><div className='draft-ball-div' />{this.props.status}</span></div>: null }
                        {this.props.status === 'pending' ? <div className='pending-status-div'><span className='status-span-pending'><div className='pending-ball-div' />{this.props.status}</span></div>: null }
                        {this.props.status === 'paid' ? <div className='paid-status-div'><span className='status-span-paid'><div className='paid-ball-div' />{this.props.status}</span></div> : null }
                        
                        <img src={RightArrowIcon} alt='right arrow' />
                    </div>
                </div>
            );
        }

        else if (this.props.type === 'filtered' && this.props.colorType === 'dark') {
            return (
                <div className="card-outside-div-filtered" onClick={this.handleRedirect}>
                    {this.state.redirect ? <Redirect to={{ pathname:'/view', state: {id: this.props.id} }} /> : null}
                    <div className="card-inside-div-dark-mode">
                        <span className='id-span'>#<span className='white-font-span'>{this.props.id}</span></span>
                        <span className='due-date-span-dark-mode'>Due {this.state.day.toString().padStart(2,0)} {this.state.months[this.state.month]} {this.state.year}</span>
                        <span className='client-name-span-dark-mode'>{this.props.clientName}</span>
                        <span className='totals-span-dark-mode'>£ {this.state.total}</span>
                        {this.props.status === 'draft' ? <div className='draft-status-div-dark-mode'><span className='status-span-draft-dark-mode'><div className='draft-ball-div-dark-mode' />{this.props.status}</span></div>: null }
                        {this.props.status === 'pending' ? <div className='pending-status-div'><span className='status-span-pending'><div className='pending-ball-div' />{this.props.status}</span></div>: null }
                        {this.props.status === 'paid' ? <div className='paid-status-div'><span className='status-span-paid'><div className='paid-ball-div' />{this.props.status}</span></div> : null }
                        
                        <img src={RightArrowIcon} alt='right arrow' />
                    </div>

                    <div className="card-inside-div-dark-mode-small">
                        <div className='card-inside-div-small-top-portion'>
                            <span className='id-span'>#<span className='white-font-span'>{this.props.id}</span></span>
                            <span className='client-name-span-dark-mode'>{this.props.clientName}</span>
                        </div>
                        <div className='card-inside-div-small-bottom-portion'>
                            <div className='card-inside-div-small-bottom-portion-left-side'>
                                <span className='due-date-span-dark-mode'>Due {this.state.day.toString().padStart(2,0)} {this.state.months[this.state.month]} {this.state.year}</span>
                                <span className='totals-span-dark-mode'>£ {this.state.total}</span>
                            </div>
                            {this.props.status === 'draft' ? <div className='draft-status-div-dark-mode'><span className='status-span-draft-dark-mode'><div className='draft-ball-div-dark-mode' />{this.props.status}</span></div>: null }
                            {this.props.status === 'pending' ? <div className='pending-status-div'><span className='status-span-pending'><div className='pending-ball-div' />{this.props.status}</span></div>: null }
                            {this.props.status === 'paid' ? <div className='paid-status-div'><span className='status-span-paid'><div className='paid-ball-div' />{this.props.status}</span></div> : null }
                        </div>
                    </div>
                </div>
            );
        }

        else {
            return (
                <div className="card-outside-div-filtered" onClick={this.handleRedirect}>
                    {this.state.redirect ? <Redirect to={{ pathname:'/view', state: {id: this.props.id} }} /> : null}
                    <div className="card-inside-div">
                        <span className='id-span'>#<span className='black-font-span'>{this.props.id}</span></span>
                        <span className='due-date-span'>Due {this.state.day.toString().padStart(2,0)} {this.state.months[this.state.month]} {this.state.year}</span>
                        <span className='client-name-span'>{this.props.clientName}</span>
                        <span className='totals-span'>£ {this.state.total}</span>
                        {this.props.status === 'draft' ? <div className='draft-status-div'><span className='status-span-draft'><div className='draft-ball-div' />{this.props.status}</span></div>: null }
                        {this.props.status === 'pending' ? <div className='pending-status-div'><span className='status-span-pending'><div className='pending-ball-div' />{this.props.status}</span></div>: null }
                        {this.props.status === 'paid' ? <div className='paid-status-div'><span className='status-span-paid'><div className='paid-ball-div' />{this.props.status}</span></div> : null }
                        
                        <img src={RightArrowIcon} alt='right arrow' />
                    </div>

                    <div className="card-inside-div-small">
                        <div className='card-inside-div-small-top-portion'>
                            <span className='id-span'>#<span className='black-font-span'>{this.props.id}</span></span>
                            <span className='client-name-span'>{this.props.clientName}</span>
                        </div>
                        <div className='card-inside-div-small-bottom-portion'>
                            <div className='card-inside-div-small-bottom-portion-left-side'>
                                <span className='due-date-span'>Due {this.state.day.toString().padStart(2,0)} {this.state.months[this.state.month]} {this.state.year}</span>
                                <span className='totals-span'>£ {this.state.total}</span>
                            </div>
                            {this.props.status === 'draft' ? <div className='draft-status-div-dark-mode'><span className='status-span-draft'><div className='draft-ball-div' />{this.props.status}</span></div>: null }
                            {this.props.status === 'pending' ? <div className='pending-status-div'><span className='status-span-pending'><div className='pending-ball-div' />{this.props.status}</span></div>: null }
                            {this.props.status === 'paid' ? <div className='paid-status-div'><span className='status-span-paid'><div className='paid-ball-div' />{this.props.status}</span></div> : null }
                        </div>
                    </div>
                </div>
            );
        }
	}
}

export default InvoiceCard;