import React, { Component } from 'react';

export const AppContext = React.createContext();

export default class AppProvider extends Component {
	state = {
		darkMode: false,
		grayMode: false,
		invoiceCount: 0,
		draftInvoiceCount: 0,
		paidInvoiceCount: 0,
		pendingInvoiceCount: 0,
		draftInvoices: [],
		paidInvoices: [],
		pendingInvoices: [],
		invoices: [
			{
				id: 'RT3080',
				createdAt: '2021-08-18',
				paymentDue: '2021-08-19',
				description: 'Re-branding',
				paymentTerms: 1,
				clientName: 'Jensen Huang',
				clientEmail: 'jensenh@mail.com',
				status: 'paid',
				senderAddress: {
					street: '19 Union Terrace',
					city: 'London',
					postCode: 'E1 3EZ',
					country: 'United Kingdom',
				},
				clientAddress: {
					street: '106 Kendell Street',
					city: 'Sharrington',
					postCode: 'NR24 5WQ',
					country: 'United Kingdom',
				},
				items: [
					{
						name: 'Brand Guidelines',
						quantity: 1,
						price: 1800.9,
						total: 1800.9,
					},
				],
				total: 1800.9,
			},
			{
				id: 'XM9141',
				createdAt: '2021-08-21',
				paymentDue: '2021-09-20',
				description: 'Graphic Design',
				paymentTerms: 30,
				clientName: 'Alex Grim',
				clientEmail: 'alexgrim@mail.com',
				status: 'pending',
				senderAddress: {
					street: '19 Union Terrace',
					city: 'London',
					postCode: 'E1 3EZ',
					country: 'United Kingdom',
				},
				clientAddress: {
					street: '84 Church Way',
					city: 'Bradford',
					postCode: 'BD1 9PB',
					country: 'United Kingdom',
				},
				items: [
					{
						name: 'Banner Design',
						quantity: 1,
						price: 156.0,
						total: 156.0,
					},
					{
						name: 'Email Design',
						quantity: 2,
						price: 200.0,
						total: 400.0,
					},
				],
				total: 556.0,
			},
			{
				id: 'RG0314',
				createdAt: '2021-09-24',
				paymentDue: '2021-10-01',
				description: 'Website Redesign',
				paymentTerms: 7,
				clientName: 'John Morrison',
				clientEmail: 'jm@myco.com',
				status: 'paid',
				senderAddress: {
					street: '19 Union Terrace',
					city: 'London',
					postCode: 'E1 3EZ',
					country: 'United Kingdom',
				},
				clientAddress: {
					street: '79 Dover Road',
					city: 'Westhall',
					postCode: 'IP19 3PF',
					country: 'United Kingdom',
				},
				items: [
					{
						name: 'Website Redesign',
						quantity: 1,
						price: 14002.33,
						total: 14002.33,
					},
				],
				total: 14002.33,
			},
			{
				id: 'RT2080',
				createdAt: '2021-10-11',
				paymentDue: '2021-10-12',
				description: 'Logo Concept',
				paymentTerms: 1,
				clientName: 'Alysa Werner',
				clientEmail: 'alysa@email.co.uk',
				status: 'pending',
				senderAddress: {
					street: '19 Union Terrace',
					city: 'London',
					postCode: 'E1 3EZ',
					country: 'United Kingdom',
				},
				clientAddress: {
					street: '63 Warwick Road',
					city: 'Carlisle',
					postCode: 'CA20 2TG',
					country: 'United Kingdom',
				},
				items: [
					{
						name: 'Logo Sketches',
						quantity: 1,
						price: 102.04,
						total: 102.04,
					},
				],
				total: 102.04,
			},
			{
				id: 'AA1449',
				createdAt: '2021-10-7',
				paymentDue: '2021-10-14',
				description: 'Re-branding',
				paymentTerms: 7,
				clientName: 'Mellisa Clarke',
				clientEmail: 'mellisa.clarke@example.com',
				status: 'pending',
				senderAddress: {
					street: '19 Union Terrace',
					city: 'London',
					postCode: 'E1 3EZ',
					country: 'United Kingdom',
				},
				clientAddress: {
					street: '46 Abbey Row',
					city: 'Cambridge',
					postCode: 'CB5 6EG',
					country: 'United Kingdom',
				},
				items: [
					{
						name: 'New Logo',
						quantity: 1,
						price: 1532.33,
						total: 1532.33,
					},
					{
						name: 'Brand Guidelines',
						quantity: 1,
						price: 2500.0,
						total: 2500.0,
					},
				],
				total: 4032.33,
			},
			{
				id: 'TY9141',
				createdAt: '2021-10-01',
				paymentDue: '2021-10-31',
				description: 'Landing Page Design',
				paymentTerms: 30,
				clientName: 'Thomas Wayne',
				clientEmail: 'thomas@dc.com',
				status: 'pending',
				senderAddress: {
					street: '19 Union Terrace',
					city: 'London',
					postCode: 'E1 3EZ',
					country: 'United Kingdom',
				},
				clientAddress: {
					street: '3964  Queens Lane',
					city: 'Gotham',
					postCode: '60457',
					country: 'United States of America',
				},
				items: [
					{
						name: 'Web Design',
						quantity: 1,
						price: 6155.91,
						total: 6155.91,
					},
				],
				total: 6155.91,
			},
			{
				id: 'FV2353',
				createdAt: '2021-11-05',
				paymentDue: '2021-11-12',
				description: 'Logo Re-design',
				paymentTerms: 7,
				clientName: 'Anita Wainwright',
				clientEmail: '',
				status: 'draft',
				senderAddress: {
					street: '19 Union Terrace',
					city: 'London',
					postCode: 'E1 3EZ',
					country: 'United Kingdom',
				},
				clientAddress: {
					street: '',
					city: '',
					postCode: '',
					country: '',
				},
				items: [
					{
						name: 'Logo Re-design',
						quantity: 1,
						price: 3102.04,
						total: 3102.04,
					},
				],
				total: 3102.04,
			},
		],
	};

	render() {
		return (
			<AppContext.Provider
				value={{
					state: this.state,
					// Functions
					switchToDarkMode: () => {
						this.setState({
							darkMode: true,
						});
					},
					switchToLightMode: () => {
						this.setState({
							darkMode: false,
						});
					},
					switchToGrayMode: () => {
						this.setState({
							grayMode: true,
						})
					},
					closeGrayMode: () => {
						this.setState({
							grayMode: false,
						})
					},
					setInvoiceCount: (newInvoiceCount) => {
						this.setState({
							invoiceCount: newInvoiceCount
						})
					},
					setDraftInvoiceCount: (newDraftInvoiceCount) => {
						this.setState({
							draftInvoiceCount: newDraftInvoiceCount
						})
					},
					setPaidInvoiceCount: (newPaidInvoiceCount) => {
						this.setState({
							paidInvoiceCount: newPaidInvoiceCount
						})
					},
					setPendingInvoiceCount: (newPendingInvoiceCount) => {
						this.setState({
							pendingInvoiceCount: newPendingInvoiceCount
						})
					},
					grabDraftInvoices: (newDraftInvoices) => {
						this.setState({
							draftInvoices: newDraftInvoices
						})
					},
					grabPaidInvoices: (newPaidInvoices) => {
						this.setState({
							paidInvoices: newPaidInvoices
						})
					},
					grabPendingInvoices: (newPendingInvoices) => {
						this.setState({
							pendingInvoices: newPendingInvoices
						})
					},
					updateInvoices: (newInvoices) => {
						this.setState({
							invoices: newInvoices
						})
					},
					updateDraftInvoices: (newDraftInvoices) => {
						this.setState({
							draftInvoices: newDraftInvoices
						})
					},
					updatePaidInvoices: (newPaidInvoices) => {
						this.setState({
							paidInvoices: newPaidInvoices
						})
					},
					updatePendingInvoices: (newPendingInvoices) => {
						this.setState({
							pendingInvoices: newPendingInvoices
						})
					},
					updateInvoiceCount: (newInvoiceCount) => {
						this.setState({
							invoiceCount: newInvoiceCount
						})
					},
					updateDraftInvoiceCount: (newDraftInvoiceCount) => {
						this.setState({
							draftInvoiceCount: newDraftInvoiceCount
						})
					},
					updatePaidInvoiceCount: (newPaidInvoiceCount) => {
						this.setState({
							paidInvoiceCount: newPaidInvoiceCount
						})
					},
					updatePendingInvoiceCount: (newPendingInvoiceCount) => {
						this.setState({
							pendingInvoiceCount: newPendingInvoiceCount
						})
					},
					createInvoice: (newInvoice) => {
						let invoices = this.state.invoices;
						let invoiceStatus = newInvoice.status;
						invoices = invoices.concat(newInvoice);
						let invoiceCount = this.state.invoiceCount +1;

						if (invoiceStatus === 'draft') {
							let draftInvoices = this.state.draftInvoices;
							draftInvoices = draftInvoices.concat(newInvoice);
							let draftInvoiceCount = this.state.draftInvoiceCount +1;
							
							this.setState({
								invoices,
								draftInvoices,
								invoiceCount,
								draftInvoiceCount
							})
						}

						else {
							let pendingInvoices = this.state.pendingInvoices;
							pendingInvoices = pendingInvoices.concat(newInvoice)
							let pendingInvoiceCount = this.state.pendingInvoiceCount +1;

							this.setState({
								invoices,
								pendingInvoices,
								invoiceCount,
								pendingInvoiceCount,
							})
						}
					},
					deleteInvoice: (id) => {
						let invoices = this.state.invoices;
						let invoiceCount = this.state.invoiceCount - 1;
						let position = null;
						let status = '';

						invoices.map((invoice, index) => {
							if(invoice.id === id) {
								position = index;
								status = invoice.status;
							}
							return null;
						})
						invoices.splice(position, 1);
					
						if (status === 'draft') {
							let draftInvoiceCount = this.state.draftInvoiceCount - 1;
							let draftPosition = null;
							let draftInvoices = this.state.draftInvoices;

							draftInvoices.map((invoice, index) => {
								if(invoice.id === id) {
									draftPosition = index;
								}
								return null;
							})
							draftInvoices.splice(draftPosition, 1);

							this.setState({
								draftInvoices,
								draftInvoiceCount,
							})
						}

						if (status === 'pending') {
							let pendingInvoiceCount = this.state.pendingInvoiceCount - 1;
							let pendingPosition = null;
							let pendingInvoices = this.state.pendingInvoices;

							pendingInvoices.map((invoice, index) => {
								if(invoice.id === id) {
									pendingPosition = index;
								}
								return null;
							})
							pendingInvoices.splice(pendingPosition, 1);

							this.setState({
								pendingInvoices,
								pendingInvoiceCount,
							})
						}

						if (status === 'paid') {
							let paidInvoiceCount = this.state.paidInvoiceCount - 1;
							let paidPosition = null;
							let paidInvoices = this.state.paidInvoices;

							paidInvoices.map((invoice, index) => {
								if(invoice.id === id) {
									paidPosition = index;
								}
								return null;
							})
							paidInvoices.splice(paidPosition, 1);

							this.setState({
								paidInvoices,
								paidInvoiceCount,
							})
						}

                        this.setState({
							invoices,
							invoiceCount,
                        })
					},
					updateInvoice: (updatedInvoice) => {
						let invoices = this.state.invoices;
						let invoiceStatus = updatedInvoice.status;
						invoices.map((invoice, index) => {
							if (invoice.id === updatedInvoice.id) {
								invoices[index] = updatedInvoice
							}
							return null;
						})

						if (invoiceStatus === 'draft') {
							let draftInvoices = this.state.draftInvoices;

							draftInvoices.map((invoice) => {
								if (invoice.id === updatedInvoice.id) {
									invoice = updatedInvoice
								}
								return null;
							})

							this.setState({
								draftInvoices
							})
						}

						else if (invoiceStatus === 'paid') {
							let paidInvoices = this.state.paidInvoices;

							paidInvoices.map((invoice) => {
								if (invoice.id === updatedInvoice.id) {
									invoice = updatedInvoice
								}
								return null;
							})

							this.setState({
								paidInvoices
							})
						}

						else {
							let pendingInvoices = this.state.pendingInvoices;

							pendingInvoices.map((invoice) => {
								if (invoice.id === updatedInvoice.id) {
									invoice = updatedInvoice
								}
								return null;
							})

							this.setState({
								pendingInvoices
							})
						}
						this.setState({
							invoices,
						})
					}
				}}
			>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}
