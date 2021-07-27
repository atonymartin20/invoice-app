import React from 'react';
import { AppContext } from '../context/appContext.js';

import Navbar from '../navbar';
import '../../css/editInvoice.css';
import DownArrowIcon from '../../assets/icon-arrow-down.svg';
import EditItemCard from './editItemCard.js';

class EditInvoice extends React.Component {
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
		clientAddressCity: '',
		clientAddressCountry: '',
		clientAddressPostCode: '',
		clientAddressStreet: '',
		clientEmail: '',
		clientName: '',
		createdAt: '',
		description: '',
		id: '',
		items: {},
		paymentDue: '',
		paymentTerms: 0,
		senderAddress: {},
		senderAddressCity: '',
		senderAddressCountry: '',
		senderAddressPostCode: '',
		senderAddressStreet: '',
		status: '',
		total: 0,
		showOptions: false,
	};

    componentDidMount() {
        this.context.state.invoices.map((invoice, index) => {
            if(invoice.id === this.props.id) {
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
					clientAddressCity: invoice.clientAddress['city'],
					clientAddressCountry: invoice.clientAddress['country'],
					clientAddressPostCode: invoice.clientAddress['postCode'],
					clientAddressStreet: invoice.clientAddress['street'],
					clientEmail: invoice.clientEmail,
					clientName: invoice.clientName,
					createdAt: invoice.createdAt,
					description: invoice.description,
					id: invoice.id,
					items: invoice.items,
					paymentDue: invoice.paymentDue,
					paymentTerms: invoice.paymentTerms,
					senderAddress: invoice.senderAddress,
					senderAddressCity: invoice.senderAddress['city'],
					senderAddressCountry: invoice.senderAddress['country'],
					senderAddressPostCode: invoice.senderAddress['postCode'],
					senderAddressStreet: invoice.senderAddress['street'],
					status: invoice.status,
					total
				})
            }
            return null;
        })
    }

	flipOptions = (event) => {
		event.preventDefault();
		this.setState({
			showOptions: !this.state.showOptions
		})
	}

	inputHandler = (event) => {
		event.preventDefault();
		const target = event.target;
		this.setState({
			[target.name]: target.value
		});
	  }

	updatePaymentTerms = (value) => {
		this.setState({
			paymentTerms: value,
			showOptions: !this.state.showOptions
		})
	}

	render() {
		console.log(this.state)
		if (this.context.state.darkMode === true) {
			return (
				<div className="edit-invoice-outside-div">
					<div className='edit-invoice-container-div-dark-mode'>
						<Navbar />
						<div className='edit-invoice-inside-container-div'>
	
						</div>
					</div>
				</div>
			);
		}

		else {
			return (
				<div className="edit-invoice-outside-div">
					<div className='edit-invoice-container-div'>
						<Navbar />
						<div className='edit-invoice-inside-container-div'>
							<span className='edit-invoice-id-span'>
								Edit <span className='edit-invoice-id-span-gray'>#</span>{this.state.id}
							</span>

							<div className='edit-invoice-bill-from-div'>
								<h5>Bill From</h5>
								<div className='edit-invoice-bill-from-street-address-div'>
									<span>Street Address</span>
									<input type='text' id='senderAddressStreet' name='senderAddressStreet' value={this.state.senderAddressStreet} onChange={this.inputHandler} />
								</div>
								<div className='edit-invoice-bill-from-city-post-code-country-div'>
									<div className='edit-invoice-bill-from-city-div'>
										<span>City</span>
										<input type='text' id='senderAddressCity' name='senderAddressCity' value={this.state.senderAddressCity} onChange={this.inputHandler} />
									</div>

									<div className='edit-invoice-bill-from-post-code-div'>
										<span>Post Code</span>
										<input type='text' id='senderAddressPostCode' name='senderAddressPostCode' value={this.state.senderAddressPostCode} onChange={this.inputHandler}/>
									</div>

									<div className='edit-invoice-bill-from-country-div'>
										<span>Country</span>
										<input type='text' id='senderAddressCountry' name='senderAddressCountry' value={this.state.senderAddressCountry} onChange={this.inputHandler} />
									</div>
								</div>
							</div>

							<div className='edit-invoice-bill-to-div'>
								<h5>Bill To</h5>
								<div className='edit-invoice-bill-to-client-name-div'>
									<span>Client's Name</span>
									<input type='text' id='clientName' name='clientName' value={this.state.clientName} onChange={this.inputHandler} />
								</div>

								<div className='edit-invoice-bill-to-client-email-div'>
									<span>Client's Email</span>
									<input type='text' id='clientEmail' name='clientEmail' value={this.state.clientEmail} onChange={this.inputHandler} />
								</div>

								<div className='edit-invoice-bill-to-street-address-div'>
									<span>Street Address</span>
									<input type='text' id='clientAddressStreet' name='clientAddressStreet' value={this.state.clientAddressStreet} onChange={this.inputHandler} />
								</div>

								<div className='edit-invoice-bill-to-city-post-code-country-div'>
									<div className='edit-invoice-bill-to-city-div'>
										<span>City</span>
										<input type='text' id='clientAddressCity' name='clientAddressCity' value={this.state.clientAddressCity} onChange={this.inputHandler} />
									</div>

									<div className='edit-invoice-bill-to-post-code-div'>
										<span>Post Code</span>
										<input type='text' id='clientAddressPostCode' name='clientAddressPostCode' value={this.state.clientAddressPostCode} onChange={this.inputHandler}/>
									</div>

									<div className='edit-invoice-bill-to-country-div'>
										<span>Country</span>
										<input type='text' id='clientAddressCountry' name='clientAddressCountry' value={this.state.clientAddressCountry} onChange={this.inputHandler} />
									</div>
								</div>
							</div>

							<div className='edit-invoice-invoice-date-payment-terms-div'>
								<div className='edit-invoice-invoice-date-div'>
									<span>Invoice Date</span>
									<input type='text' id='createdAt' name='createdAt' placeholder='YYYY-MM-DD' value={this.state.createdAt} onChange={this.inputHandler} />
								</div>

								<div className='edit-invoice-payment-terms-div'>
									<span>Payment Terms</span>
									{this.state.showOptions === true ? 
										<div className='edit-invoice-payment-terms-custom-select-container-div'>
											<div className='edit-invoice-payment-terms-custom-select' onClick={this.flipOptions}>
												{this.state.paymentTerms > 1 ? 
													<span>Net {this.state.paymentTerms} Days</span>
												:
													<span>Net {this.state.paymentTerms} Day</span>
												}
												<img src={DownArrowIcon} alt='up-arrow' className='down-arrow-icon-reversed' />
											</div>

											<div className='edit-invoice-payment-terms-custom-select-option-container-div'>
												<span onClick={() => this.updatePaymentTerms(1)}>Net 1 Day</span>
												<span onClick={() => this.updatePaymentTerms(7)}>Net 7 Days</span>
												<span onClick={() => this.updatePaymentTerms(14)}>Net 14 Days</span>
												<span onClick={() => this.updatePaymentTerms(30)}>Net 30 Days</span>
											</div>
										</div>
									:
										<div className='edit-invoice-payment-terms-custom-select' onClick={this.flipOptions}>
											{this.state.paymentTerms > 1 ? 
												<span>Net {this.state.paymentTerms} Days</span>
											:
												<span>Net {this.state.paymentTerms} Day</span>
											}
											<img src={DownArrowIcon} alt='down-arrow' className='down-arrow-icon' />
										</div>
									}
								</div>
							</div>

							<div className='edit-invoice-project-description-div'>
								<span>Project Description</span>
								<input type='text' id='description' name='description' value={this.state.description} onChange={this.inputHandler} />
							</div>
							
							{this.state.items.length > 0 ? 
								<div className='edit-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='edit-invoice-item-list-labels-div'>
										<span className='edit-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='edit-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='edit-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='edit-invoice-item-list-labels-div-total-span'>Total</span>
									</div>
									{this.state.items.map(item => (
										<EditItemCard
											key={item['quantity'] + item['price']}
											item={item}
											colorType='light'
										/>
									))}
									<div className='edit-invoice-add-new-item-div'>
										+ Add New Item	
									</div>
								</div>
							:
								<div className='edit-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='edit-invoice-item-list-labels-div'>
										<span className='edit-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='edit-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='edit-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='edit-invoice-item-list-labels-div-total-span'>Total</span>
									</div>
									<div className='edit-invoice-add-new-item-div'>
										<span>+ Add New Item</span>	
									</div>
								</div>				
							}
							<div className='edit-invoice-bottom-buttons-div'>
								<div className='edit-invoice-bottom-button-cancel-div'>
									<span>Cancel</span>
								</div>
								<div className='edit-invoice-bottom-button-save-div'>
									<span>Save Changes</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
}

EditInvoice.contextType = AppContext;

export default EditInvoice;