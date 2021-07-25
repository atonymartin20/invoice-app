import React from 'react';
import { AppContext } from '../context/appContext.js';

import Navbar from '../navbar';
import '../../css/editInvoice.css';

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
		clientEmail: '',
		clientName: '',
		createdAt: '',
		description: '',
		id: '',
		items: {},
		paymentDue: '',
		paymentTerms: 0,
		senderAddress: {},
		status: '',
		total: 0,
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
					clientEmail: invoice.clientEmail,
					clientName: invoice.clientName,
					createdAt: invoice.createdAt,
					description: invoice.description,
					id: invoice.id,
					items: invoice.items,
					paymentDue: invoice.paymentDue,
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
									<input />
								</div>
								<div className='edit-invoice-bill-from-city-post-code-country-div'>
									<div className='edit-invoice-bill-from-city-div'>
										<span>City</span>
										<input />
									</div>

									<div className='edit-invoice-bill-from-post-code-div'>
										<span>Post Code</span>
										<input />
									</div>

									<div className='edit-invoice-bill-from-country-div'>
										<span>Country</span>
										<input />
									</div>
								</div>
							</div>

							<div className='edit-invoice-bill-to-div'>

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