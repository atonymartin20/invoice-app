import React from 'react';
import { AppContext } from '../context/appContext.js';

import Navbar from '../navbar';
import '../../css/viewInvoice.css';
import LeftArrowIcon from '../../assets/icon-arrow-left.svg';
import ItemCard from './itemCard.js';
import EditInvoice from '../editInvoice';

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
		openEditPage: false,
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

	openEditInvoice = (event) => {
		event.preventDefault();
		this.context.switchToGrayMode();
		this.setState({
			openEditPage: true,
		})
	}

	closeEditInvoice = (event) => {
		event.preventDefault();
		this.context.closeGrayMode();
		this.setState({
			openEditPage: false,
		})
	}

	render() {
		return (
			<div className="view-invoice-outside-div">
				<Navbar />
				{this.state.openEditPage === true ? <EditInvoice closeEditInvoice={this.closeEditInvoice} id={this.state.id} /> : null}
				{this.context.state.darkMode === true ? (
					<div className="view-invoice-outside-container-div-dark-mode">
						<div className='view-invoice-inside-container-div'>
							<span className='go-back-span-dark-mode' onClick={this.handleRedirect}><img src={LeftArrowIcon} alt='left arrow' className='left-arrow-icon' /> Go back</span>
							
							<div className='view-invoices-option-bar-dark-mode'>
								<div className='view-invoices-option-bar-left-side-dark-mode'>
									<span>Status </span>
										{this.state.invoice.status === 'draft' ? <div className='draft-status-div-dark-mode'><span className='status-span-draft-dark-mode'><div className='draft-ball-div-dark-mode' />{this.state.invoice.status}</span></div>: null }
										{this.state.invoice.status === 'pending' ? <div className='pending-status-div'><span className='status-span-pending'><div className='pending-ball-div' />{this.state.invoice.status}</span></div>: null }
										{this.state.invoice.status === 'paid' ? <div className='paid-status-div'><span className='status-span-paid'><div className='paid-ball-div' />{this.state.invoice.status}</span></div> : null }
								</div>

								<div className='view-invoices-option-bar-right-side'>
									<div className='edit-button-dark-mode' onClick={this.openEditInvoice}>Edit</div>
									<div className='delete-button'>Delete</div>
									{this.state.invoice.status === 'draft' ? <div className='mark-pending-button'>Mark as Pending</div>: null }
									{this.state.invoice.status === 'pending' ? <div className='mark-paid-button'>Mark as Paid</div>: null }
								</div>
							</div>

							<div className='view-invoices-info-div-dark-mode'>
								<div className='view-invoices-info-top-div'>
									<div className='view-invoices-info-top-left-div'>
										<span className='view-invoices-info-top-left-div-id-span'>#<span className='white-span'>{this.state.id}</span></span>
										<span className='view-invoices-info-top-left-div-description-span-dark-mode'>{this.state.description}</span>
									</div>

									<div className='view-invoices-info-top-right-div-dark-mode'>
										<span>{this.state.senderAddress['street']}</span>
										<span>{this.state.senderAddress['city']}</span>
										<span>{this.state.senderAddress['postCode']}</span>
										<span>{this.state.senderAddress['country']}</span>
									</div>
								</div>

								<div className='view-invoices-info-middle-container-div'>
									<div className='view-invoices-info-middle-container-left-div'>
										<div className='view-invoices-info-middle-container-left-spacing-div-dark-mode'>
											<span>Invoice Date</span>
											<span className='view-invoices-date-span'>{this.state.createdAtDateDay} {this.state.months[this.state.createdAtDateMonth]} {this.state.createdAtDateYear}</span>
										</div>

										<div className='view-invoices-info-middle-container-left-spacing-div-dark-mode'>
											<span>Payment Due</span>
											<span className='view-invoices-date-span'>{this.state.paymentDueDateDay} {this.state.months[this.state.paymentDueDateMonth]} {this.state.paymentDueDateYear}</span>
										</div>
									</div>

									<div className='view-invoices-info-middle-container-center-div-dark-mode'>
										<span>Bill To</span>
										<span className='view-invoices-info-middle-container-center-div-client-name-span'>{this.state.clientName}</span>

										<span className='view-invoices-info-middle-container-center-div-address-span'>{this.state.clientAddress['street']}</span>
										<span className='view-invoices-info-middle-container-center-div-address-span'>{this.state.clientAddress['city']}</span>
										<span className='view-invoices-info-middle-container-center-div-address-span'>{this.state.clientAddress['postCode']}</span>
										<span className='view-invoices-info-middle-container-center-div-address-span'>{this.state.clientAddress['country']}</span>
									</div>

									<div className='view-invoices-info-middle-container-right-div-dark-mode'>
										<span>Sent to</span>
										<span className='view-invoices-info-middle-container-right-div-client-email-span'>{this.state.clientEmail}</span>
									</div>
								</div>

								<div className='view-invoices-info-bottom-outside-div-dark-mode'>
									{this.state.items.length > 0 ? 
										<div className='view-invoices-info-bottom-container-div'>
											<div className='view-invoices-info-bottom-container-labels-div-dark-mode'>
												<span className='view-invoices-info-bottom-container-labels-item-name-span'>Item Name</span>
												<span className='view-invoices-info-bottom-container-labels-qty-span'>QTY.</span>
												<span className='view-invoices-info-bottom-container-labels-price-span'>Price</span>
												<span className='view-invoices-info-bottom-container-labels-total-span'>Total</span>
											</div>


											{this.state.items.map(item => (
												<ItemCard
													key={item['quantity'] + item['price']}
													item={item}
													colorType='dark'
												/>
											))}
								
											<div className='view-invoices-info-bottom-container-total-div-dark-mode'>
												<span>Amount Due</span>
												<span className='view-invoices-info-bottom-container-total-span'>£ {this.state.total}</span>
											</div>
										</div>

										:
											null
									}
								</div>
							</div>
						</div>
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
									<div className='edit-button' onClick={this.openEditInvoice}>Edit</div>
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
										<div className='view-invoices-info-middle-container-left-spacing-div'>
											<span>Invoice Date</span>
											<span className='view-invoices-date-span'>{this.state.createdAtDateDay} {this.state.months[this.state.createdAtDateMonth]} {this.state.createdAtDateYear}</span>
										</div>

										<div className='view-invoices-info-middle-container-left-spacing-div'>
											<span>Payment Due</span>
											<span className='view-invoices-date-span'>{this.state.paymentDueDateDay} {this.state.months[this.state.paymentDueDateMonth]} {this.state.paymentDueDateYear}</span>
										</div>
									</div>

									<div className='view-invoices-info-middle-container-center-div'>
										<span>Bill To</span>
										<span className='view-invoices-info-middle-container-center-div-client-name-span'>{this.state.clientName}</span>

										<span className='view-invoices-info-middle-container-center-div-address-span'>{this.state.clientAddress['street']}</span>
										<span className='view-invoices-info-middle-container-center-div-address-span'>{this.state.clientAddress['city']}</span>
										<span className='view-invoices-info-middle-container-center-div-address-span'>{this.state.clientAddress['postCode']}</span>
										<span className='view-invoices-info-middle-container-center-div-address-span'>{this.state.clientAddress['country']}</span>
									</div>

									<div className='view-invoices-info-middle-container-right-div'>
										<span>Sent to</span>
										<span className='view-invoices-info-middle-container-right-div-client-email-span'>{this.state.clientEmail}</span>
									</div>
								</div>

								<div className='view-invoices-info-bottom-outside-div'>
									{this.state.items.length > 0 ? 
										<div className='view-invoices-info-bottom-container-div'>
											<div className='view-invoices-info-bottom-container-labels-div'>
												<span className='view-invoices-info-bottom-container-labels-item-name-span'>Item Name</span>
												<span className='view-invoices-info-bottom-container-labels-qty-span'>QTY.</span>
												<span className='view-invoices-info-bottom-container-labels-price-span'>Price</span>
												<span className='view-invoices-info-bottom-container-labels-total-span'>Total</span>
											</div>


											{this.state.items.map(item => (
												<ItemCard
													key={item['quantity'] + item['price']}
													item={item}
													colorType='light'
												/>
											))}
								
											<div className='view-invoices-info-bottom-container-total-div'>
												<span>Amount Due</span>
												<span className='view-invoices-info-bottom-container-total-span'>£ {this.state.total}</span>
											</div>
										</div>

									:
										null
									}
								</div>
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