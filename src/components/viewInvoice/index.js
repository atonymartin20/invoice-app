import React from 'react';
import { AppContext } from '../context/appContext.js';
import { Redirect } from 'react-router-dom';

import Navbar from '../navbar';
import '../../css/viewInvoice.css';
import LeftArrowIcon from '../../assets/icon-arrow-left.svg';
import ItemCard from './itemCard.js';
import EditInvoice from '../editInvoice';
import DeleteModal from '../deleteModal';

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
		createdAt: '',
		clientAddress: {},
		clientAddressStreet: '',
		clientAddressCity: '',
		clientAddressPostCode: '',
		clientAddressCountry: '',
		clientEmail: '',
		clientName: '',
		description: '',
		id: '',
		items: {},
		paymentTerms: 0,
		senderAddress: {},
		senderAddressStreet: '',
		senderAddressCity: '',
		senderAddressPostCode: '',
		senderAddressCountry: '',
		status: '',
		fancyTotal: 0,
		total: 0,
		openEditPage: false,
		showOptions: false,
		item0name: '',
		item0quantity: 0,
		item0price: 0,
		item0total: 0,
		item1name: '',
		item1quantity: 0,
		item1price: 0,
		item1total: 0,
		item2name: '',
		item2quantity: 0,
		item2price: 0,
		item2total: 0,
		item3name: '',
		item3quantity: 0,
		item3price: 0,
		item3total: 0,
		item4name: '',
		item4quantity: 0,
		item4price: 0,
		item4total: 0,
		redirect: false,
		openDeleteModal: false,
	};

	componentDidMount = () => {
		let viewInvoice = this.context.state.invoices;
		viewInvoice.map((invoice, index) => {
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
				let fancyTotal = preciseTotal.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

				if(invoice.items.length > 0) {
					if(invoice.items.length === 1) {
						let item0name = invoice.items[0].name
						let item0quantity = invoice.items[0].quantity
						let item0price = invoice.items[0].price
						let item0total = invoice.items[0].total

						this.setState({
							createdAtDateMonth,
							createdAtDateDay,
							createdAtDateYear,
							paymentDueDateMonth,
							paymentDueDateDay,
							paymentDueDateYear,
							invoice,
							createdAt: invoice.createdAt,
							clientAddress: invoice.clientAddress,
							clientAddressStreet: invoice.clientAddress.street,
							clientAddressCity: invoice.clientAddress.city,
							clientAddressPostCode: invoice.clientAddress.postCode,
							clientAddressCountry: invoice.clientAddress.country,
							clientEmail: invoice.clientEmail,
							clientName: invoice.clientName,
							description: invoice.description,
							id: invoice.id,
							items: invoice.items,
							originalInvoice: invoice,
							paymentTerms: invoice.paymentTerms,
							senderAddress: invoice.senderAddress,
							senderAddressStreet: invoice.senderAddress.street,
							senderAddressCity: invoice.senderAddress.city,
							senderAddressPostCode: invoice.senderAddress.postCode,
							senderAddressCountry: invoice.senderAddress.country,
							status: invoice.status,
							fancyTotal,
							item0name,
							item0quantity,
							item0price,
							item0total,
						})
					}

					if (invoice.items.length === 2) {
						let item0name = invoice.items[0].name
						let item0quantity = invoice.items[0].quantity
						let item0price = invoice.items[0].price
						let item0total = invoice.items[0].total
						let item1name = invoice.items[1].name
						let item1quantity = invoice.items[1].quantity
						let item1price = invoice.items[1].price
						let item1total = invoice.items[1].total

						this.setState({
							createdAtDateMonth,
							createdAtDateDay,
							createdAtDateYear,
							paymentDueDateMonth,
							paymentDueDateDay,
							paymentDueDateYear,
							invoice,
							createdAt: invoice.createdAt,
							clientAddress: invoice.clientAddress,
							clientAddressStreet: invoice.clientAddress.street,
							clientAddressCity: invoice.clientAddress.city,
							clientAddressPostCode: invoice.clientAddress.postCode,
							clientAddressCountry: invoice.clientAddress.country,
							clientEmail: invoice.clientEmail,
							clientName: invoice.clientName,
							description: invoice.description,
							id: invoice.id,
							items: invoice.items,
							originalInvoice: invoice,
							paymentTerms: invoice.paymentTerms,
							senderAddress: invoice.senderAddress,
							senderAddressStreet: invoice.senderAddress.street,
							senderAddressCity: invoice.senderAddress.city,
							senderAddressPostCode: invoice.senderAddress.postCode,
							senderAddressCountry: invoice.senderAddress.country,
							status: invoice.status,
							fancyTotal,
							item0name,
							item0quantity,
							item0price,
							item0total,
							item1name,
							item1quantity,
							item1price,
							item1total,
						})
					}

					if (invoice.items.length === 3) {
						let item0name = invoice.items[0].name
						let item0quantity = invoice.items[0].quantity
						let item0price = invoice.items[0].price
						let item0total = invoice.items[0].total
						let item1name = invoice.items[1].name
						let item1quantity = invoice.items[1].quantity
						let item1price = invoice.items[1].price
						let item1total = invoice.items[1].total
						let item2name = invoice.items[2].name
						let item2quantity = invoice.items[2].quantity
						let item2price = invoice.items[2].price
						let item2total = invoice.items[2].total

						this.setState({
							createdAtDateMonth,
							createdAtDateDay,
							createdAtDateYear,
							paymentDueDateMonth,
							paymentDueDateDay,
							paymentDueDateYear,
							invoice,
							createdAt: invoice.createdAt,
							clientAddress: invoice.clientAddress,
							clientAddressStreet: invoice.clientAddress.street,
							clientAddressCity: invoice.clientAddress.city,
							clientAddressPostCode: invoice.clientAddress.postCode,
							clientAddressCountry: invoice.clientAddress.country,
							clientEmail: invoice.clientEmail,
							clientName: invoice.clientName,
							description: invoice.description,
							id: invoice.id,
							items: invoice.items,
							originalInvoice: invoice,
							paymentTerms: invoice.paymentTerms,
							senderAddress: invoice.senderAddress,
							senderAddressStreet: invoice.senderAddress.street,
							senderAddressCity: invoice.senderAddress.city,
							senderAddressPostCode: invoice.senderAddress.postCode,
							senderAddressCountry: invoice.senderAddress.country,
							status: invoice.status,
							fancyTotal,
							item0name,
							item0quantity,
							item0price,
							item0total,
							item1name,
							item1quantity,
							item1price,
							item1total,
							item2name,
							item2quantity,
							item2price,
							item2total,
						})
					}

					if (invoice.items.length === 4) {
						let item0name = invoice.items[0].name
						let item0quantity = invoice.items[0].quantity
						let item0price = invoice.items[0].price
						let item0total = invoice.items[0].total
						let item1name = invoice.items[1].name
						let item1quantity = invoice.items[1].quantity
						let item1price = invoice.items[1].price
						let item1total = invoice.items[1].total
						let item2name = invoice.items[2].name
						let item2quantity = invoice.items[2].quantity
						let item2price = invoice.items[2].price
						let item2total = invoice.items[2].total
						let item3name = invoice.items[3].name
						let item3quantity = invoice.items[3].quantity
						let item3price = invoice.items[3].price
						let item3total = invoice.items[3].total

						this.setState({
							createdAtDateMonth,
							createdAtDateDay,
							createdAtDateYear,
							paymentDueDateMonth,
							paymentDueDateDay,
							paymentDueDateYear,
							invoice,
							createdAt: invoice.createdAt,
							clientAddress: invoice.clientAddress,
							clientAddressStreet: invoice.clientAddress.street,
							clientAddressCity: invoice.clientAddress.city,
							clientAddressPostCode: invoice.clientAddress.postCode,
							clientAddressCountry: invoice.clientAddress.country,
							clientEmail: invoice.clientEmail,
							clientName: invoice.clientName,
							description: invoice.description,
							id: invoice.id,
							items: invoice.items,
							originalInvoice: invoice,
							paymentTerms: invoice.paymentTerms,
							senderAddress: invoice.senderAddress,
							senderAddressStreet: invoice.senderAddress.street,
							senderAddressCity: invoice.senderAddress.city,
							senderAddressPostCode: invoice.senderAddress.postCode,
							senderAddressCountry: invoice.senderAddress.country,
							status: invoice.status,
							fancyTotal,
							item0name,
							item0quantity,
							item0price,
							item0total,
							item1name,
							item1quantity,
							item1price,
							item1total,
							item2name,
							item2quantity,
							item2price,
							item2total,
							item3name,
							item3quantity,
							item3price,
							item3total,
						})
					}

					if (invoice.items.length === 5) {
						let item0name = invoice.items[0].name
						let item0quantity = invoice.items[0].quantity
						let item0price = invoice.items[0].price
						let item0total = invoice.items[0].total
						let item1name = invoice.items[1].name
						let item1quantity = invoice.items[1].quantity
						let item1price = invoice.items[1].price
						let item1total = invoice.items[1].total
						let item2name = invoice.items[2].name
						let item2quantity = invoice.items[2].quantity
						let item2price = invoice.items[2].price
						let item2total = invoice.items[2].total
						let item3name = invoice.items[3].name
						let item3quantity = invoice.items[3].quantity
						let item3price = invoice.items[3].price
						let item3total = invoice.items[3].total
						let item4name = invoice.items[4].name
						let item4quantity = invoice.items[4].quantity
						let item4price = invoice.items[4].price
						let item4total = invoice.items[4].total

						this.setState({
							createdAtDateMonth,
							createdAtDateDay,
							createdAtDateYear,
							paymentDueDateMonth,
							paymentDueDateDay,
							paymentDueDateYear,
							invoice,
							createdAt: invoice.createdAt,
							clientAddress: invoice.clientAddress,
							clientAddressStreet: invoice.clientAddress.street,
							clientAddressCity: invoice.clientAddress.city,
							clientAddressPostCode: invoice.clientAddress.postCode,
							clientAddressCountry: invoice.clientAddress.country,
							clientEmail: invoice.clientEmail,
							clientName: invoice.clientName,
							description: invoice.description,
							id: invoice.id,
							items: invoice.items,
							originalInvoice: invoice,
							paymentTerms: invoice.paymentTerms,
							senderAddress: invoice.senderAddress,
							senderAddressStreet: invoice.senderAddress.street,
							senderAddressCity: invoice.senderAddress.city,
							senderAddressPostCode: invoice.senderAddress.postCode,
							senderAddressCountry: invoice.senderAddress.country,
							status: invoice.status,
							fancyTotal,
							item0name,
							item0quantity,
							item0price,
							item0total,
							item1name,
							item1quantity,
							item1price,
							item1total,
							item2name,
							item2quantity,
							item2price,
							item2total,
							item3name,
							item3quantity,
							item3price,
							item3total,
							item4name,
							item4quantity,
							item4price,
							item4total,
						})
					}
				}
				else {
					this.setState({
						createdAtDateMonth,
						createdAtDateDay,
						createdAtDateYear,
						paymentDueDateMonth,
						paymentDueDateDay,
						paymentDueDateYear,
						invoice,
						createdAt: invoice.createdAt,
						clientAddress: invoice.clientAddress,
						clientAddressStreet: invoice.clientAddress.street,
						clientAddressCity: invoice.clientAddress.city,
						clientAddressPostCode: invoice.clientAddress.postCode,
						clientAddressCountry: invoice.clientAddress.country,
						clientEmail: invoice.clientEmail,
						clientName: invoice.clientName,
						description: invoice.description,
						id: invoice.id,
						items: invoice.items,
						originalInvoice: invoice,
						paymentTerms: invoice.paymentTerms,
						senderAddress: invoice.senderAddress,
						senderAddressStreet: invoice.senderAddress.street,
						senderAddressCity: invoice.senderAddress.city,
						senderAddressPostCode: invoice.senderAddress.postCode,
						senderAddressCountry: invoice.senderAddress.country,
						status: invoice.status,
						fancyTotal,
					})
				}
            }
            return null;
        })
	}

	addItem = (event) => {
		event.preventDefault();
		let newItems = this.state.items;
		let newItem = {name: '', quantity: 0, price: 0, total: 0}
		let newItems2 = newItems.concat(newItem)

		this.setState({
			items: newItems2
		})
	}

	cancelUpdates = () => {
		let originalInvoice = this.state.originalInvoice
		this.context.closeGrayMode();

		let preciseTotal = originalInvoice.total.toFixed(2);
		let fancyTotal = preciseTotal.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

		if(originalInvoice.items.length > 0) {
			if (originalInvoice.items.length === 1) {
				let item0name = originalInvoice.items[0].name
				let item0quantity = originalInvoice.items[0].quantity
				let item0price = originalInvoice.items[0].price
				let item0total = originalInvoice.items[0].total

				this.setState({
					invoice: originalInvoice,
					clientAddress: originalInvoice.clientAddress,
					clientAddressStreet: originalInvoice.clientAddress.street,
					clientAddressCity: originalInvoice.clientAddress.city,
					clientAddressPostCode: originalInvoice.clientAddress.postCode,
					clientAddressCountry: originalInvoice.clientAddress.country,
					clientEmail: originalInvoice.clientEmail,
					clientName: originalInvoice.clientName,
					createdAt: originalInvoice.createdAt,
					description: originalInvoice.description,
					id: originalInvoice.id,
					items: originalInvoice.items,
					paymentTerms: originalInvoice.paymentTerms,
					senderAddress: originalInvoice.senderAddress,
					senderAddressStreet: originalInvoice.senderAddress.street,
					senderAddressCity: originalInvoice.senderAddress.city,
					senderAddressPostCode: originalInvoice.senderAddress.postCode,
					senderAddressCountry: originalInvoice.senderAddress.country,
					status: originalInvoice.status,
					fancyTotal,
					total: Number(originalInvoice.total).toFixed(2),
					openEditPage: false,
					item0name,
					item0quantity,
					item0price,
					item0total,
					item1name: '',
					item1quantity: 0,
					item1price: 0,
					item1total: 0,
					item2name: '',
					item2quantity: 0,
					item2price: 0,
					item2total: 0,
					item3name: '',
					item3quantity: 0,
					item3price: 0,
					item3total: 0,
					item4name: '',
					item4quantity: 0,
					item4price: 0,
					item4total: 0,
				})
			}

			if (originalInvoice.items.length === 2) {
				let item0name = originalInvoice.items[0].name
				let item0quantity = originalInvoice.items[0].quantity
				let item0price = originalInvoice.items[0].price
				let item0total = originalInvoice.items[0].total
				let item1name = originalInvoice.items[1].name
				let item1quantity = originalInvoice.items[1].quantity
				let item1price = originalInvoice.items[1].price
				let item1total = originalInvoice.items[1].total

				this.setState({
					invoice: originalInvoice,
					clientAddress: originalInvoice.clientAddress,
					clientAddressStreet: originalInvoice.clientAddress.street,
					clientAddressCity: originalInvoice.clientAddress.city,
					clientAddressPostCode: originalInvoice.clientAddress.postCode,
					clientAddressCountry: originalInvoice.clientAddress.country,
					clientEmail: originalInvoice.clientEmail,
					clientName: originalInvoice.clientName,
					createdAt: originalInvoice.createdAt,
					description: originalInvoice.description,
					id: originalInvoice.id,
					items: originalInvoice.items,
					paymentTerms: originalInvoice.paymentTerms,
					senderAddress: originalInvoice.senderAddress,
					senderAddressStreet: originalInvoice.senderAddress.street,
					senderAddressCity: originalInvoice.senderAddress.city,
					senderAddressPostCode: originalInvoice.senderAddress.postCode,
					senderAddressCountry: originalInvoice.senderAddress.country,
					status: originalInvoice.status,
					fancyTotal,
					total: Number(originalInvoice.total).toFixed(2),
					openEditPage: false,
					item0name,
					item0quantity,
					item0price,
					item0total,
					item1name,
					item1quantity,
					item1price,
					item1total,
					item2name: '',
					item2quantity: 0,
					item2price: 0,
					item2total: 0,
					item3name: '',
					item3quantity: 0,
					item3price: 0,
					item3total: 0,
					item4name: '',
					item4quantity: 0,
					item4price: 0,
					item4total: 0,
				})
			}

			if (originalInvoice.items.length === 3) {
				let item0name = originalInvoice.items[0].name
				let item0quantity = originalInvoice.items[0].quantity
				let item0price = originalInvoice.items[0].price
				let item0total = originalInvoice.items[0].total
				let item1name = originalInvoice.items[1].name
				let item1quantity = originalInvoice.items[1].quantity
				let item1price = originalInvoice.items[1].price
				let item1total = originalInvoice.items[1].total
				let item2name = originalInvoice.items[2].name
				let item2quantity = originalInvoice.items[2].quantity
				let item2price = originalInvoice.items[2].price
				let item2total = originalInvoice.items[2].total

				this.setState({
					invoice: originalInvoice,
					clientAddress: originalInvoice.clientAddress,
					clientAddressStreet: originalInvoice.clientAddress.street,
					clientAddressCity: originalInvoice.clientAddress.city,
					clientAddressPostCode: originalInvoice.clientAddress.postCode,
					clientAddressCountry: originalInvoice.clientAddress.country,
					clientEmail: originalInvoice.clientEmail,
					clientName: originalInvoice.clientName,
					createdAt: originalInvoice.createdAt,
					description: originalInvoice.description,
					id: originalInvoice.id,
					items: originalInvoice.items,
					paymentTerms: originalInvoice.paymentTerms,
					senderAddress: originalInvoice.senderAddress,
					senderAddressStreet: originalInvoice.senderAddress.street,
					senderAddressCity: originalInvoice.senderAddress.city,
					senderAddressPostCode: originalInvoice.senderAddress.postCode,
					senderAddressCountry: originalInvoice.senderAddress.country,
					status: originalInvoice.status,
					fancyTotal,
					total: Number(originalInvoice.total).toFixed(2),
					openEditPage: false,
					item0name,
					item0quantity,
					item0price,
					item0total,
					item1name,
					item1quantity,
					item1price,
					item1total,
					item2name,
					item2quantity,
					item2price,
					item2total,
					item3name: '',
					item3quantity: 0,
					item3price: 0,
					item3total: 0,
					item4name: '',
					item4quantity: 0,
					item4price: 0,
					item4total: 0,
				})
			}

			if (originalInvoice.items.length === 4) {
				let item0name = originalInvoice.items[0].name
				let item0quantity = originalInvoice.items[0].quantity
				let item0price = originalInvoice.items[0].price
				let item0total = originalInvoice.items[0].total
				let item1name = originalInvoice.items[1].name
				let item1quantity = originalInvoice.items[1].quantity
				let item1price = originalInvoice.items[1].price
				let item1total = originalInvoice.items[1].total
				let item2name = originalInvoice.items[2].name
				let item2quantity = originalInvoice.items[2].quantity
				let item2price = originalInvoice.items[2].price
				let item2total = originalInvoice.items[2].total
				let item3name = originalInvoice.items[3].name
				let item3quantity = originalInvoice.items[3].quantity
				let item3price = originalInvoice.items[3].price
				let item3total = originalInvoice.items[3].total

				this.setState({
					invoice: originalInvoice,
					clientAddress: originalInvoice.clientAddress,
					clientAddressStreet: originalInvoice.clientAddress.street,
					clientAddressCity: originalInvoice.clientAddress.city,
					clientAddressPostCode: originalInvoice.clientAddress.postCode,
					clientAddressCountry: originalInvoice.clientAddress.country,
					clientEmail: originalInvoice.clientEmail,
					clientName: originalInvoice.clientName,
					createdAt: originalInvoice.createdAt,
					description: originalInvoice.description,
					id: originalInvoice.id,
					items: originalInvoice.items,
					paymentTerms: originalInvoice.paymentTerms,
					senderAddress: originalInvoice.senderAddress,
					senderAddressStreet: originalInvoice.senderAddress.street,
					senderAddressCity: originalInvoice.senderAddress.city,
					senderAddressPostCode: originalInvoice.senderAddress.postCode,
					senderAddressCountry: originalInvoice.senderAddress.country,
					status: originalInvoice.status,
					fancyTotal,
					total: Number(originalInvoice.total).toFixed(2),
					openEditPage: false,
					item0name,
					item0quantity,
					item0price,
					item0total,
					item1name,
					item1quantity,
					item1price,
					item1total,
					item2name,
					item2quantity,
					item2price,
					item2total,
					item3name,
					item3quantity,
					item3price,
					item3total,
					item4name: '',
					item4quantity: 0,
					item4price: 0,
					item4total: 0,
				})
			}

			if (originalInvoice.items.length === 5) {
				let item0name = originalInvoice.items[0].name
				let item0quantity = originalInvoice.items[0].quantity
				let item0price = originalInvoice.items[0].price
				let item0total = originalInvoice.items[0].total
				let item1name = originalInvoice.items[1].name
				let item1quantity = originalInvoice.items[1].quantity
				let item1price = originalInvoice.items[1].price
				let item1total = originalInvoice.items[1].total
				let item2name = originalInvoice.items[2].name
				let item2quantity = originalInvoice.items[2].quantity
				let item2price = originalInvoice.items[2].price
				let item2total = originalInvoice.items[2].total
				let item3name = originalInvoice.items[3].name
				let item3quantity = originalInvoice.items[3].quantity
				let item3price = originalInvoice.items[3].price
				let item3total = originalInvoice.items[3].total
				let item4name = originalInvoice.items[4].name
				let item4quantity = originalInvoice.items[4].quantity
				let item4price = originalInvoice.items[4].price
				let item4total = originalInvoice.items[4].total

				this.setState({
					invoice: originalInvoice,
					clientAddress: originalInvoice.clientAddress,
					clientAddressStreet: originalInvoice.clientAddress.street,
					clientAddressCity: originalInvoice.clientAddress.city,
					clientAddressPostCode: originalInvoice.clientAddress.postCode,
					clientAddressCountry: originalInvoice.clientAddress.country,
					clientEmail: originalInvoice.clientEmail,
					clientName: originalInvoice.clientName,
					createdAt: originalInvoice.createdAt,
					description: originalInvoice.description,
					id: originalInvoice.id,
					items: originalInvoice.items,
					paymentTerms: originalInvoice.paymentTerms,
					senderAddress: originalInvoice.senderAddress,
					senderAddressStreet: originalInvoice.senderAddress.street,
					senderAddressCity: originalInvoice.senderAddress.city,
					senderAddressPostCode: originalInvoice.senderAddress.postCode,
					senderAddressCountry: originalInvoice.senderAddress.country,
					status: originalInvoice.status,
					fancyTotal,
					total: Number(originalInvoice.total).toFixed(2),
					openEditPage: false,
					item0name,
					item0quantity,
					item0price,
					item0total,
					item1name,
					item1quantity,
					item1price,
					item1total,
					item2name,
					item2quantity,
					item2price,
					item2total,
					item3name,
					item3quantity,
					item3price,
					item3total,
					item4name,
					item4quantity,
					item4price,
					item4total,
				})
			}
		}

		else {
			this.setState({
				invoice: originalInvoice,
				clientAddress: originalInvoice.clientAddress,
				clientAddressStreet: originalInvoice.clientAddress.street,
				clientAddressCity: originalInvoice.clientAddress.city,
				clientAddressPostCode: originalInvoice.clientAddress.postCode,
				clientAddressCountry: originalInvoice.clientAddress.country,
				clientEmail: originalInvoice.clientEmail,
				clientName: originalInvoice.clientName,
				createdAt: originalInvoice.createdAt,
				description: originalInvoice.description,
				id: originalInvoice.id,
				items: originalInvoice.items,
				paymentTerms: originalInvoice.paymentTerms,
				senderAddress: originalInvoice.senderAddress,
				senderAddressStreet: originalInvoice.senderAddress.street,
				senderAddressCity: originalInvoice.senderAddress.city,
				senderAddressPostCode: originalInvoice.senderAddress.postCode,
				senderAddressCountry: originalInvoice.senderAddress.country,
				status: originalInvoice.status,
				fancyTotal,
				total: Number(originalInvoice.total).toFixed(2),
				openEditPage: false,
			})
		}
	}

	closeDeleteModal = (event) => {
		event.preventDefault();
		this.context.closeGrayMode();
		this.setState({
			openDeleteModal: false,
		})
	}

	closeEditInvoice = () => {
		this.context.closeGrayMode();
		this.setState({
			openEditPage: false,
		})
	}

	deleteInvoice = (event) => {
		event.preventDefault();
		this.context.closeGrayMode();
		this.context.deleteItem(this.state.id);
		this.handleRedirect();
	}

	deleteItem = (position) => {
		let newItems = [];
		let newItemsPart1 = [];
		let newItemsPart2 = [];
		let itemsLength = this.state.items.length;

		this.state.items.map((item, index) => {
			if(index < position) {
				newItemsPart1 = newItemsPart1.concat(item)
			}
			if (index > position) {
				newItemsPart2 = newItemsPart2.concat(item)
			}
			return null;
		})

		newItems = newItemsPart1.concat(newItemsPart2)

		if(itemsLength === 5) {
			if (position === 0) {
				this.setState({
					item0name: this.state.item1name,
					item0quantity: this.state.item1quantity,
					item0price: this.state.item1price,
					item0total: this.state.item1total,
					item1name: this.state.item2name,
					item1quantity: this.state.item2quantity,
					item1price: this.state.item2price,
					item1total: this.state.item2total,
					item2name: this.state.item3name,
					item2quantity: this.state.item3quantity,
					item2price: this.state.item3price,
					item2total: this.state.item3total,
					item3name: this.state.item4name,
					item3quantity: this.state.item4quantity,
					item3price: this.state.item4price,
					item3total: this.state.item4total,
					item4name: '',
					item4quantity: 0,
					item4price: 0,
					item4total: 0,
					items: newItems
				})
			}

			else if (position === 1) {
				this.setState({
					item1name: this.state.item2name,
					item1quantity: this.state.item2quantity,
					item1price: this.state.item2price,
					item1total: this.state.item2total,
					item2name: this.state.item3name,
					item2quantity: this.state.item3quantity,
					item2price: this.state.item3price,
					item2total: this.state.item3total,
					item3name: this.state.item4name,
					item3quantity: this.state.item4quantity,
					item3price: this.state.item4price,
					item3total: this.state.item4total,
					item4name: '',
					item4quantity: 0,
					item4price: 0,
					item4total: 0,
					items: newItems
				})
			}

			else if (position === 2) {
				this.setState({
					item2name: this.state.item3name,
					item2quantity: this.state.item3quantity,
					item2price: this.state.item3price,
					item2total: this.state.item3total,
					item3name: this.state.item4name,
					item3quantity: this.state.item4quantity,
					item3price: this.state.item4price,
					item3total: this.state.item4total,
					item4name: '',
					item4quantity: 0,
					item4price: 0,
					item4total: 0,
					items: newItems
				})
			}

			else if (position === 3) {
				this.setState({
					item3name: this.state.item4name,
					item3quantity: this.state.item4quantity,
					item3price: this.state.item4price,
					item3total: this.state.item4total,
					item4name: '',
					item4quantity: 0,
					item4price: 0,
					item4total: 0,
					items: newItems
				})
			}

			else {
				this.setState({
					item4name: '',
					item4quantity: 0,
					item4price: 0,
					item4total: 0,
					items: newItems
				})
			}
		}

		else if (itemsLength === 4) {
			if (position === 0) {
				this.setState({
					item0name: this.state.item1name,
					item0quantity: this.state.item1quantity,
					item0price: this.state.item1price,
					item0total: this.state.item1total,
					item1name: this.state.item2name,
					item1quantity: this.state.item2quantity,
					item1price: this.state.item2price,
					item1total: this.state.item2total,
					item2name: this.state.item3name,
					item2quantity: this.state.item3quantity,
					item2price: this.state.item3price,
					item2total: this.state.item3total,
					item3name: '',
					item3quantity: 0,
					item3price: 0,
					item3total: 0,
					items: newItems
				})
			}

			else if (position === 1) {
				this.setState({
					item1name: this.state.item2name,
					item1quantity: this.state.item2quantity,
					item1price: this.state.item2price,
					item1total: this.state.item2total,
					item2name: this.state.item3name,
					item2quantity: this.state.item3quantity,
					item2price: this.state.item3price,
					item2total: this.state.item3total,
					item3name: '',
					item3quantity: 0,
					item3price: 0,
					item3total: 0,
					items: newItems
				})
			}

			else if (position === 2) {
				this.setState({
					item2name: this.state.item3name,
					item2quantity: this.state.item3quantity,
					item2price: this.state.item3price,
					item2total: this.state.item3total,
					item3name: '',
					item3quantity: 0,
					item3price: 0,
					item3total: 0,
					items: newItems
				})
			}

			else {
				this.setState({
					item3name: '',
					item3quantity: 0,
					item3price: 0,
					item3total: 0,
					items: newItems
				})
			}
		}

		else if (itemsLength === 3) {
			if (position === 0) {
				this.setState({
					item0name: this.state.item1name,
					item0quantity: this.state.item1quantity,
					item0price: this.state.item1price,
					item0total: this.state.item1total,
					item1name: this.state.item2name,
					item1quantity: this.state.item2quantity,
					item1price: this.state.item2price,
					item1total: this.state.item2total,
					item2name: '',
					item2quantity: 0,
					item2price: 0,
					item2total: 0,
					items: newItems
				})
			}

			else if (position === 1) {
				this.setState({
					item1name: this.state.item2name,
					item1quantity: this.state.item2quantity,
					item1price: this.state.item2price,
					item1total: this.state.item2total,
					item2name: '',
					item2quantity: 0,
					item2price: 0,
					item2total: 0,
					items: newItems
				})
			}

			else {
				this.setState({
					item2name: '',
					item2quantity: 0,
					item2price: 0,
					item2total: 0,
					items: newItems
				})
			}
		}

		else if (itemsLength === 2) {
			if (position === 0) {
				this.setState({
					item0name: this.state.item1name,
					item0quantity: this.state.item1quantity,
					item0price: this.state.item1price,
					item0total: this.state.item1total,
					item1name: '',
					item1quantity: 0,
					item1price: 0,
					item1total: 0,
					items: newItems
				})
			}

			else {
				this.setState({
					item1name: '',
					item1quantity: 0,
					item1price: 0,
					item1total: 0,
					items: newItems
				})
			}
		}

		else if (itemsLength === 1) {
			this.setState({
				item0name: '',
				item0quantity: 0,
				item0price: 0,
				item0total: 0,
				items: [],
			})
		}

		else {
			this.setState({
				items: []
			})
		}
	}

	flipOptions = (event) => {
		event.preventDefault();
		this.setState({
			showOptions: !this.state.showOptions
		})
	}

	handleRedirect = (event) => {
        event.preventDefault();
        this.setState({
            redirect: true
        })
    }   

	inputHandler = (event) => {
		event.preventDefault();
		let target = event.target;
		this.setState({
			[target.name]: target.value
		});
	}
	
	itemPriceInputHandler = (event) => {
		event.preventDefault();
		let target = event.target;
		let location = event.target.name.slice(4,5)
		if(location === '0') {
			let total = event.target.value * this.state.item0quantity
			this.setState({
				item0total: total
			})
		}
		
		if(location === '1') {
			let total = event.target.value * this.state.item1quantity
			this.setState({
				item1total: total
			})
		}
		
		if(location === '2') {
			let total = event.target.value * this.state.item2quantity
			this.setState({
				item2total: total
			})
		}
		
		if(location === '3') {
			let total = event.target.value * this.state.item3quantity
			this.setState({
				item3total: total
			})
		}
		
		if(location === '4') {
			let total = event.target.value * this.state.item4quantity
			this.setState({
				item4total: total
			})
		}
		
		this.setState({
			[target.name]: target.value
		});
	}

	itemQuantityInputHandler = (event) => {
		event.preventDefault();
		let target = event.target;
		let location = event.target.name.slice(4,5)
		if(location === '0') {
			let total = event.target.value * this.state.item0price
			this.setState({
				item0total: total
			})
		}
		
		if(location === '1') {
			let total = event.target.value * this.state.item1price
			this.setState({
				item1total: total
			})
		}
		
		if(location === '2') {
			let total = event.target.value * this.state.item2price
			this.setState({
				item2total: total
			})
		}
		
		if(location === '3') {
			let total = event.target.value * this.state.item3price
			this.setState({
				item3total: total
			})
		}
		
		if(location === '4') {
			let total = event.target.value * this.state.item4price
			this.setState({
				item4total: total
			})
		}
		
		this.setState({
			[target.name]: target.value
		});
	}
	
	markInvoiceAsPending = (event) => {
		event.preventDefault();
		let invoice = this.state.invoice;
		invoice.status = 'pending'
		this.context.updateInvoice(invoice)

		this.setState({
			invoice
		})
	}

	markInvoiceAsPaid = (event) => {
		event.preventDefault();
		let invoice = this.state.invoice;
		invoice.status = 'paid'
		this.context.updateInvoice(invoice)

		this.setState({
			invoice
		})
	}	

	openDeleteModal = (event) => {
		event.preventDefault();
		this.context.switchToGrayMode();
		this.setState({
			openDeleteModal: true,
		})
	}

	openEditInvoice = (event) => {
		event.preventDefault();
		this.context.switchToGrayMode();
		this.setState({
			openEditPage: true,
		})
	}

	saveUpdates = () => {
		let clientAddress = {
			street: this.state.clientAddressStreet,
			city: this.state.clientAddressCity,
			postCode: this.state.clientAddressPostCode,
			country: this.state.clientAddressCountry
		}

		let senderAddress = {
			street: this.state.senderAddressStreet,
			city: this.state.senderAddressCity,
			postCode: this.state.senderAddressPostCode,
			country: this.state.senderAddressCountry
		}

		let createdDate = new Date(this.state.createdAt)
		let payDueDate = new Date(this.state.createdAt);
		payDueDate.setDate(createdDate.getDate() + this.state.paymentTerms)
		let paymentDueDateMonth = payDueDate.getUTCMonth();
		let paymentDueDateDay = payDueDate.getUTCDate();
		let paymentDueDateYear = payDueDate.getFullYear();
		let createdAtDateMonth = createdDate.getUTCMonth();
		let createdAtDateDay = createdDate.getUTCDate();
		let createdAtDateYear = createdDate.getFullYear();
		let paymentDueDate = '';
		if(paymentDueDateMonth >= 9) {
			paymentDueDate = `${paymentDueDateYear}-${paymentDueDateMonth + 1}-${paymentDueDateDay}`;
		}
		else {
			paymentDueDate = `${paymentDueDateYear}-0${paymentDueDateMonth + 1}-${paymentDueDateDay}`;
		}
		let total = Number(this.state.item0total + this.state.item1total + this.state.item2total + this.state.item3total + this.state.item4total)
		let preciseTotal = total.toFixed(2);
		let fancyTotal = preciseTotal.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

		let itemsTotal = this.state.items.length
		let items = []
		if (itemsTotal === 1) {
			items = [{
				name: this.state.item0name,
				quantity: this.state.item0quantity,
				price: this.state.item0price,
				total: this.state.item0total,
			}]
		}

		if (itemsTotal === 2) {
			items = [
				{
					name: this.state.item0name,
					quantity: this.state.item0quantity,
					price: this.state.item0price,
					total: this.state.item0total,
				},
				{
					name: this.state.item1name,
					quantity: this.state.item1quantity,
					price: this.state.item1price,
					total: this.state.item1total,
				},
			]
		}

		if (itemsTotal === 3) {
			items = [
				{
					name: this.state.item0name,
					quantity: this.state.item0quantity,
					price: this.state.item0price,
					total: this.state.item0total,
				},
				{
					name: this.state.item1name,
					quantity: this.state.item1quantity,
					price: this.state.item1price,
					total: this.state.item1total,
				},
				{
					name: this.state.item2name,
					quantity: this.state.item2quantity,
					price: this.state.item2price,
					total: this.state.item2total,
				},
			]
		}

		if (itemsTotal === 4) {
			items = [
				{
					name: this.state.item0name,
					quantity: this.state.item0quantity,
					price: this.state.item0price,
					total: this.state.item0total,
				},
				{
					name: this.state.item1name,
					quantity: this.state.item1quantity,
					price: this.state.item1price,
					total: this.state.item1total,
				},
				{
					name: this.state.item2name,
					quantity: this.state.item2quantity,
					price: this.state.item2price,
					total: this.state.item2total,
				},
				{
					name: this.state.item3name,
					quantity: this.state.item3quantity,
					price: this.state.item3price,
					total: this.state.item3total,
				},
			]
		}

		if (itemsTotal === 5) {
			items = [
				{
					name: this.state.item0name,
					quantity: this.state.item0quantity,
					price: this.state.item0price,
					total: this.state.item0total,
				},
				{
					name: this.state.item1name,
					quantity: this.state.item1quantity,
					price: this.state.item1price,
					total: this.state.item1total,
				},
				{
					name: this.state.item2name,
					quantity: this.state.item2quantity,
					price: this.state.item2price,
					total: this.state.item2total,
				},
				{
					name: this.state.item3name,
					quantity: this.state.item3quantity,
					price: this.state.item3price,
					total: this.state.item3total,
				},
				{
					name: this.state.item4name,
					quantity: this.state.item4quantity,
					price: this.state.item4price,
					total: this.state.item4total,
				},
			]
		}

		let invoice = {
			id: this.state.id,
			createdAt: this.state.createdAt,
			paymentDue: paymentDueDate,
			description: this.state.description,
			paymentTerms: this.state.paymentTerms,
			clientName: this.state.clientName,
			clientEmail: this.state.clientEmail,
			status: this.state.status,
			senderAddress: senderAddress,
			clientAddress: clientAddress,
			items: items,
			total: total
		}

		this.context.updateInvoice(invoice);
		this.setState({
			openEditPage: false,
			createdAtDateDay,
			createdAtDateMonth,
			createdAtDateYear,
			paymentDueDateDay,
			paymentDueDateMonth,
			paymentDueDateYear,
			clientAddress,
			senderAddress,
			total,
			fancyTotal,
			items,
			invoice,
		})
	}
	
	updatePaymentTerms = (value) => {
		this.setState({
			paymentTerms: value,
			showOptions: !this.state.showOptions
		})
	}

	render() {
		return (
			<div className="view-invoice-outside-div">
				{this.state.redirect ? <Redirect to={{ pathname:'/' }} /> : null}
				<Navbar />
				{this.state.openDeleteModal === true && this.context.state.darkMode === true ? <DeleteModal 
					id={this.state.id} 
					closeDeleteModal={this.closeDeleteModal}				
					deleteInvoice={this.deleteInvoice}
					colorType='dark' />
					: null
				}

				{this.state.openDeleteModal === true && this.context.state.darkMode === false ? <DeleteModal 
					id={this.state.id} 
					closeDeleteModal={this.closeDeleteModal}				
					deleteInvoice={this.deleteInvoice}
					colorType='light' />
					: null
				}

				{this.state.openEditPage === true ? <EditInvoice 
					invoice={this.state.invoice}
					clientAddressStreet={this.state.clientAddressStreet}
					clientAddressCity={this.state.clientAddressCity}
					clientAddressPostCode={this.state.clientAddressPostCode}
					clientAddressCountry={this.state.clientAddressCountry}
					clientEmail={this.state.clientEmail}
					clientName={this.state.clientName}
					createdAt={this.state.createdAt}
					description={this.state.description}
					id={this.state.id}
					items = {this.state.items}
					item0name={this.state.item0name}
					item0quantity={this.state.item0quantity}
					item0price={this.state.item0price}
					item0total={this.state.item0total}
					item1name={this.state.item1name}
					item1quantity={this.state.item1quantity}
					item1price={this.state.item1price}
					item1total={this.state.item1total}
					item2name={this.state.item2name}
					item2quantity={this.state.item2quantity}
					item2price={this.state.item2price}
					item2total={this.state.item2total}
					item3name={this.state.item3name}
					item3quantity={this.state.item3quantity}
					item3price={this.state.item3price}
					item3total={this.state.item3total}
					item4name={this.state.item4name}
					item4quantity={this.state.item4quantity}
					item4price={this.state.item4price}
					item4total={this.state.item4total}
					paymentTerms={this.state.paymentTerms}
					senderAddressStreet={this.state.senderAddressStreet}
					senderAddressCity={this.state.senderAddressCity}
					senderAddressPostCode={this.state.senderAddressPostCode}
					senderAddressCountry={this.state.senderAddressCountry}
					status={this.state.status}
					showOptions={this.state.showOptions}
					addItem={this.addItem}
					deleteItem={this.deleteItem}
					flipOptions={this.flipOptions}
					updatePaymentTerms={this.updatePaymentTerms}
					closeEditInvoice={this.closeEditInvoice}
					itemQuantityInputHandler={this.itemQuantityInputHandler}
					itemPriceInputHandler={this.itemPriceInputHandler}
					inputHandler={this.inputHandler}
					cancelUpdates={this.cancelUpdates}
					saveUpdates={this.saveUpdates} /> : null}
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
									<div className='delete-button' onClick={this.openDeleteModal}>Delete</div>
									{this.state.invoice.status === 'draft' ? <div className='mark-pending-button' onClick={this.markInvoiceAsPending}>Mark as Pending</div>: null }
									{this.state.invoice.status === 'pending' ? <div className='mark-paid-button' onClick={this.markInvoiceAsPaid}>Mark as Paid</div>: null }
								</div>
							</div>

							<div className='view-invoices-info-div-dark-mode'>
								<div className='view-invoices-info-top-div'>
									<div className='view-invoices-info-top-left-div'>
										<span className='view-invoices-info-top-left-div-id-span'>#<span className='white-span'>{this.state.id}</span></span>
										<span className='view-invoices-info-top-left-div-description-span-dark-mode'>{this.state.description}</span>
									</div>

									<div className='view-invoices-info-top-right-div-dark-mode'>
									<span>{this.state.senderAddressStreet}</span>
										<span>{this.state.senderAddressCity}</span>
										<span>{this.state.senderAddressPostCode}</span>
										<span>{this.state.senderAddressCountry}</span>
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
										<span className='view-invoices-info-middle-container-center-div-address-span'>{this.state.clientAddressStreet}</span>
										<span className='view-invoices-info-middle-container-center-div-address-span'>{this.state.clientAddressCity}</span>
										<span className='view-invoices-info-middle-container-center-div-address-span'>{this.state.clientAddressPostCode}</span>
										<span className='view-invoices-info-middle-container-center-div-address-span'>{this.state.clientAddressCountry}</span>
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


											{this.state.items.map((item, index) => (
												<ItemCard
													key={this.state.id + item['quantity'] + item['price'] + index}
													item={item}
													colorType='dark'
												/>
											))}
								
											<div className='view-invoices-info-bottom-container-total-div-dark-mode'>
												<span>Amount Due</span>
												<span className='view-invoices-info-bottom-container-total-span'>£ {this.state.fancyTotal}</span>
											</div>
										</div>
									:
										<div className='view-invoices-info-bottom-container-div'>
											<div className='view-invoices-info-bottom-container-no-items-div'>
												<span className='view-invoices-info-bottom-container-no-items-span-dark-mode'>No items</span>
											</div>
										</div>
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
									<div className='delete-button' onClick={this.openDeleteModal}>Delete</div>
									{this.state.invoice.status === 'draft' ? <div className='mark-pending-button' onClick={this.markInvoiceAsPending}>Mark as Pending</div>: null }
									{this.state.invoice.status === 'pending' ? <div className='mark-paid-button' onClick={this.markInvoiceAsPaid}>Mark as Paid</div>: null }
								</div>
							</div>

							<div className='view-invoices-info-div'>
								<div className='view-invoices-info-top-div'>
									<div className='view-invoices-info-top-left-div'>
										<span className='view-invoices-info-top-left-div-id-span'>#<span className='black-span'>{this.state.id}</span></span>
										<span className='view-invoices-info-top-left-div-description-span'>{this.state.description}</span>
									</div>

									<div className='view-invoices-info-top-right-div'>
										<span>{this.state.senderAddressStreet}</span>
										<span>{this.state.senderAddressCity}</span>
										<span>{this.state.senderAddressPostCode}</span>
										<span>{this.state.senderAddressCountry}</span>
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
										<span className='view-invoices-info-middle-container-center-div-address-span'>{this.state.clientAddressStreet}</span>
										<span className='view-invoices-info-middle-container-center-div-address-span'>{this.state.clientAddressCity}</span>
										<span className='view-invoices-info-middle-container-center-div-address-span'>{this.state.clientAddressPostCode}</span>
										<span className='view-invoices-info-middle-container-center-div-address-span'>{this.state.clientAddressCountry}</span>
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

											{this.state.items.map((item, index) => (
												<ItemCard
													key={this.state.id + item['quantity'] + item['price'] + index}
													item={item}
													colorType='light'
												/>
											))}
								
											<div className='view-invoices-info-bottom-container-total-div'>
												<span>Amount Due</span>
												<span className='view-invoices-info-bottom-container-total-span'>£ {this.state.fancyTotal}</span>
											</div>
										</div>
									:
										<div className='view-invoices-info-bottom-container-div'>
											<div className='view-invoices-info-bottom-container-no-items-div'>
												<span className='view-invoices-info-bottom-container-no-items-span'>No items</span>
											</div>
										</div>
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