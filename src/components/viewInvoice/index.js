import React from 'react';
import { AppContext } from '../context/appContext.js';

import Navbar from '../navbar';
import '../../css/viewInvoice.css';
import LeftArrowIcon from '../../assets/icon-arrow-left.svg';
import ItemCard from './itemCard.js';

class ViewInvoice extends React.Component {
	state = {
        invoice: {},
		months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		createdAtDateDay: null,
		createdAtDateMonth: null,
		createdAtDateYear: null,
		paymentDueDateDay: null,
		paymentDueDateMonth: null,
		paymentDueDateYear: null,
		clientAddress: {},
		clientEmail: '',
		clientName: '',
		description: '',
		id: '',
		items: {},
		paymentTerms: 0,
		senderAddress: {},
		status: '',
		total: 0,
	};

    componentDidMount() {
        this.context.state.invoices.map((invoice, index) => {
            if(invoice.id === this.props.location.state.id) {
				let payDate = new Date(invoice.paymentDue);
				let createdDate = new Date(invoice.createdAt)
				let paymentDueDateMonth = payDate.getUTCMonth();
				let paymentDueDateDay = payDate.getUTCDate();
				let paymentDueDateYear = payDate.getFullYear();
				let createdAtDateMonth = createdDate.getUTCMonth();
				let createdAtDateDay = createdDate.getUTCDate();
				let createdAtDateYear = createdDate.getFullYear();
				let preciseTotal = invoice.total.toFixed(2);
				let total = preciseTotal.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

				this.setState({
					createdAtDateMonth,
					createdAtDateDay,
					createdAtDateYear,
					paymentDueDateMonth,
					paymentDueDateDay,
					paymentDueDateYear,
					invoice,
					clientAddress: invoice.clientAddress,
					clientEmail: invoice.clientEmail,
					clientName: invoice.clientName,
					description: invoice.description,
					id: invoice.id,
					items: invoice.items,
					paymentTerms: invoice.paymentTerms,
					senderAddress: invoice.senderAddress,
					status: invoice.status,
					total
				})
            }
            return null;
        })

    }

	render() {
		return (
			<div className="view-invoice-outside-div">
				<Navbar />
				{this.context.state.darkMode === true ? (
					<div className="view-invoice-outside-container-div-dark-mode">
                        test text
					</div>
				) : (
					<div className="view-invoice-outside-container-div">
						<div className='view-invoice-inside-container-div'>
							<span className='go-back-span' onClick={this.handleRedirect}><img src={LeftArrowIcon} alt='left arrow' className='left-arrow-icon' /> Go back</span>
							
							<div className='view-invoices-option-bar'>
								<div className='view-invoices-option-bar-left-side'>
									<span>Status </span>
										{this.state.invoice.status === 'draft' ? <div className='draft-status-div'><span className='status-span-draft'><div className='draft-ball-div' />{this.state.invoice.status}</span></div>: null }
										{this.state.invoice.status === 'pending' ? <div className='pending-status-div'><span className='status-span-pending'><div className='pending-ball-div' />{this.state.invoice.status}</span></div>: null }
										{this.state.invoice.status === 'paid' ? <div className='paid-status-div'><span className='status-span-paid'><div className='paid-ball-div' />{this.state.invoice.status}</span></div> : null }
								</div>

								<div className='view-invoices-option-bar-right-side'>
									<div className='edit-button'>Edit</div>
									<div className='delete-button'>Delete</div>
									{this.state.invoice.status === 'draft' ? <div className='mark-pending-button'>Mark as Pending</div>: null }
									{this.state.invoice.status === 'pending' ? <div className='mark-paid-button'>Mark as Paid</div>: null }
								</div>
							</div>

							<div className='view-invoices-info-div'>
								<div className='view-invoices-info-top-div'>
									<div className='view-invoices-info-top-left-div'>
										<span className='view-invoices-info-top-left-div-id-span'>#<span className='black-span'>{this.state.id}</span></span>
										<span className='view-invoices-info-top-left-div-description-span'>{this.state.description}</span>
									</div>

									<div className='view-invoices-info-top-right-div'>
										<span>{this.state.senderAddress['street']}</span>
										<span>{this.state.senderAddress['city']}</span>
										<span>{this.state.senderAddress['postCode']}</span>
										<span>{this.state.senderAddress['country']}</span>
									</div>
								</div>

								<div className='view-invoices-info-middle-container-div'>
									<div className='view-invoices-info-middle-container-left-div'>
										Invoice Date
										{this.state.createdAtDateDay} {this.state.months[this.state.createdAtDateMonth]} {this.state.createdAtDateYear}

										Payment Due
										{this.state.paymentDueDateDay} {this.state.months[this.state.paymentDueDateMonth]} {this.state.paymentDueDateYear}
									</div>

									<div className='view-invoices-info-middle-container-center-div'>
										Bill To
										{this.state.clientName}

										{this.state.clientAddress['street']}
										{this.state.clientAddress['city']}
										{this.state.clientAddress['postCode']}
										{this.state.clientAddress['country']}
									</div>

									<div className='view-invoices-info-middle-container-right-div'>
										Sent to
										{this.state.clientEmail}
									</div>
								</div>

								<div className='view-invoices-info-bottom-container-div'>

								</div>
		                            <div className=''>
									{this.state.items.length > 0 ? 
										<div>
											Item Name
											QTY.
											Price
											Total

											{this.state.items.map(item => (
												<ItemCard
													key={item['quantity'] + item['price']}
													item={item}
													// colorType='dark'
												/>
											))}
								
											Amount Due
											£ {this.state.total}
										</div>

										:
											null
									}
									</div>
							{/* items: Array(2)
							0: {name: "Banner Design", quantity: 1, price: 156, total: 156}
							1: {name: "Email Design", quantity: 2, price: 200, total: 400} */}
							{/* 
							paymentTerms: 30
							total: 556 */}
							</div>
						</div>
						

					</div>
				)}
			</div>
		);
	}
}

ViewInvoice.contextType = AppContext;

export default ViewInvoice;
