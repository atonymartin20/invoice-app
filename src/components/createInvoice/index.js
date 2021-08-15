import React from 'react';
import { AppContext } from '../context/appContext.js';

import Navbar from '../navbar';
import '../../css/createInvoice.css';
import DownArrowIcon from '../../assets/icon-arrow-down.svg';
import DeleteIcon from '../../assets/icon-delete.svg';
import { Redirect } from 'react-router-dom';

class CreateInvoice extends React.Component {
	state = {
        invoice: {},
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
		items: [],
		paymentTerms: 30,
		senderAddress: {},
		senderAddressStreet: '',
		senderAddressCity: '',
		senderAddressPostCode: '',
		senderAddressCountry: '',
		status: '',
		total: 0,
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
	};

	componentDidMount = () => {
		const letters = "QWERTYUIOPASDFGHJKLZXCVBNM"
		let letter1 = letters[Math.floor(Math.random() * letters.length)]
		let letter2 = letters[Math.floor(Math.random() * letters.length)]
		let number1 = (Math.floor(Math.random() * 10))
		let number2 = (Math.floor(Math.random() * 10))
		let number3 = (Math.floor(Math.random() * 10))
		let number4 = (Math.floor(Math.random() * 10))
		let id = letter1 + letter2 + number1 + number2 + number3 + number4;
		let items = [{name: '', quantity: 0, price: 0, total: 0}]
		this.setState({
			id,
			items,
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

	cancelInvoice = (event) => {
		event.preventDefault();
		this.context.closeGrayMode();
		this.props.closeCreateInvoice();
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

	handleRedirect = () => {
        this.context.closeGrayMode();
		this.props.closeCreateInvoice();
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

	saveAsDraft = () => {
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
		let paymentDueDate = '';
		if(paymentDueDateMonth >= 9) {
			paymentDueDate = `${paymentDueDateYear}-${paymentDueDateMonth + 1}-${paymentDueDateDay}`;
		}
		else {
			paymentDueDate = `${paymentDueDateYear}-0${paymentDueDateMonth + 1}-${paymentDueDateDay}`;
		}
		let total = Number(this.state.item0total + this.state.item1total + this.state.item2total + this.state.item3total + this.state.item4total)

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
			status: 'draft',
			senderAddress: senderAddress,
			clientAddress: clientAddress,
			items: items,
			total: total
		}
		this.context.createInvoice(invoice);
		this.handleRedirect();
		this.setState({
			clientAddress,
			senderAddress,
			total,
			items,
			invoice,
		})
	}

	saveAsPending = () => {
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
		let paymentDueDate = '';
		if(paymentDueDateMonth >= 9) {
			paymentDueDate = `${paymentDueDateYear}-${paymentDueDateMonth + 1}-${paymentDueDateDay}`;
		}
		else {
			paymentDueDate = `${paymentDueDateYear}-0${paymentDueDateMonth + 1}-${paymentDueDateDay}`;
		}
		let total = Number(this.state.item0total + this.state.item1total + this.state.item2total + this.state.item3total + this.state.item4total)

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
			status: 'pending',
			senderAddress: senderAddress,
			clientAddress: clientAddress,
			items: items,
			total: total
		}
		this.context.createInvoice(invoice);
		this.handleRedirect();
		this.setState({
			clientAddress,
			senderAddress,
			total,
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
		if (this.context.state.darkMode === true) {
			return (
				<div className="create-invoice-outside-div">
					<div className='navbar-container-dark-mode'>
						<Navbar />
					</div>
					{this.state.redirect ? <Redirect to={{ pathname:'/' }} /> : null}

					<div className='create-invoice-container-div-dark-mode'>
						<div className='create-invoice-inside-container-div'>
							<span className='create-invoice-id-span-dark-mode'>New Invoice</span>

							<div className='create-invoice-bill-from-div'>
								<h5>Bill From</h5>
								
								<div className={this.state.senderAddressStreet === '' ? 'create-invoice-bill-from-street-address-div-dark-mode-error' : 'create-invoice-bill-from-street-address-div-dark-mode'}>
									<span>Street Address</span>
									<span className='create-invoice-right-error-text'>can't be empty</span>
									<input type='text' id='senderAddressStreet' name='senderAddressStreet' value={this.state.senderAddressStreet} onChange={this.inputHandler} />
								</div>

								<div className='create-invoice-bill-from-city-post-code-country-div'>
									<div className={this.state.senderAddressCity === '' ? 'create-invoice-bill-from-city-div-dark-mode-error' : 'create-invoice-bill-from-city-div-dark-mode'}>
										<span>City</span>
										<span className='create-invoice-right-error-text'>can't be empty</span>
										<input type='text' id='senderAddressCity' name='senderAddressCity' value={this.state.senderAddressCity} onChange={this.inputHandler} />
									</div>

									<div className={this.state.senderAddressPostCode === '' ? 'create-invoice-bill-from-post-code-div-dark-mode-error' : 'create-invoice-bill-from-post-code-div-dark-mode'}>
										<span>Post Code</span>
										<span className='create-invoice-right-error-text'>can't be empty</span>
										<input type='text' id='senderAddressPostCode' name='senderAddressPostCode' value={this.state.senderAddressPostCode} onChange={this.inputHandler} />
									</div>

									<div className={this.state.senderAddressCountry === '' ? 'create-invoice-bill-from-country-div-dark-mode-error' : 'create-invoice-bill-from-country-div-dark-mode'}>
										<span>Country</span>
										<span className='create-invoice-right-error-text'>can't be empty</span>
										<input type='text' id='senderAddressCountry' name='senderAddressCountry' value={this.state.senderAddressCountry} onChange={this.inputHandler} />
									</div>
								</div>
							</div>

							<div className='create-invoice-bill-to-div'>
								<h5>Bill To</h5>

								<div className={this.state.clientName === '' ? 'create-invoice-bill-to-client-name-div-dark-mode-error' : 'create-invoice-bill-to-client-name-div-dark-mode'}>
									<span>Client's Name</span>
									<span className='create-invoice-right-error-text'>can't be empty</span>
									<input type='text' id='clientName' name='clientName' value={this.state.clientName} onChange={this.inputHandler} />
								</div>

								<div className={this.state.clientEmail === '' ? 'create-invoice-bill-to-client-email-div-dark-mode-error' : 'create-invoice-bill-to-client-email-div-dark-mode'}>
									<span>Client's Email</span>
									<span className='create-invoice-right-error-text'>can't be empty</span>
									<input type='text' id='clientEmail' name='clientEmail' value={this.state.clientEmail} onChange={this.inputHandler} />
								</div>

								<div className={this.state.clientAddressStreet === '' ?'create-invoice-bill-to-street-address-div-dark-mode-error' : 'create-invoice-bill-to-street-address-div-dark-mode'}>
									<span>Street Address</span>
									<span className='create-invoice-right-error-text'>can't be empty</span>
									<input type='text' id='clientAddressStreet' name='clientAddressStreet' value={this.state.clientAddressStreet} onChange={this.inputHandler} />
								</div>

								<div className='create-invoice-bill-to-city-post-code-country-div'>
									<div className={this.state.clientAddressCity === '' ? 'create-invoice-bill-to-city-div-dark-mode-error' : 'create-invoice-bill-to-city-div-dark-mode'}>
										<span>City</span>
										<span className='create-invoice-right-error-text'>can't be empty</span>
										<input type='text' id='clientAddressCity' name='clientAddressCity' value={this.state.clientAddressCity} onChange={this.inputHandler} />
									</div>

									<div className={this.state.clientAddressPostCode === '' ? 'create-invoice-bill-to-post-code-div-dark-mode-error' : 'create-invoice-bill-to-post-code-div-dark-mode'}>
										<span>Post Code</span>
										<span className='create-invoice-right-error-text'>can't be empty</span>
										<input type='text' id='clientAddressPostCode' name='clientAddressPostCode' value={this.state.clientAddressPostCode} onChange={this.inputHandler} />
									</div>

									<div className={this.state.clientAddressCountry === '' ? 'create-invoice-bill-to-country-div-dark-mode-error' : 'create-invoice-bill-to-country-div-dark-mode'}>
										<span>Country</span>
										<span className='create-invoice-right-error-text'>can't be empty</span>
										<input type='text' id='clientAddressCountry' name='clientAddressCountry' value={this.state.clientAddressCountry} onChange={this.inputHandler} />
									</div>
								</div>
							</div>

							<div className='create-invoice-invoice-date-payment-terms-div'>
								<div className={this.state.createdAt === '' || this.state.createdAt.length !== 10 ? 'create-invoice-invoice-date-div-dark-mode-error' : 'create-invoice-invoice-date-div-dark-mode'}>
									<span>Invoice Date</span>
									<span className='create-invoice-right-error-text'>YYYY-MM-DD</span>
									<input type='text' id='createdAt' name='createdAt' placeholder='YYYY-MM-DD' value={this.state.createdAt} onChange={this.inputHandler} />
								</div>

								<div className='create-invoice-payment-terms-div-dark-mode'>
									<span>Payment Terms</span>
									{this.state.showOptions === true ? 
										<div className='create-invoice-payment-terms-custom-select-container-div-dark-mode'>
											<div className='create-invoice-payment-terms-custom-select-dark-mode' onClick={this.flipOptions}>
												{this.state.paymentTerms > 1 ? 
													<span>Net {this.state.paymentTerms} Days</span>
												:
													<span>Net {this.state.paymentTerms} Day</span>
												}
												<img src={DownArrowIcon} alt='up-arrow' className='down-arrow-icon-reversed' />
											</div>

											<div className='create-invoice-payment-terms-custom-select-option-container-div-dark-mode'>
												<span onClick={() => this.updatePaymentTerms(1)}>Net 1 Day</span>
												<span onClick={() => this.updatePaymentTerms(7)}>Net 7 Days</span>
												<span onClick={() => this.updatePaymentTerms(14)}>Net 14 Days</span>
												<span onClick={() => this.updatePaymentTerms(30)}>Net 30 Days</span>
											</div>
										</div>
									:
										<div className='create-invoice-payment-terms-custom-select-dark-mode' onClick={this.flipOptions}>
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

							<div className={this.state.description === '' ? 'create-invoice-project-description-div-dark-mode-error' : 'create-invoice-project-description-div-dark-mode'}>
								<span>Project Description</span>
								<span className='create-invoice-right-error-text'>can't be empty</span>
								<input type='text' id='description' name='description' value={this.state.description} onChange={this.inputHandler} />
							</div>
						
							{this.state.items.length === 0 ? 
								<div className='create-invoice-item-list-div'>
									<h2>Item List</h2>

									<div className='create-invoice-add-new-item-div' onClick={this.addItem}>
										<span>+ Add New Item</span>	
									</div>
								</div>				
							: null
							}

							{this.state.items.length === 1 ? 
								<div className='create-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='create-invoice-item-list-labels-div-dark-mode'>
										<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
									</div>

									<div className='create-item-card-div-dark-mode'>
										<input className={this.state.item0name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 0 + 'name'} name='item0name' value={this.state.item0name} onChange={this.inputHandler} />
										<input className={this.state.item0quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 0 + 'quantity'} name='item0quantity' value={this.state.item0quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item0price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 0 + 'price'} name='item0price' value={this.state.item0price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item0total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(0)}/>
									</div>

									<div className='create-invoice-card-small-dark-mode'>
										<div className='create-invoice-card-small-name-container-dark-mode'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item0name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 0 + 'name'} name='item0name' value={this.state.item0name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container-dark-mode'>
											<div className='create-invoice-card-small-bottom-container-quantity-dark-mode'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item0quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 0 + 'quantity'} name='item0quantity' value={this.state.item0quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price-dark-mode'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item0price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 0 + 'price'} name='item0price' value={this.state.item0price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total-dark-mode'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item0total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(0)}/>
										</div>
									</div>

									<div className='create-invoice-add-new-item-div-dark-mode' onClick={this.addItem}>
										<span>+ Add New Item</span>	
									</div>
								</div>
							: null			
							}

							{this.state.items.length === 2 ? 
								<div className='create-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='create-invoice-item-list-labels-div-dark-mode'>
										<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
									</div>

									<div className='create-item-card-div-dark-mode'>
										<input className={this.state.item0name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 0 + 'name'} name='item0name' value={this.state.item0name} onChange={this.inputHandler} />
										<input className={this.state.item0quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 0 + 'quantity'} name='item0quantity' value={this.state.item0quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item0price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 0 + 'price'} name='item0price' value={this.state.item0price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item0total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(0)}/>
									</div>

									<div className='create-item-card-div-dark-mode'>
										<input className={this.state.item1name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 1 + 'name'} name='item1name' value={this.state.item1name} onChange={this.inputHandler} />
										<input className={this.state.item1quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 1 + 'quantity'} name='item1quantity' value={this.state.item1quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item1price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 1 + 'price'} name='item1price' value={this.state.item1price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item1total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(1)}/>
									</div>

									<div className='create-invoice-card-small-dark-mode'>
										<div className='create-invoice-card-small-name-container-dark-mode'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item0name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 0 + 'name'} name='item0name' value={this.state.item0name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container-dark-mode'>
											<div className='create-invoice-card-small-bottom-container-quantity-dark-mode'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item0quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 0 + 'quantity'} name='item0quantity' value={this.state.item0quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price-dark-mode'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item0price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 0 + 'price'} name='item0price' value={this.state.item0price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total-dark-mode'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item0total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(0)}/>
										</div>
									</div>

									<div className='create-invoice-card-small-dark-mode'>
										<div className='create-invoice-card-small-name-container-dark-mode'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item1name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 1 + 'name'} name='item1name' value={this.state.item1name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container-dark-mode'>
											<div className='create-invoice-card-small-bottom-container-quantity-dark-mode'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item1quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 1 + 'quantity'} name='item1quantity' value={this.state.item1quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price-dark-mode'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item1price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 1 + 'price'} name='item1price' value={this.state.item1price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total-dark-mode'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item1total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(1)}/>
										</div>
									</div>

									<div className='create-invoice-add-new-item-div-dark-mode' onClick={this.addItem}>
										<span>+ Add New Item</span>	
									</div>
								</div>
							: null			
							}

							{this.state.items.length === 3 ? 
								<div className='create-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='create-invoice-item-list-labels-div-dark-mode'>
										<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
									</div>

									<div className='create-item-card-div-dark-mode'>
										<input className={this.state.item0name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 0 + 'name'} name='item0name' value={this.state.item0name} onChange={this.inputHandler} />
										<input className={this.state.item0quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 0 + 'quantity'} name='item0quantity' value={this.state.item0quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item0price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 0 + 'price'} name='item0price' value={this.state.item0price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item0total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(0)}/>
									</div>

									<div className='create-item-card-div-dark-mode'>
										<input className={this.state.item1name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 1 + 'name'} name='item1name' value={this.state.item1name} onChange={this.inputHandler} />
										<input className={this.state.item1quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 1 + 'quantity'} name='item1quantity' value={this.state.item1quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item1price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 1 + 'price'} name='item1price' value={this.state.item1price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item1total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(1)}/>
									</div>

									<div className='create-item-card-div-dark-mode'>
										<input className={this.state.item2name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 2 + 'name'} name='item2name' value={this.state.item2name} onChange={this.inputHandler} />
										<input className={this.state.item2quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 2 + 'quantity'} name='item2quantity' value={this.state.item2quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item2price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 2 + 'price'} name='item2price' value={this.state.item2price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item2total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(2)}/>
									</div>

									<div className='create-invoice-card-small-dark-mode'>
										<div className='create-invoice-card-small-name-container-dark-mode'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item0name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 0 + 'name'} name='item0name' value={this.state.item0name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container-dark-mode'>
											<div className='create-invoice-card-small-bottom-container-quantity-dark-mode'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item0quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 0 + 'quantity'} name='item0quantity' value={this.state.item0quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price-dark-mode'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item0price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 0 + 'price'} name='item0price' value={this.state.item0price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total-dark-mode'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item0total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(0)}/>
										</div>
									</div>

									<div className='create-invoice-card-small-dark-mode'>
										<div className='create-invoice-card-small-name-container-dark-mode'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item1name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 1 + 'name'} name='item1name' value={this.state.item1name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container-dark-mode'>
											<div className='create-invoice-card-small-bottom-container-quantity-dark-mode'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item1quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 1 + 'quantity'} name='item1quantity' value={this.state.item1quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price-dark-mode'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item1price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 1 + 'price'} name='item1price' value={this.state.item1price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total-dark-mode'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item1total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(1)}/>
										</div>
									</div>

									<div className='create-invoice-card-small-dark-mode'>
										<div className='create-invoice-card-small-name-container-dark-mode'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item2name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 2 + 'name'} name='item2name' value={this.state.item2name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container-dark-mode'>
											<div className='create-invoice-card-small-bottom-container-quantity-dark-mode'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item2quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 2 + 'quantity'} name='item2quantity' value={this.state.item2quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price-dark-mode'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item2price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 2 + 'price'} name='item2price' value={this.state.item2price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total-dark-mode'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item2total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(2)}/>
										</div>
									</div>

									<div className='create-invoice-add-new-item-div-dark-mode' onClick={this.addItem}>
										<span>+ Add New Item</span>	
									</div>
								</div>
							: null			
							}

							{this.state.items.length === 4 ? 
								<div className='create-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='create-invoice-item-list-labels-div-dark-mode'>
										<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
									</div>

									<div className='create-item-card-div-dark-mode'>
										<input className={this.state.item0name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 0 + 'name'} name='item0name' value={this.state.item0name} onChange={this.inputHandler} />
										<input className={this.state.item0quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 0 + 'quantity'} name='item0quantity' value={this.state.item0quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item0price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 0 + 'price'} name='item0price' value={this.state.item0price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item0total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(0)}/>
									</div>

									<div className='create-item-card-div-dark-mode'>
										<input className={this.state.item1name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 1 + 'name'} name='item1name' value={this.state.item1name} onChange={this.inputHandler} />
										<input className={this.state.item1quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 1 + 'quantity'} name='item1quantity' value={this.state.item1quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item1price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 1 + 'price'} name='item1price' value={this.state.item1price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item1total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(1)}/>
									</div>

									<div className='create-item-card-div-dark-mode'>
										<input className={this.state.item2name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 2 + 'name'} name='item2name' value={this.state.item2name} onChange={this.inputHandler} />
										<input className={this.state.item2quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 2 + 'quantity'} name='item2quantity' value={this.state.item2quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item2price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 2 + 'price'} name='item2price' value={this.state.item2price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item2total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(2)}/>
									</div>

									<div className='create-item-card-div-dark-mode'>
										<input className={this.state.item3name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 3 + 'name'} name='item3name' value={this.state.item3name} onChange={this.inputHandler} />
										<input className={this.state.item3quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 3 + 'quantity'} name='item3quantity' value={this.state.item3quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item3price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 3 + 'price'} name='item3price' value={this.state.item3price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item3total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(3)}/>
									</div>

									<div className='create-invoice-card-small-dark-mode'>
										<div className='create-invoice-card-small-name-container-dark-mode'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item0name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 0 + 'name'} name='item0name' value={this.state.item0name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container-dark-mode'>
											<div className='create-invoice-card-small-bottom-container-quantity-dark-mode'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item0quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 0 + 'quantity'} name='item0quantity' value={this.state.item0quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price-dark-mode'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item0price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 0 + 'price'} name='item0price' value={this.state.item0price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total-dark-mode'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item0total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(0)}/>
										</div>
									</div>

									<div className='create-invoice-card-small-dark-mode'>
										<div className='create-invoice-card-small-name-container-dark-mode'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item1name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 1 + 'name'} name='item1name' value={this.state.item1name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container-dark-mode'>
											<div className='create-invoice-card-small-bottom-container-quantity-dark-mode'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item1quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 1 + 'quantity'} name='item1quantity' value={this.state.item1quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price-dark-mode'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item1price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 1 + 'price'} name='item1price' value={this.state.item1price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total-dark-mode'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item1total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(1)}/>
										</div>
									</div>

									<div className='create-invoice-card-small-dark-mode'>
										<div className='create-invoice-card-small-name-container-dark-mode'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item2name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 2 + 'name'} name='item2name' value={this.state.item2name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container-dark-mode'>
											<div className='create-invoice-card-small-bottom-container-quantity-dark-mode'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item2quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 2 + 'quantity'} name='item2quantity' value={this.state.item2quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price-dark-mode'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item2price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 2 + 'price'} name='item2price' value={this.state.item2price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total-dark-mode'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item2total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(2)}/>
										</div>
									</div>

									<div className='create-invoice-card-small-dark-mode'>
										<div className='create-invoice-card-small-name-container-dark-mode'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item3name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 3 + 'name'} name='item3name' value={this.state.item3name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container-dark-mode'>
											<div className='create-invoice-card-small-bottom-container-quantity-dark-mode'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item3quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 3 + 'quantity'} name='item3quantity' value={this.state.item3quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price-dark-mode'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item3price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 3 + 'price'} name='item3price' value={this.state.item3price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total-dark-mode'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item3total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(3)}/>
										</div>
									</div>

									<div className='create-invoice-add-new-item-div-dark-mode' onClick={this.addItem}>
										<span>+ Add New Item</span>	
									</div>
								</div>
							: null			
							}

							{this.state.items.length === 5 ? 
								<div className='create-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='create-invoice-item-list-labels-div-dark-mode'>
										<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
									</div>

									<div className='create-item-card-div-dark-mode'>
										<input className={this.state.item0name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 0 + 'name'} name='item0name' value={this.state.item0name} onChange={this.inputHandler} />
										<input className={this.state.item0quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 0 + 'quantity'} name='item0quantity' value={this.state.item0quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item0price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 0 + 'price'} name='item0price' value={this.state.item0price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item0total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(0)}/>
									</div>

									<div className='create-item-card-div-dark-mode'>
										<input className={this.state.item1name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 1 + 'name'} name='item1name' value={this.state.item1name} onChange={this.inputHandler} />
										<input className={this.state.item1quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 1 + 'quantity'} name='item1quantity' value={this.state.item1quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item1price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 1 + 'price'} name='item1price' value={this.state.item1price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item1total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(1)}/>
									</div>

									<div className='create-item-card-div-dark-mode'>
										<input className={this.state.item2name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 2 + 'name'} name='item2name' value={this.state.item2name} onChange={this.inputHandler} />
										<input className={this.state.item2quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 2 + 'quantity'} name='item2quantity' value={this.state.item2quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item2price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 2 + 'price'} name='item2price' value={this.state.item2price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item2total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(2)}/>
									</div>

									<div className='create-item-card-div-dark-mode'>
										<input className={this.state.item3name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 3 + 'name'} name='item3name' value={this.state.item3name} onChange={this.inputHandler} />
										<input className={this.state.item3quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 3 + 'quantity'} name='item3quantity' value={this.state.item3quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item3price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 3 + 'price'} name='item3price' value={this.state.item3price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item3total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(3)}/>
									</div>

									<div className='create-item-card-div-dark-mode'>
										<input className={this.state.item4name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 4 + 'name'} name='item4name' value={this.state.item4name} onChange={this.inputHandler} />
										<input className={this.state.item4quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 4 + 'quantity'} name='item4quantity' value={this.state.item4quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item4price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 4 + 'price'} name='item4price' value={this.state.item4price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item4total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(4)}/>
									</div>

									<div className='create-invoice-card-small-dark-mode'>
										<div className='create-invoice-card-small-name-container-dark-mode'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item0name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 0 + 'name'} name='item0name' value={this.state.item0name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container-dark-mode'>
											<div className='create-invoice-card-small-bottom-container-quantity-dark-mode'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item0quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 0 + 'quantity'} name='item0quantity' value={this.state.item0quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price-dark-mode'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item0price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 0 + 'price'} name='item0price' value={this.state.item0price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total-dark-mode'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item0total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(0)}/>
										</div>
									</div>

									<div className='create-invoice-card-small-dark-mode'>
										<div className='create-invoice-card-small-name-container-dark-mode'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item1name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 1 + 'name'} name='item1name' value={this.state.item1name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container-dark-mode'>
											<div className='create-invoice-card-small-bottom-container-quantity-dark-mode'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item1quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 1 + 'quantity'} name='item1quantity' value={this.state.item1quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price-dark-mode'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item1price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 1 + 'price'} name='item1price' value={this.state.item1price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total-dark-mode'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item1total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(1)}/>
										</div>
									</div>

									<div className='create-invoice-card-small-dark-mode'>
										<div className='create-invoice-card-small-name-container-dark-mode'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item2name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 2 + 'name'} name='item2name' value={this.state.item2name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container-dark-mode'>
											<div className='create-invoice-card-small-bottom-container-quantity-dark-mode'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item2quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 2 + 'quantity'} name='item2quantity' value={this.state.item2quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price-dark-mode'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item2price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 2 + 'price'} name='item2price' value={this.state.item2price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total-dark-mode'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item2total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(2)}/>
										</div>
									</div>

									<div className='create-invoice-card-small-dark-mode'>
										<div className='create-invoice-card-small-name-container-dark-mode'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item3name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 3 + 'name'} name='item3name' value={this.state.item3name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container-dark-mode'>
											<div className='create-invoice-card-small-bottom-container-quantity-dark-mode'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item3quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 3 + 'quantity'} name='item3quantity' value={this.state.item3quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price-dark-mode'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item3price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 3 + 'price'} name='item3price' value={this.state.item3price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total-dark-mode'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item3total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(3)}/>
										</div>
									</div>

									<div className='create-invoice-card-small-dark-mode'>
										<div className='create-invoice-card-small-name-container-dark-mode'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item4name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 4 + 'name'} name='item4name' value={this.state.item4name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container-dark-mode'>
											<div className='create-invoice-card-small-bottom-container-quantity-dark-mode'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item4quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 4 + 'quantity'} name='item4quantity' value={this.state.item4quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price-dark-mode'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item4price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 4 + 'price'} name='item4price' value={this.state.item4price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total-dark-mode'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item4total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(4)}/>
										</div>
									</div>
								</div>
							: null			
							}

							{this.state.senderAddressStreet === '' || this.state.senderAddressCity === '' || this.state.senderAddressPostCode === '' || this.state.senderAddressCountry === '' || this.state.clientName === '' || this.state.clientEmail === '' || this.state.clientAddressStreet === '' || this.state.clientAddressCity === '' || this.state.clientAddressPostCode === '' || this.state.clientAddressCountry === '' || this.state.createdAt === '' || this.state.description === '' ? 
								<div className='create-invoice-bottom-error-check'>
									<span>- All fields must be added</span>
									{this.state.senderAddressStreet === '' ?
										<span>- Sender Street must be added</span>
									:
										null
									}

									{this.state.senderAddressCity === '' ?
										<span>- Sender City must be added</span>
									:
										null
									}

									{this.state.senderAddressPostCode === '' ?
										<span>- Sender Post Code must be added</span>
									:
										null
									}

									{this.state.senderAddressCountry === '' ?
										<span>- Sender Country must be added</span>
									:
										null
									}

									{this.state.clientName === '' ?
										<span>- Client Name must be added</span>
									:
										null
									}

									{this.state.clientEmail === '' ?
										<span>- Client Email must be added</span>
									:
										null
									}

									{this.state.clientAddressStreet === '' ?
										<span>- Client Street must be added</span>
									:
										null
									}

									{this.state.clientAddressCity === '' ?
										<span>- Client City must be added</span>
									:
										null
									}

									{this.state.clientAddressPostCode === '' ?
										<span>- Client Post Code must be added</span>
									:
										null
									}

									{this.state.clientAddressCountry === '' ?
										<span>- Client Country must be added</span>
									:
										null
									}

									{this.state.createdAt === '' ?
										<span>- Invoice Date must be added</span>
									:
										null
									}

									{this.state.description === '' ?
										<span>- Description must be added</span>
									:
										null
									}
								</div>
							:
								null
							}

						</div>

						<div className='create-invoice-bottom-buttons-gradient-div-dark-mode' />

						<div className='create-invoice-bottom-buttons-div-dark-mode'>
							<div className='create-invoice-bottom-button-discard-div-dark-mode' onClick={this.cancelInvoice}>
								<span>Discard</span>
							</div>
							<div className='create-invoice-bottom-button-save-as-draft-div-dark-mode' onClick={this.saveAsDraft}>
								<span>Save as Draft</span>
							</div>
							<div className='create-invoice-bottom-button-save-and-send-div-dark-mode' onClick={this.saveAsPending}>
								<span>Save &amp; Send</span>
							</div>
						</div>
					</div>
				</div>
			);
		}

		else {
			return (
				<div className='create-invoice-outside-div'>
					<div className='navbar-container'>
						<Navbar />
					</div>
					<div className='create-invoice-container-div'>
						<div className='create-invoice-inside-container-div'>
							<span className='create-invoice-id-span'>New Invoice</span>

							<div className='create-invoice-bill-from-div'>
								<h5>Bill From</h5>

								<div className={this.state.senderAddressStreet === '' ? 'create-invoice-bill-from-street-address-div-error' : 'create-invoice-bill-from-street-address-div'}>
									<span>Street Address</span>
									<span className='create-invoice-right-error-text'>can't be empty</span>
									<input type='text' id='senderAddressStreet' name='senderAddressStreet' value={this.state.senderAddressStreet} onChange={this.inputHandler} />
								</div>

								<div className='create-invoice-bill-from-city-post-code-country-div'>
									<div className={this.state.senderAddressCity === '' ? 'create-invoice-bill-from-city-div-error' : 'create-invoice-bill-from-city-div'}>
										<span>City</span>
										<span className='create-invoice-right-error-text'>can't be empty</span>
										<input type='text' id='senderAddressCity' name='senderAddressCity' value={this.state.senderAddressCity} onChange={this.inputHandler} />
									</div>

									<div className={this.state.senderAddressPostCode === '' ? 'create-invoice-bill-from-post-code-div-error' : 'create-invoice-bill-from-post-code-div'}>
										<span>Post Code</span>
										<span className='create-invoice-right-error-text'>can't be empty</span>
										<input type='text' id='senderAddressPostCode' name='senderAddressPostCode' value={this.state.senderAddressPostCode} onChange={this.inputHandler} />
									</div>

									<div className={this.state.senderAddressCountry === '' ? 'create-invoice-bill-from-country-div-error' : 'create-invoice-bill-from-country-div'}>
										<span>Country</span>
										<span className='create-invoice-right-error-text'>can't be empty</span>
										<input type='text' id='senderAddressCountry' name='senderAddressCountry' value={this.state.senderAddressCountry} onChange={this.inputHandler} />
									</div>
								</div>
							</div>

							<div className='create-invoice-bill-to-div'>
								<h5>Bill To</h5>

								<div className={this.state.clientName === '' ? 'create-invoice-bill-to-client-name-div-error' : 'create-invoice-bill-to-client-name-div'}>
									<span>Client's Name</span>
									<span className='create-invoice-right-error-text'>can't be empty</span>
									<input type='text' id='clientName' name='clientName' value={this.state.clientName} onChange={this.inputHandler} />
								</div>

								<div className={this.state.clientEmail === '' ? 'create-invoice-bill-to-client-email-div-error' : 'create-invoice-bill-to-client-email-div'}>
									<span>Client's Email</span>
									<span className='create-invoice-right-error-text'>can't be empty</span>
									<input type='text' id='clientEmail' name='clientEmail' value={this.state.clientEmail} onChange={this.inputHandler} />
								</div>

								<div className={this.state.clientAddressStreet === '' ? 'create-invoice-bill-to-street-address-div-error' : 'create-invoice-bill-to-street-address-div'}>
									<span>Street Address</span>
									<span className='create-invoice-right-error-text'>can't be empty</span>
									<input type='text' id='clientAddressStreet' name='clientAddressStreet' value={this.state.clientAddressStreet} onChange={this.inputHandler} />
								</div>

								<div className='create-invoice-bill-to-city-post-code-country-div'>
									<div className={this.state.clientAddressCity === '' ? 'create-invoice-bill-to-city-div-error' : 'create-invoice-bill-to-city-div'}>
										<span>City</span>
										<span className='create-invoice-right-error-text'>can't be empty</span>
										<input type='text' id='clientAddressCity' name='clientAddressCity' value={this.state.clientAddressCity} onChange={this.inputHandler} />
									</div>

									<div className={this.state.clientAddressPostCode === '' ? 'create-invoice-bill-to-post-code-div-error' : 'create-invoice-bill-to-post-code-div'}>
										<span>Post Code</span>
										<span className='create-invoice-right-error-text'>can't be empty</span>
										<input type='text' id='clientAddressPostCode' name='clientAddressPostCode' value={this.state.clientAddressPostCode} onChange={this.inputHandler} />
									</div>

									<div className={this.state.clientAddressCountry === '' ? 'create-invoice-bill-to-country-div-error' : 'create-invoice-bill-to-country-div'}>
										<span>Country</span>
										<span className='create-invoice-right-error-text'>can't be empty</span>
										<input type='text' id='clientAddressCountry' name='clientAddressCountry' value={this.state.clientAddressCountry} onChange={this.inputHandler} />
									</div>
								</div>
							</div>
													
							<div className='create-invoice-invoice-date-payment-terms-div'>
								<div className={this.state.createdAt === '' || this.state.createdAt.length !== 10 ? 'create-invoice-invoice-date-div-error': 'create-invoice-invoice-date-div'}>
									<span>Invoice Date</span>
									<span className='create-invoice-right-error-text'>YYYY-MM-DD</span>
									<input type='text' id='createdAt' name='createdAt' placeholder='YYYY-MM-DD' value={this.state.createdAt} onChange={this.inputHandler} />
								</div>

								<div className='create-invoice-payment-terms-div'>
									<span>Payment Terms</span>
									{this.state.showOptions === true ? 
										<div className='create-invoice-payment-terms-custom-select-container-div'>
											<div className='create-invoice-payment-terms-custom-select' onClick={this.flipOptions}>
												{this.state.paymentTerms > 1 ? 
													<span>Net {this.state.paymentTerms} Days</span>
												:
													<span>Net {this.state.paymentTerms} Day</span>
												}
												<img src={DownArrowIcon} alt='up-arrow' className='down-arrow-icon-reversed' />
											</div>

											<div className='create-invoice-payment-terms-custom-select-option-container-div'>
												<span onClick={() => this.updatePaymentTerms(1)}>Net 1 Day</span>
												<span onClick={() => this.updatePaymentTerms(7)}>Net 7 Days</span>
												<span onClick={() => this.updatePaymentTerms(14)}>Net 14 Days</span>
												<span onClick={() => this.updatePaymentTerms(30)}>Net 30 Days</span>
											</div>
										</div>
									:
										<div className='create-invoice-payment-terms-custom-select' onClick={this.flipOptions}>
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

							<div className={this.state.description === '' ? 'create-invoice-project-description-div-error' : 'create-invoice-project-description-div'}>
								<span>Project Description</span>
								<span className='create-invoice-right-error-text'>can't be empty</span>
								<input type='text' id='description' name='description' value={this.state.description} onChange={this.inputHandler} />
							</div>
							
							{this.state.items.length === 0 ? 
								<div className='create-invoice-item-list-div'>
									<h2>Item List</h2>

									<div className='create-invoice-add-new-item-div' onClick={this.addItem}>
										<span>+ Add New Item</span>	
									</div>
								</div>				
							: null
							}

							{this.state.items.length === 1 ? 
								<div className='create-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='create-invoice-item-list-labels-div'>
										<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
									</div>

									<div className='create-item-card-div'>
										<input className={this.state.item0name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 0 + 'name'} name='item0name' value={this.state.item0name} onChange={this.inputHandler} />
										<input className={this.state.item0quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 0 + 'quantity'} name='item0quantity' value={this.state.item0quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item0price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 0 + 'price'} name='item0price' value={this.state.item0price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item0total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(0)}/>
									</div>

									<div className='create-invoice-card-small'>
										<div className='create-invoice-card-small-name-container'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item0name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 0 + 'name'} name='item0name' value={this.state.item0name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container'>
											<div className='create-invoice-card-small-bottom-container-quantity'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item0quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 0 + 'quantity'} name='item0quantity' value={this.state.item0quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item0price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 0 + 'price'} name='item0price' value={this.state.item0price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item0total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(0)}/>
										</div>
									</div>

									<div className='create-invoice-add-new-item-div' onClick={this.addItem}>
										<span>+ Add New Item</span>	
									</div>
								</div>
							: null			
							}

							{this.state.items.length === 2 ? 
								<div className='create-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='create-invoice-item-list-labels-div'>
										<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
									</div>

									<div className='create-item-card-div'>
										<input className={this.state.item0name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 0 + 'name'} name='item0name' value={this.state.item0name} onChange={this.inputHandler} />
										<input className={this.state.item0quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 0 + 'quantity'} name='item0quantity' value={this.state.item0quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item0price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 0 + 'price'} name='item0price' value={this.state.item0price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item0total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(0)}/>
									</div>

									<div className='create-item-card-div'>
										<input className={this.state.item1name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 1 + 'name'} name='item1name' value={this.state.item1name} onChange={this.inputHandler} />
										<input className={this.state.item1quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 1 + 'quantity'} name='item1quantity' value={this.state.item1quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item1price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 1 + 'price'} name='item1price' value={this.state.item1price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item1total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(1)}/>
									</div>

									<div className='create-invoice-card-small'>
										<div className='create-invoice-card-small-name-container'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item0name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 0 + 'name'} name='item0name' value={this.state.item0name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container'>
											<div className='create-invoice-card-small-bottom-container-quantity'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item0quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 0 + 'quantity'} name='item0quantity' value={this.state.item0quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item0price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 0 + 'price'} name='item0price' value={this.state.item0price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item0total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(0)}/>
										</div>
									</div>

									<div className='create-invoice-card-small'>
										<div className='create-invoice-card-small-name-container'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item1name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 1 + 'name'} name='item1name' value={this.state.item1name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container'>
											<div className='create-invoice-card-small-bottom-container-quantity'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item1quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 1 + 'quantity'} name='item1quantity' value={this.state.item1quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item1price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 1 + 'price'} name='item1price' value={this.state.item1price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item1total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(1)}/>
										</div>
									</div>

									<div className='create-invoice-add-new-item-div' onClick={this.addItem}>
										<span>+ Add New Item</span>	
									</div>
								</div>
							: null			
							}

							{this.state.items.length === 3 ? 
								<div className='create-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='create-invoice-item-list-labels-div'>
										<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
									</div>

									<div className='create-item-card-div'>
										<input className={this.state.item0name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 0 + 'name'} name='item0name' value={this.state.item0name} onChange={this.inputHandler} />
										<input className={this.state.item0quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 0 + 'quantity'} name='item0quantity' value={this.state.item0quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item0price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 0 + 'price'} name='item0price' value={this.state.item0price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item0total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(0)}/>
									</div>

									<div className='create-item-card-div'>
										<input className={this.state.item1name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 1 + 'name'} name='item1name' value={this.state.item1name} onChange={this.inputHandler} />
										<input className={this.state.item1quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 1 + 'quantity'} name='item1quantity' value={this.state.item1quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item1price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 1 + 'price'} name='item1price' value={this.state.item1price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item1total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(1)}/>
									</div>

									<div className='create-item-card-div'>
										<input className={this.state.item2name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 2 + 'name'} name='item2name' value={this.state.item2name} onChange={this.inputHandler} />
										<input className={this.state.item2quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 2 + 'quantity'} name='item2quantity' value={this.state.item2quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item2price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 2 + 'price'} name='item2price' value={this.state.item2price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item2total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(2)}/>
									</div>

									<div className='create-invoice-card-small'>
										<div className='create-invoice-card-small-name-container'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item0name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 0 + 'name'} name='item0name' value={this.state.item0name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container'>
											<div className='create-invoice-card-small-bottom-container-quantity'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item0quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 0 + 'quantity'} name='item0quantity' value={this.state.item0quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item0price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 0 + 'price'} name='item0price' value={this.state.item0price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item0total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(0)}/>
										</div>
									</div>

									<div className='create-invoice-card-small'>
										<div className='create-invoice-card-small-name-container'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item1name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 1 + 'name'} name='item1name' value={this.state.item1name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container'>
											<div className='create-invoice-card-small-bottom-container-quantity'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item1quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 1 + 'quantity'} name='item1quantity' value={this.state.item1quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item1price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 1 + 'price'} name='item1price' value={this.state.item1price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item1total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(1)}/>
										</div>
									</div>

									<div className='create-invoice-card-small'>
										<div className='create-invoice-card-small-name-container'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item2name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 2 + 'name'} name='item2name' value={this.state.item2name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container'>
											<div className='create-invoice-card-small-bottom-container-quantity'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item2quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 2 + 'quantity'} name='item2quantity' value={this.state.item2quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item2price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 2 + 'price'} name='item2price' value={this.state.item2price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item2total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(2)}/>
										</div>
									</div>

									<div className='create-invoice-add-new-item-div' onClick={this.addItem}>
										<span>+ Add New Item</span>	
									</div>
								</div>
							: null			
							}

							{this.state.items.length === 4 ? 
								<div className='create-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='create-invoice-item-list-labels-div'>
										<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
									</div>

									<div className='create-item-card-div'>
										<input className={this.state.item0name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 0 + 'name'} name='item0name' value={this.state.item0name} onChange={this.inputHandler} />
										<input className={this.state.item0quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 0 + 'quantity'} name='item0quantity' value={this.state.item0quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item0price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 0 + 'price'} name='item0price' value={this.state.item0price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item0total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(0)}/>
									</div>

									<div className='create-item-card-div'>
										<input className={this.state.item1name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 1 + 'name'} name='item1name' value={this.state.item1name} onChange={this.inputHandler} />
										<input className={this.state.item1quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 1 + 'quantity'} name='item1quantity' value={this.state.item1quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item1price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 1 + 'price'} name='item1price' value={this.state.item1price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item1total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(1)}/>
									</div>

									<div className='create-item-card-div'>
										<input className={this.state.item2name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 2 + 'name'} name='item2name' value={this.state.item2name} onChange={this.inputHandler} />
										<input className={this.state.item2quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 2 + 'quantity'} name='item2quantity' value={this.state.item2quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item2price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 2 + 'price'} name='item2price' value={this.state.item2price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item2total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(2)}/>
									</div>

									<div className='create-item-card-div'>
										<input className={this.state.item3name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 3 + 'name'} name='item3name' value={this.state.item3name} onChange={this.inputHandler} />
										<input className={this.state.item3quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 3 + 'quantity'} name='item3quantity' value={this.state.item3quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item3price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 3 + 'price'} name='item3price' value={this.state.item3price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item3total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(3)}/>
									</div>

									<div className='create-invoice-card-small'>
										<div className='create-invoice-card-small-name-container'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item0name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 0 + 'name'} name='item0name' value={this.state.item0name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container'>
											<div className='create-invoice-card-small-bottom-container-quantity'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item0quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 0 + 'quantity'} name='item0quantity' value={this.state.item0quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item0price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 0 + 'price'} name='item0price' value={this.state.item0price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item0total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(0)}/>
										</div>
									</div>

									<div className='create-invoice-card-small'>
										<div className='create-invoice-card-small-name-container'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item1name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 1 + 'name'} name='item1name' value={this.state.item1name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container'>
											<div className='create-invoice-card-small-bottom-container-quantity'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item1quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 1 + 'quantity'} name='item1quantity' value={this.state.item1quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item1price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 1 + 'price'} name='item1price' value={this.state.item1price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item1total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(1)}/>
										</div>
									</div>

									<div className='create-invoice-card-small'>
										<div className='create-invoice-card-small-name-container'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item2name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 2 + 'name'} name='item2name' value={this.state.item2name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container'>
											<div className='create-invoice-card-small-bottom-container-quantity'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item2quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 2 + 'quantity'} name='item2quantity' value={this.state.item2quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item2price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 2 + 'price'} name='item2price' value={this.state.item2price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item2total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(2)}/>
										</div>
									</div>

									<div className='create-invoice-card-small'>
										<div className='create-invoice-card-small-name-container'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item3name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 3 + 'name'} name='item3name' value={this.state.item3name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container'>
											<div className='create-invoice-card-small-bottom-container-quantity'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item3quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 3 + 'quantity'} name='item3quantity' value={this.state.item3quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item3price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 3 + 'price'} name='item3price' value={this.state.item3price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item3total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(3)}/>
										</div>
									</div>

									<div className='create-invoice-add-new-item-div' onClick={this.addItem}>
										<span>+ Add New Item</span>	
									</div>
								</div>
							: null			
							}

							{this.state.items.length === 5 ? 
								<div className='create-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='create-invoice-item-list-labels-div'>
										<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
									</div>

									<div className='create-item-card-div'>
										<input className={this.state.item0name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 0 + 'name'} name='item0name' value={this.state.item0name} onChange={this.inputHandler} />
										<input className={this.state.item0quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 0 + 'quantity'} name='item0quantity' value={this.state.item0quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item0price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 0 + 'price'} name='item0price' value={this.state.item0price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item0total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(0)}/>
									</div>

									<div className='create-item-card-div'>
										<input className={this.state.item1name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 1 + 'name'} name='item1name' value={this.state.item1name} onChange={this.inputHandler} />
										<input className={this.state.item1quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 1 + 'quantity'} name='item1quantity' value={this.state.item1quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item1price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 1 + 'price'} name='item1price' value={this.state.item1price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item1total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(1)}/>
									</div>

									<div className='create-item-card-div'>
										<input className={this.state.item2name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 2 + 'name'} name='item2name' value={this.state.item2name} onChange={this.inputHandler} />
										<input className={this.state.item2quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 2 + 'quantity'} name='item2quantity' value={this.state.item2quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item2price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 2 + 'price'} name='item2price' value={this.state.item2price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item2total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(2)}/>
									</div>

									<div className='create-item-card-div'>
										<input className={this.state.item3name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 3 + 'name'} name='item3name' value={this.state.item3name} onChange={this.inputHandler} />
										<input className={this.state.item3quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 3 + 'quantity'} name='item3quantity' value={this.state.item3quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item3price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 3 + 'price'} name='item3price' value={this.state.item3price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item3total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(3)}/>
									</div>

									<div className='create-item-card-div'>
										<input className={this.state.item4name === '' ? 'create-item-card-name-input-error' : 'create-item-card-name-input'} type='text' id={this.state.id + 4 + 'name'} name='item4name' value={this.state.item4name} onChange={this.inputHandler} />
										<input className={this.state.item4quantity === '' ? 'create-item-card-quantity-input-error' : 'create-item-card-quantity-input'} type='text' id={this.state.id + 4 + 'quantity'} name='item4quantity' value={this.state.item4quantity} onChange={this.itemQuantityInputHandler} />
										<input className={this.state.item4price === '' ? 'create-item-card-price-input-error' : 'create-item-card-price-input'} type='text' id={this.state.id + 4 + 'price'} name='item4price' value={this.state.item4price} onChange={this.itemPriceInputHandler} />
										<span className='create-item-card-total-span'>{Number(this.state.item4total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can' onClick={() => this.deleteItem(4)}/>
									</div>

									<div className='create-invoice-card-small'>
										<div className='create-invoice-card-small-name-container'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item0name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 0 + 'name'} name='item0name' value={this.state.item0name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container'>
											<div className='create-invoice-card-small-bottom-container-quantity'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item0quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 0 + 'quantity'} name='item0quantity' value={this.state.item0quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item0price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 0 + 'price'} name='item0price' value={this.state.item0price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item0total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(0)}/>
										</div>
									</div>

									<div className='create-invoice-card-small'>
										<div className='create-invoice-card-small-name-container'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item1name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 1 + 'name'} name='item1name' value={this.state.item1name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container'>
											<div className='create-invoice-card-small-bottom-container-quantity'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item1quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 1 + 'quantity'} name='item1quantity' value={this.state.item1quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item1price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 1 + 'price'} name='item1price' value={this.state.item1price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item1total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(1)}/>
										</div>
									</div>

									<div className='create-invoice-card-small'>
										<div className='create-invoice-card-small-name-container'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item2name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 2 + 'name'} name='item2name' value={this.state.item2name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container'>
											<div className='create-invoice-card-small-bottom-container-quantity'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item2quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 2 + 'quantity'} name='item2quantity' value={this.state.item2quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item2price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 2 + 'price'} name='item2price' value={this.state.item2price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item2total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(2)}/>
										</div>
									</div>

									<div className='create-invoice-card-small'>
										<div className='create-invoice-card-small-name-container'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item3name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 3 + 'name'} name='item3name' value={this.state.item3name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container'>
											<div className='create-invoice-card-small-bottom-container-quantity'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item3quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 3 + 'quantity'} name='item3quantity' value={this.state.item3quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item3price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 3 + 'price'} name='item3price' value={this.state.item3price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item3total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(3)}/>
										</div>
									</div>

									<div className='create-invoice-card-small'>
										<div className='create-invoice-card-small-name-container'>
											<span className='create-invoice-item-list-labels-div-name-span'>Item Name</span>
											<input className={this.state.item4name === '' ? 'create-item-card-name-input-small-error' : 'create-item-card-name-input-small'} type='text' id={this.state.id + 4 + 'name'} name='item4name' value={this.state.item4name} onChange={this.inputHandler} />
										</div>

										<div className='create-invoice-card-small-bottom-container'>
											<div className='create-invoice-card-small-bottom-container-quantity'>
												<span className='create-invoice-item-list-labels-div-qty-span'>Qty.</span>
												<input className={this.state.item4quantity === '' ? 'create-item-card-quantity-input-small-error' : 'create-item-card-quantity-input-small'} type='text' id={this.state.id + 4 + 'quantity'} name='item4quantity' value={this.state.item4quantity} onChange={this.itemQuantityInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-price'>
												<span className='create-invoice-item-list-labels-div-price-span'>Price</span>
												<input className={this.state.item4price === '' ? 'create-item-card-price-input-small-error': 'create-item-card-price-input-small'} type='text' id={this.state.id + 4 + 'price'} name='item4price' value={this.state.item4price} onChange={this.itemPriceInputHandler} />
											</div>

											<div className='create-invoice-card-small-bottom-container-total'>
												<span className='create-invoice-item-list-labels-div-total-span'>Total</span>
												<span className='create-item-card-total-span'>{Number(this.state.item4total).toFixed(2)}</span>
											</div>

											<img src={DeleteIcon} alt='Trash Can' className='create-item-card-trash-can-small' onClick={() => this.deleteItem(4)}/>
										</div>
									</div>
								</div>
							: null			
							}

							{this.state.senderAddressStreet === '' || this.state.senderAddressCity === '' || this.state.senderAddressPostCode === '' || this.state.senderAddressCountry === '' || this.state.clientName === '' || this.state.clientEmail === '' || this.state.clientAddressStreet === '' || this.state.clientAddressCity === '' || this.state.clientAddressPostCode === '' || this.state.clientAddressCountry === '' || this.state.createdAt === '' || this.state.description === '' ? 
								<div className='create-invoice-bottom-error-check'>
									<span>- All fields must be added</span>
									{this.state.senderAddressStreet === '' ?
										<span>- Sender Street must be added</span>
									:
										null
									}

									{this.state.senderAddressCity === '' ?
										<span>- Sender City must be added</span>
									:
										null
									}

									{this.state.senderAddressPostCode === '' ?
										<span>- Sender Post Code must be added</span>
									:
										null
									}

									{this.state.senderAddressCountry === '' ?
										<span>- Sender Country must be added</span>
									:
										null
									}

									{this.state.clientName === '' ?
										<span>- Client Name must be added</span>
									:
										null
									}

									{this.state.clientEmail === '' ?
										<span>- Client Email must be added</span>
									:
										null
									}

									{this.state.clientAddressStreet === '' ?
										<span>- Client Street must be added</span>
									:
										null
									}

									{this.state.clientAddressCity === '' ?
										<span>- Client City must be added</span>
									:
										null
									}

									{this.state.clientAddressPostCode === '' ?
										<span>- Client Post Code must be added</span>
									:
										null
									}

									{this.state.clientAddressCountry === '' ?
										<span>- Client Country must be added</span>
									:
										null
									}

									{this.state.createdAt === '' ?
										<span>- Invoice Date must be added</span>
									:
										null
									}

									{this.state.description === '' ?
										<span>- Description must be added</span>
									:
										null
									}
								</div>
							:
								null
							}

						</div>
						<div className='create-invoice-bottom-buttons-gradient-div' />

						<div className='create-invoice-bottom-buttons-div'>
							<div className='create-invoice-bottom-button-discard-div' onClick={this.cancelInvoice}>
								<span>Discard</span>
							</div>
							<div className='create-invoice-bottom-button-save-as-draft-div' onClick={this.saveAsDraft}>
								<span>Save as Draft</span>
							</div>
							<div className='create-invoice-bottom-button-save-and-send-div' onClick={this.saveAsPending}>
								<span>Save &amp; Send</span>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
}

CreateInvoice.contextType = AppContext;

export default CreateInvoice;