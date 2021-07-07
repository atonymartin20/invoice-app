import React from 'react';
import { AppContext } from '../context/appContext.js';

import '../../css/showInvoices.css';
import RightArrowIcon from '../../assets/icon-arrow-right.svg';

class InvoiceCard extends React.Component {
	state = {
        providedDueDate: this.props.paymentDue,
        testDate: new Date(this.props.paymentDue),
        month: 0,
        day: 0,
        year: 0,
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        total: this.props.total.toFixed(2)
	};

    componentDidMount() {
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
	render() {
		return (
			<div className="card-outside-div">
				{this.props.type === 'dark' ? (
					<div className="dark-mode">
					</div>
				) : (
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
				)}
			</div>
		);
	}
}

InvoiceCard.contextType = AppContext;

export default InvoiceCard;
