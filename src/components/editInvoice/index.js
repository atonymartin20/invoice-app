import React from 'react';
import { AppContext } from '../context/appContext.js';

import Navbar from '../navbar';
import '../../css/editInvoice.css';
import DownArrowIcon from '../../assets/icon-arrow-down.svg';
import DeleteIcon from '../../assets/icon-delete.svg';

class EditInvoice extends React.Component {

	cancelUpdates = (event) => {
		event.preventDefault();
		this.props.cancelUpdates();
	}

	saveUpdates = (event) => {
		event.preventDefault();
		this.props.saveUpdates();
	}

	updateItem = (location, key, value, newTotal) => {
		let item = this.state.items[location];
		item[key] = value;
		item.total = newTotal;

		let items = this.state.items;
		items[location] = item
		this.setState({
			items
		})
	}

	render() {
		console.log(this.props.senderAddressStreet, this.props.senderAddressStreet.length)
		if (this.context.state.darkMode === true) {
			return (
				<div className="edit-invoice-outside-div">
					<div className='edit-invoice-container-div-dark-mode'>
						<Navbar />
						<div className='edit-invoice-inside-container-div'>
							<span className='edit-invoice-id-span-dark-mode'>
								Edit <span className='edit-invoice-id-span-gray'>#</span>{this.props.id}
							</span>

							<div className='edit-invoice-bill-from-div'>
								<h5>Bill From</h5>
								
								{this.props.senderAddressStreet === '' ? 
									<div className='edit-invoice-bill-from-street-address-div-dark-mode-error'>
										<span>Street Address</span>
										<span className='edit-invoice-right-error-text'>can't be empty</span>
										<input type='text' id='senderAddressStreet' name='senderAddressStreet' value={this.props.senderAddressStreet} onChange={this.props.inputHandler} />
									</div>
								:
									<div className='edit-invoice-bill-from-street-address-div-dark-mode'>
										<span>Street Address</span>
										<input type='text' id='senderAddressStreet' name='senderAddressStreet' value={this.props.senderAddressStreet} onChange={this.props.inputHandler} />
									</div>
								}

								<div className='edit-invoice-bill-from-city-post-code-country-div'>
									{this.props.senderAddressCity === '' ?
										<div className='edit-invoice-bill-from-city-div-dark-mode-error'>
											<span>City</span>
											<span className='edit-invoice-right-error-text'>can't be empty</span>
											<input type='text' id='senderAddressCity' name='senderAddressCity' value={this.props.senderAddressCity} onChange={this.props.inputHandler} />
										</div>
									:
										<div className='edit-invoice-bill-from-city-div-dark-mode'>
											<span>City</span>
											<input type='text' id='senderAddressCity' name='senderAddressCity' value={this.props.senderAddressCity} onChange={this.props.inputHandler} />
										</div>	
									}

									{this.props.senderAddressPostCode === '' ?
										<div className='edit-invoice-bill-from-post-code-div-dark-mode-error'>
											<span>Post Code</span>
											<span className='edit-invoice-right-error-text'>can't be empty</span>
											<input type='text' id='senderAddressPostCode' name='senderAddressPostCode' value={this.props.senderAddressPostCode} onChange={this.props.inputHandler} />
										</div>
									:
										<div className='edit-invoice-bill-from-post-code-div-dark-mode'>
											<span>Post Code</span>
											<input type='text' id='senderAddressPostCode' name='senderAddressPostCode' value={this.props.senderAddressPostCode} onChange={this.props.inputHandler} />
										</div>				
									}

									{this.props.senderAddressCountry === '' ?
										<div className='edit-invoice-bill-from-country-div-dark-mode-error'>
											<span>Country</span>
											<span className='edit-invoice-right-error-text'>can't be empty</span>
											<input type='text' id='senderAddressCountry' name='senderAddressCountry' value={this.props.senderAddressCountry} onChange={this.props.inputHandler} />
										</div>
									:
										<div className='edit-invoice-bill-from-country-div-dark-mode'>
											<span>Country</span>
											<input type='text' id='senderAddressCountry' name='senderAddressCountry' value={this.props.senderAddressCountry} onChange={this.props.inputHandler} />
										</div>				
									}

								</div>
							</div>

							<div className='edit-invoice-bill-to-div'>
								<h5>Bill To</h5>

								{this.props.clientName === '' ?
									<div className='edit-invoice-bill-to-client-name-div-dark-mode-error'>
										<span>Client's Name</span>
										<span className='edit-invoice-right-error-text'>can't be empty</span>
										<input type='text' id='clientName' name='clientName' value={this.props.clientName} onChange={this.props.inputHandler} />
									</div>
								:
									<div className='edit-invoice-bill-to-client-name-div-dark-mode'>
										<span>Client's Name</span>
										<input type='text' id='clientName' name='clientName' value={this.props.clientName} onChange={this.props.inputHandler} />
									</div>
								}

								{this.props.clientEmail === '' ?
									<div className='edit-invoice-bill-to-client-email-div-dark-mode-error'>
										<span>Client's Email</span>
										<span className='edit-invoice-right-error-text'>can't be empty</span>
										<input type='text' id='clientEmail' name='clientEmail' value={this.props.clientEmail} onChange={this.props.inputHandler} />
									</div>
								:
									<div className='edit-invoice-bill-to-client-email-div-dark-mode'>
										<span>Client's Email</span>
										<input type='text' id='clientEmail' name='clientEmail' value={this.props.clientEmail} onChange={this.props.inputHandler} />
									</div>
								}

								{this.props.clientAddressStreet === '' ?
									<div className='edit-invoice-bill-to-street-address-div-dark-mode-error'>
										<span>Street Address</span>
										<span className='edit-invoice-right-error-text'>can't be empty</span>
										<input type='text' id='clientAddressStreet' name='clientAddressStreet' value={this.props.clientAddressStreet} onChange={this.props.inputHandler} />
									</div>
								:
									<div className='edit-invoice-bill-to-street-address-div-dark-mode'>
										<span>Street Address</span>
										<input type='text' id='clientAddressStreet' name='clientAddressStreet' value={this.props.clientAddressStreet} onChange={this.props.inputHandler} />
									</div>
								}

								<div className='edit-invoice-bill-to-city-post-code-country-div'>
									{this.props.clientAddressCity === '' ?
										<div className='edit-invoice-bill-to-city-div-dark-mode-error'>
											<span>City</span>
											<span className='edit-invoice-right-error-text'>can't be empty</span>
											<input type='text' id='clientAddressCity' name='clientAddressCity' value={this.props.clientAddressCity} onChange={this.props.inputHandler} />
										</div>
									:
										<div className='edit-invoice-bill-to-city-div-dark-mode'>
											<span>City</span>
											<input type='text' id='clientAddressCity' name='clientAddressCity' value={this.props.clientAddressCity} onChange={this.props.inputHandler} />
										</div>
									}

									{this.props.clientAddressPostCode === '' ?
										<div className='edit-invoice-bill-to-post-code-div-dark-mode-error'>
											<span>Post Code</span>
											<span className='edit-invoice-right-error-text'>can't be empty</span>
											<input type='text' id='clientAddressPostCode' name='clientAddressPostCode' value={this.props.clientAddressPostCode} onChange={this.props.inputHandler} />
										</div>
									:
										<div className='edit-invoice-bill-to-post-code-div-dark-mode'>
											<span>Post Code</span>
											<input type='text' id='clientAddressPostCode' name='clientAddressPostCode' value={this.props.clientAddressPostCode} onChange={this.props.inputHandler} />
										</div>
									}


									{this.props.clientAddressCountry === '' ?
										<div className='edit-invoice-bill-to-country-div-dark-mode-error'>
											<span>Country</span>
											<span className='edit-invoice-right-error-text'>can't be empty</span>
											<input type='text' id='clientAddressCountry' name='clientAddressCountry' value={this.props.clientAddressCountry} onChange={this.props.inputHandler} />
										</div>
									:
										<div className='edit-invoice-bill-to-country-div-dark-mode'>
											<span>Country</span>
											<input type='text' id='clientAddressCountry' name='clientAddressCountry' value={this.props.clientAddressCountry} onChange={this.props.inputHandler} />
										</div>
									}

								</div>
							</div>

							<div className='edit-invoice-invoice-date-payment-terms-div'>
								{this.props.createdAt === '' ? 
									<div className='edit-invoice-invoice-date-div-dark-mode-error'>
										<span>Invoice Date</span>
										<span className='edit-invoice-right-error-text'>can't be empty</span>
										<input type='text' id='createdAt' name='createdAt' placeholder='YYYY-MM-DD' value={this.props.createdAt} onChange={this.props.inputHandler} />
									</div>
								:
									<div className='edit-invoice-invoice-date-div-dark-mode'>
										<span>Invoice Date</span>
										<input type='text' id='createdAt' name='createdAt' placeholder='YYYY-MM-DD' value={this.props.createdAt} onChange={this.props.inputHandler} />
									</div>
								}
								
								<div className='edit-invoice-payment-terms-div-dark-mode'>
									<span>Payment Terms</span>
									{this.props.showOptions === true ? 
										<div className='edit-invoice-payment-terms-custom-select-container-div-dark-mode'>
											<div className='edit-invoice-payment-terms-custom-select-dark-mode' onClick={this.props.flipOptions}>
												{this.props.paymentTerms > 1 ? 
													<span>Net {this.props.paymentTerms} Days</span>
												:
													<span>Net {this.props.paymentTerms} Day</span>
												}
												<img src={DownArrowIcon} alt='up-arrow' className='down-arrow-icon-reversed' />
											</div>

											<div className='edit-invoice-payment-terms-custom-select-option-container-div-dark-mode'>
												<span onClick={() => this.props.updatePaymentTerms(1)}>Net 1 Day</span>
												<span onClick={() => this.props.updatePaymentTerms(7)}>Net 7 Days</span>
												<span onClick={() => this.props.updatePaymentTerms(14)}>Net 14 Days</span>
												<span onClick={() => this.props.updatePaymentTerms(30)}>Net 30 Days</span>
											</div>
										</div>
									:
										<div className='edit-invoice-payment-terms-custom-select-dark-mode' onClick={this.props.flipOptions}>
											{this.props.paymentTerms > 1 ? 
												<span>Net {this.props.paymentTerms} Days</span>
											:
												<span>Net {this.props.paymentTerms} Day</span>
											}
											<img src={DownArrowIcon} alt='down-arrow' className='down-arrow-icon' />
										</div>
									}
								</div>
							</div>

							{this.props.description === '' ? 
								<div className='edit-invoice-project-description-div-dark-mode-error'>
									<span>Project Description</span>
									<span className='edit-invoice-right-error-text'>can't be empty</span>
									<input type='text' id='description' name='description' value={this.props.description} onChange={this.props.inputHandler} />
								</div>
							:
								<div className='edit-invoice-project-description-div-dark-mode'>
									<span>Project Description</span>
									<input type='text' id='description' name='description' value={this.props.description} onChange={this.props.inputHandler} />
								</div>
							}
							
							{this.props.items.length === 0 ? 
								<div className='edit-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='edit-invoice-item-list-labels-div-dark-mode'>
										<span className='edit-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='edit-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='edit-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='edit-invoice-item-list-labels-div-total-span'>Total</span>
									</div>
									<div className='edit-invoice-add-new-item-div' onClick={this.props.addItem}>
										<span>+ Add New Item</span>	
									</div>
								</div>				
							: null
							}

							{this.props.items.length === 1 ? 
								<div className='edit-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='edit-invoice-item-list-labels-div-dark-mode'>
										<span className='edit-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='edit-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='edit-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='edit-invoice-item-list-labels-div-total-span'>Total</span>
									</div>
									<div className='edit-item-card-div-dark-mode'>
										{this.props.item0name === '' ? 
											<input className='edit-item-card-name-input-error' type='text' id={this.props.id + 0 + 'name'} name='item0name' value={this.props.item0name} onChange={this.props.inputHandler} />
										:
											<input className='edit-item-card-name-input' type='text' id={this.props.id + 0 + 'name'} name='item0name' value={this.props.item0name} onChange={this.props.inputHandler} />
										}

										{this.props.item0quantity === '' ?
											<input className='edit-item-card-quantity-input-error' type='text' id={this.props.id + 0 + 'quantity'} name='item0quantity' value={this.props.item0quantity} onChange={this.props.itemQuantityInputHandler} />
										:
											<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 0 + 'quantity'} name='item0quantity' value={this.props.item0quantity} onChange={this.props.itemQuantityInputHandler} />
										}

										{this.props.item0price === '' ?
											<input className='edit-item-card-price-input-error' type='text' id={this.props.id + 0 + 'price'} name='item0price' value={this.props.item0price} onChange={this.props.itemPriceInputHandler} />
										:
											<input className='edit-item-card-price-input' type='text' id={this.props.id + 0 + 'price'} name='item0price' value={this.props.item0price} onChange={this.props.itemPriceInputHandler} />
										}
										<span className='edit-item-card-total-span'>{Number(this.props.item0total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(0)}/>
									</div>
									<div className='edit-invoice-add-new-item-div-dark-mode' onClick={this.props.addItem}>
										<span>+ Add New Item</span>	
									</div>
								</div>
							: null			
							}

							{this.props.items.length === 2 ? 
								<div className='edit-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='edit-invoice-item-list-labels-div-dark-mode'>
										<span className='edit-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='edit-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='edit-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='edit-invoice-item-list-labels-div-total-span'>Total</span>
									</div>
									<div className='edit-item-card-div-dark-mode'>
										{this.props.item0name === '' ? 
											<input className='edit-item-card-name-input-error' type='text' id={this.props.id + 0 + 'name'} name='item0name' value={this.props.item0name} onChange={this.props.inputHandler} />
										:
											<input className='edit-item-card-name-input' type='text' id={this.props.id + 0 + 'name'} name='item0name' value={this.props.item0name} onChange={this.props.inputHandler} />
										}

										{this.props.item0quantity === '' ?
											<input className='edit-item-card-quantity-input-error' type='text' id={this.props.id + 0 + 'quantity'} name='item0quantity' value={this.props.item0quantity} onChange={this.props.itemQuantityInputHandler} />
										:
											<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 0 + 'quantity'} name='item0quantity' value={this.props.item0quantity} onChange={this.props.itemQuantityInputHandler} />
										}

										{this.props.item0price === '' ?
											<input className='edit-item-card-price-input-error' type='text' id={this.props.id + 0 + 'price'} name='item0price' value={this.props.item0price} onChange={this.props.itemPriceInputHandler} />
										:
											<input className='edit-item-card-price-input' type='text' id={this.props.id + 0 + 'price'} name='item0price' value={this.props.item0price} onChange={this.props.itemPriceInputHandler} />
										}
										<span className='edit-item-card-total-span'>{Number(this.props.item0total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(0)}/>
									</div>

									<div className='edit-item-card-div-dark-mode'>
										{this.props.item1name === '' ? 
											<input className='edit-item-card-name-input-error' type='text' id={this.props.id + 1 + 'name'} name='item1name' value={this.props.item1name} onChange={this.props.inputHandler} />
										:
											<input className='edit-item-card-name-input' type='text' id={this.props.id + 1 + 'name'} name='item1name' value={this.props.item1name} onChange={this.props.inputHandler} />
										}

										{this.props.item1quantity === '' ?
											<input className='edit-item-card-quantity-input-error' type='text' id={this.props.id + 1 + 'quantity'} name='item1quantity' value={this.props.item1quantity} onChange={this.props.itemQuantityInputHandler} />
										:
											<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 1 + 'quantity'} name='item1quantity' value={this.props.item1quantity} onChange={this.props.itemQuantityInputHandler} />
										}

										{this.props.item1price === '' ?
											<input className='edit-item-card-price-input-error' type='text' id={this.props.id + 1 + 'price'} name='item1price' value={this.props.item1price} onChange={this.props.itemPriceInputHandler} />
										:
											<input className='edit-item-card-price-input' type='text' id={this.props.id + 1 + 'price'} name='item1price' value={this.props.item1price} onChange={this.props.itemPriceInputHandler} />
										}
										<span className='edit-item-card-total-span'>{Number(this.props.item1total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(1)}/>
									</div>
									<div className='edit-invoice-add-new-item-div-dark-mode' onClick={this.props.addItem}>
										<span>+ Add New Item</span>	
									</div>
								</div>
							: null			
							}

							{this.props.items.length === 3 ? 
								<div className='edit-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='edit-invoice-item-list-labels-div-dark-mode'>
										<span className='edit-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='edit-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='edit-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='edit-invoice-item-list-labels-div-total-span'>Total</span>
									</div>
									<div className='edit-item-card-div-dark-mode'>
										{this.props.item0name === '' ? 
											<input className='edit-item-card-name-input-error' type='text' id={this.props.id + 0 + 'name'} name='item0name' value={this.props.item0name} onChange={this.props.inputHandler} />
										:
											<input className='edit-item-card-name-input' type='text' id={this.props.id + 0 + 'name'} name='item0name' value={this.props.item0name} onChange={this.props.inputHandler} />
										}

										{this.props.item0quantity === '' ?
											<input className='edit-item-card-quantity-input-error' type='text' id={this.props.id + 0 + 'quantity'} name='item0quantity' value={this.props.item0quantity} onChange={this.props.itemQuantityInputHandler} />
										:
											<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 0 + 'quantity'} name='item0quantity' value={this.props.item0quantity} onChange={this.props.itemQuantityInputHandler} />
										}

										{this.props.item0price === '' ?
											<input className='edit-item-card-price-input-error' type='text' id={this.props.id + 0 + 'price'} name='item0price' value={this.props.item0price} onChange={this.props.itemPriceInputHandler} />
										:
											<input className='edit-item-card-price-input' type='text' id={this.props.id + 0 + 'price'} name='item0price' value={this.props.item0price} onChange={this.props.itemPriceInputHandler} />
										}
										<span className='edit-item-card-total-span'>{Number(this.props.item0total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(0)}/>
									</div>

									<div className='edit-item-card-div-dark-mode'>
										{this.props.item1name === '' ? 
											<input className='edit-item-card-name-input-error' type='text' id={this.props.id + 1 + 'name'} name='item1name' value={this.props.item1name} onChange={this.props.inputHandler} />
										:
											<input className='edit-item-card-name-input' type='text' id={this.props.id + 1 + 'name'} name='item1name' value={this.props.item1name} onChange={this.props.inputHandler} />
										}

										{this.props.item1quantity === '' ?
											<input className='edit-item-card-quantity-input-error' type='text' id={this.props.id + 1 + 'quantity'} name='item1quantity' value={this.props.item1quantity} onChange={this.props.itemQuantityInputHandler} />
										:
											<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 1 + 'quantity'} name='item1quantity' value={this.props.item1quantity} onChange={this.props.itemQuantityInputHandler} />
										}

										{this.props.item1price === '' ?
											<input className='edit-item-card-price-input-error' type='text' id={this.props.id + 1 + 'price'} name='item1price' value={this.props.item1price} onChange={this.props.itemPriceInputHandler} />
										:
											<input className='edit-item-card-price-input' type='text' id={this.props.id + 1 + 'price'} name='item1price' value={this.props.item1price} onChange={this.props.itemPriceInputHandler} />
										}
										<span className='edit-item-card-total-span'>{Number(this.props.item1total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(1)}/>
									</div>

									<div className='edit-item-card-div-dark-mode'>
										{this.props.item2name === '' ? 
											<input className='edit-item-card-name-input-error' type='text' id={this.props.id + 2 + 'name'} name='item2name' value={this.props.item2name} onChange={this.props.inputHandler} />
										:
											<input className='edit-item-card-name-input' type='text' id={this.props.id + 2 + 'name'} name='item2name' value={this.props.item2name} onChange={this.props.inputHandler} />
										}

										{this.props.item2quantity === '' ?
											<input className='edit-item-card-quantity-input-error' type='text' id={this.props.id + 2 + 'quantity'} name='item2quantity' value={this.props.item2quantity} onChange={this.props.itemQuantityInputHandler} />
										:
											<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 2 + 'quantity'} name='item2quantity' value={this.props.item2quantity} onChange={this.props.itemQuantityInputHandler} />
										}

										{this.props.item2price === '' ?
											<input className='edit-item-card-price-input-error' type='text' id={this.props.id + 2 + 'price'} name='item2price' value={this.props.item2price} onChange={this.props.itemPriceInputHandler} />
										:
											<input className='edit-item-card-price-input' type='text' id={this.props.id + 2 + 'price'} name='item2price' value={this.props.item2price} onChange={this.props.itemPriceInputHandler} />
										}
										<span className='edit-item-card-total-span'>{Number(this.props.item2total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(2)}/>
									</div>
									<div className='edit-invoice-add-new-item-div-dark-mode' onClick={this.props.addItem}>
										<span>+ Add New Item</span>	
									</div>
								</div>
							: null			
							}

							{this.props.items.length === 4 ? 
								<div className='edit-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='edit-invoice-item-list-labels-div-dark-mode'>
										<span className='edit-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='edit-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='edit-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='edit-invoice-item-list-labels-div-total-span'>Total</span>
									</div>
									<div className='edit-item-card-div-dark-mode'>
										{this.props.item0name === '' ? 
											<input className='edit-item-card-name-input-error' type='text' id={this.props.id + 0 + 'name'} name='item0name' value={this.props.item0name} onChange={this.props.inputHandler} />
										:
											<input className='edit-item-card-name-input' type='text' id={this.props.id + 0 + 'name'} name='item0name' value={this.props.item0name} onChange={this.props.inputHandler} />
										}

										{this.props.item0quantity === '' ?
											<input className='edit-item-card-quantity-input-error' type='text' id={this.props.id + 0 + 'quantity'} name='item0quantity' value={this.props.item0quantity} onChange={this.props.itemQuantityInputHandler} />
										:
											<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 0 + 'quantity'} name='item0quantity' value={this.props.item0quantity} onChange={this.props.itemQuantityInputHandler} />
										}

										{this.props.item0price === '' ?
											<input className='edit-item-card-price-input-error' type='text' id={this.props.id + 0 + 'price'} name='item0price' value={this.props.item0price} onChange={this.props.itemPriceInputHandler} />
										:
											<input className='edit-item-card-price-input' type='text' id={this.props.id + 0 + 'price'} name='item0price' value={this.props.item0price} onChange={this.props.itemPriceInputHandler} />
										}
										<span className='edit-item-card-total-span'>{Number(this.props.item0total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(0)}/>
									</div>

									<div className='edit-item-card-div-dark-mode'>
										{this.props.item1name === '' ? 
											<input className='edit-item-card-name-input-error' type='text' id={this.props.id + 1 + 'name'} name='item1name' value={this.props.item1name} onChange={this.props.inputHandler} />
										:
											<input className='edit-item-card-name-input' type='text' id={this.props.id + 1 + 'name'} name='item1name' value={this.props.item1name} onChange={this.props.inputHandler} />
										}

										{this.props.item1quantity === '' ?
											<input className='edit-item-card-quantity-input-error' type='text' id={this.props.id + 1 + 'quantity'} name='item1quantity' value={this.props.item1quantity} onChange={this.props.itemQuantityInputHandler} />
										:
											<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 1 + 'quantity'} name='item1quantity' value={this.props.item1quantity} onChange={this.props.itemQuantityInputHandler} />
										}

										{this.props.item1price === '' ?
											<input className='edit-item-card-price-input-error' type='text' id={this.props.id + 1 + 'price'} name='item1price' value={this.props.item1price} onChange={this.props.itemPriceInputHandler} />
										:
											<input className='edit-item-card-price-input' type='text' id={this.props.id + 1 + 'price'} name='item1price' value={this.props.item1price} onChange={this.props.itemPriceInputHandler} />
										}
										<span className='edit-item-card-total-span'>{Number(this.props.item1total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(1)}/>
									</div>

									<div className='edit-item-card-div-dark-mode'>
										{this.props.item2name === '' ? 
											<input className='edit-item-card-name-input-error' type='text' id={this.props.id + 2 + 'name'} name='item2name' value={this.props.item2name} onChange={this.props.inputHandler} />
										:
											<input className='edit-item-card-name-input' type='text' id={this.props.id + 2 + 'name'} name='item2name' value={this.props.item2name} onChange={this.props.inputHandler} />
										}

										{this.props.item2quantity === '' ?
											<input className='edit-item-card-quantity-input-error' type='text' id={this.props.id + 2 + 'quantity'} name='item2quantity' value={this.props.item2quantity} onChange={this.props.itemQuantityInputHandler} />
										:
											<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 2 + 'quantity'} name='item2quantity' value={this.props.item2quantity} onChange={this.props.itemQuantityInputHandler} />
										}

										{this.props.item2price === '' ?
											<input className='edit-item-card-price-input-error' type='text' id={this.props.id + 2 + 'price'} name='item2price' value={this.props.item2price} onChange={this.props.itemPriceInputHandler} />
										:
											<input className='edit-item-card-price-input' type='text' id={this.props.id + 2 + 'price'} name='item2price' value={this.props.item2price} onChange={this.props.itemPriceInputHandler} />
										}
										<span className='edit-item-card-total-span'>{Number(this.props.item2total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(2)}/>
									</div>
									
									<div className='edit-item-card-div-dark-mode'>
										{this.props.item3name === '' ? 
											<input className='edit-item-card-name-input-error' type='text' id={this.props.id + 3 + 'name'} name='item3name' value={this.props.item3name} onChange={this.props.inputHandler} />
										:
											<input className='edit-item-card-name-input' type='text' id={this.props.id + 3 + 'name'} name='item3name' value={this.props.item3name} onChange={this.props.inputHandler} />
										}

										{this.props.item3quantity === '' ?
											<input className='edit-item-card-quantity-input-error' type='text' id={this.props.id + 3 + 'quantity'} name='item3quantity' value={this.props.item3quantity} onChange={this.props.itemQuantityInputHandler} />
										:
											<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 3 + 'quantity'} name='item3quantity' value={this.props.item3quantity} onChange={this.props.itemQuantityInputHandler} />
										}

										{this.props.item3price === '' ?
											<input className='edit-item-card-price-input-error' type='text' id={this.props.id + 3 + 'price'} name='item3price' value={this.props.item3price} onChange={this.props.itemPriceInputHandler} />
										:
											<input className='edit-item-card-price-input' type='text' id={this.props.id + 3 + 'price'} name='item3price' value={this.props.item3price} onChange={this.props.itemPriceInputHandler} />
										}
										<span className='edit-item-card-total-span'>{Number(this.props.item3total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(3)}/>
									</div>
									<div className='edit-invoice-add-new-item-div-dark-mode' onClick={this.props.addItem}>
										<span>+ Add New Item</span>	
									</div>
								</div>
							: null			
							}

							{this.props.items.length === 5 ? 
								<div className='edit-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='edit-invoice-item-list-labels-div-dark-mode'>
										<span className='edit-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='edit-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='edit-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='edit-invoice-item-list-labels-div-total-span'>Total</span>
									</div>
									<div className='edit-item-card-div-dark-mode'>
										{this.props.item0name === '' ? 
											<input className='edit-item-card-name-input-error' type='text' id={this.props.id + 0 + 'name'} name='item0name' value={this.props.item0name} onChange={this.props.inputHandler} />
										:
											<input className='edit-item-card-name-input' type='text' id={this.props.id + 0 + 'name'} name='item0name' value={this.props.item0name} onChange={this.props.inputHandler} />
										}

										{this.props.item0quantity === '' ?
											<input className='edit-item-card-quantity-input-error' type='text' id={this.props.id + 0 + 'quantity'} name='item0quantity' value={this.props.item0quantity} onChange={this.props.itemQuantityInputHandler} />
										:
											<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 0 + 'quantity'} name='item0quantity' value={this.props.item0quantity} onChange={this.props.itemQuantityInputHandler} />
										}

										{this.props.item0price === '' ?
											<input className='edit-item-card-price-input-error' type='text' id={this.props.id + 0 + 'price'} name='item0price' value={this.props.item0price} onChange={this.props.itemPriceInputHandler} />
										:
											<input className='edit-item-card-price-input' type='text' id={this.props.id + 0 + 'price'} name='item0price' value={this.props.item0price} onChange={this.props.itemPriceInputHandler} />
										}
										<span className='edit-item-card-total-span'>{Number(this.props.item0total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(0)}/>
									</div>

									<div className='edit-item-card-div-dark-mode'>
										{this.props.item1name === '' ? 
											<input className='edit-item-card-name-input-error' type='text' id={this.props.id + 1 + 'name'} name='item1name' value={this.props.item1name} onChange={this.props.inputHandler} />
										:
											<input className='edit-item-card-name-input' type='text' id={this.props.id + 1 + 'name'} name='item1name' value={this.props.item1name} onChange={this.props.inputHandler} />
										}

										{this.props.item1quantity === '' ?
											<input className='edit-item-card-quantity-input-error' type='text' id={this.props.id + 1 + 'quantity'} name='item1quantity' value={this.props.item1quantity} onChange={this.props.itemQuantityInputHandler} />
										:
											<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 1 + 'quantity'} name='item1quantity' value={this.props.item1quantity} onChange={this.props.itemQuantityInputHandler} />
										}

										{this.props.item1price === '' ?
											<input className='edit-item-card-price-input-error' type='text' id={this.props.id + 1 + 'price'} name='item1price' value={this.props.item1price} onChange={this.props.itemPriceInputHandler} />
										:
											<input className='edit-item-card-price-input' type='text' id={this.props.id + 1 + 'price'} name='item1price' value={this.props.item1price} onChange={this.props.itemPriceInputHandler} />
										}
										<span className='edit-item-card-total-span'>{Number(this.props.item1total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(1)}/>
									</div>

									<div className='edit-item-card-div-dark-mode'>
										{this.props.item2name === '' ? 
											<input className='edit-item-card-name-input-error' type='text' id={this.props.id + 2 + 'name'} name='item2name' value={this.props.item2name} onChange={this.props.inputHandler} />
										:
											<input className='edit-item-card-name-input' type='text' id={this.props.id + 2 + 'name'} name='item2name' value={this.props.item2name} onChange={this.props.inputHandler} />
										}

										{this.props.item2quantity === '' ?
											<input className='edit-item-card-quantity-input-error' type='text' id={this.props.id + 2 + 'quantity'} name='item2quantity' value={this.props.item2quantity} onChange={this.props.itemQuantityInputHandler} />
										:
											<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 2 + 'quantity'} name='item2quantity' value={this.props.item2quantity} onChange={this.props.itemQuantityInputHandler} />
										}

										{this.props.item2price === '' ?
											<input className='edit-item-card-price-input-error' type='text' id={this.props.id + 2 + 'price'} name='item2price' value={this.props.item2price} onChange={this.props.itemPriceInputHandler} />
										:
											<input className='edit-item-card-price-input' type='text' id={this.props.id + 2 + 'price'} name='item2price' value={this.props.item2price} onChange={this.props.itemPriceInputHandler} />
										}
										<span className='edit-item-card-total-span'>{Number(this.props.item2total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(2)}/>
									</div>
									
									<div className='edit-item-card-div-dark-mode'>
										{this.props.item3name === '' ? 
											<input className='edit-item-card-name-input-error' type='text' id={this.props.id + 3 + 'name'} name='item3name' value={this.props.item3name} onChange={this.props.inputHandler} />
										:
											<input className='edit-item-card-name-input' type='text' id={this.props.id + 3 + 'name'} name='item3name' value={this.props.item3name} onChange={this.props.inputHandler} />
										}

										{this.props.item3quantity === '' ?
											<input className='edit-item-card-quantity-input-error' type='text' id={this.props.id + 3 + 'quantity'} name='item3quantity' value={this.props.item3quantity} onChange={this.props.itemQuantityInputHandler} />
										:
											<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 3 + 'quantity'} name='item3quantity' value={this.props.item3quantity} onChange={this.props.itemQuantityInputHandler} />
										}

										{this.props.item3price === '' ?
											<input className='edit-item-card-price-input-error' type='text' id={this.props.id + 3 + 'price'} name='item3price' value={this.props.item3price} onChange={this.props.itemPriceInputHandler} />
										:
											<input className='edit-item-card-price-input' type='text' id={this.props.id + 3 + 'price'} name='item3price' value={this.props.item3price} onChange={this.props.itemPriceInputHandler} />
										}
										<span className='edit-item-card-total-span'>{Number(this.props.item3total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(3)}/>
									</div>
																		
									<div className='edit-item-card-div-dark-mode'>
										{this.props.item4name === '' ? 
											<input className='edit-item-card-name-input-error' type='text' id={this.props.id + 4 + 'name'} name='item4name' value={this.props.item4name} onChange={this.props.inputHandler} />
										:
											<input className='edit-item-card-name-input' type='text' id={this.props.id + 4 + 'name'} name='item4name' value={this.props.item4name} onChange={this.props.inputHandler} />
										}

										{this.props.item4quantity === '' ?
											<input className='edit-item-card-quantity-input-error' type='text' id={this.props.id + 4 + 'quantity'} name='item4quantity' value={this.props.item4quantity} onChange={this.props.itemQuantityInputHandler} />
										:
											<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 4 + 'quantity'} name='item4quantity' value={this.props.item4quantity} onChange={this.props.itemQuantityInputHandler} />
										}

										{this.props.item4price === '' ?
											<input className='edit-item-card-price-input-error' type='text' id={this.props.id + 4 + 'price'} name='item4price' value={this.props.item4price} onChange={this.props.itemPriceInputHandler} />
										:
											<input className='edit-item-card-price-input' type='text' id={this.props.id + 4 + 'price'} name='item4price' value={this.props.item4price} onChange={this.props.itemPriceInputHandler} />
										}
										<span className='edit-item-card-total-span'>{Number(this.props.item4total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(4)}/>
									</div>
								</div>
							: null			
							}

							<div className='edit-invoice-bottom-buttons-div'>
								<div className='edit-invoice-bottom-button-cancel-div-dark-mode'>
									<span onClick={this.cancelUpdates}>Cancel</span>
								</div>
								<div className='edit-invoice-bottom-button-save-div-dark-mode'>
									<span onClick={this.saveUpdates}>Save Changes</span>
								</div>
							</div>
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
								Edit <span className='edit-invoice-id-span-gray'>#</span>{this.props.id}
							</span>

							<div className='edit-invoice-bill-from-div'>
								<h5>Bill From</h5>
								<div className='edit-invoice-bill-from-street-address-div'>
									<span>Street Address</span>
									<input type='text' id='senderAddressStreet' name='senderAddressStreet' value={this.props.senderAddressStreet} onChange={this.props.inputHandler} />
								</div>
								<div className='edit-invoice-bill-from-city-post-code-country-div'>
									<div className='edit-invoice-bill-from-city-div'>
										<span>City</span>
										<input type='text' id='senderAddressCity' name='senderAddressCity' value={this.props.senderAddressCity} onChange={this.props.inputHandler} />
									</div>

									<div className='edit-invoice-bill-from-post-code-div'>
										<span>Post Code</span>
										<input type='text' id='senderAddressPostCode' name='senderAddressPostCode' value={this.props.senderAddressPostCode} onChange={this.props.inputHandler} />
									</div>

									<div className='edit-invoice-bill-from-country-div'>
										<span>Country</span>
										<input type='text' id='senderAddressCountry' name='senderAddressCountry' value={this.props.senderAddressCountry} onChange={this.props.inputHandler} />

									</div>
								</div>
							</div>

							<div className='edit-invoice-bill-to-div'>
								<h5>Bill To</h5>
								<div className='edit-invoice-bill-to-client-name-div'>
									<span>Client's Name</span>
									<input type='text' id='clientName' name='clientName' value={this.props.clientName} onChange={this.props.inputHandler} />

								</div>

								<div className='edit-invoice-bill-to-client-email-div'>
									<span>Client's Email</span>
									<input type='text' id='clientEmail' name='clientEmail' value={this.props.clientEmail} onChange={this.props.inputHandler} />

								</div>

								<div className='edit-invoice-bill-to-street-address-div'>
									<span>Street Address</span>
									<input type='text' id='clientAddressStreet' name='clientAddressStreet' value={this.props.clientAddressStreet} onChange={this.props.inputHandler} />

								</div>

								<div className='edit-invoice-bill-to-city-post-code-country-div'>
									<div className='edit-invoice-bill-to-city-div'>
										<span>City</span>
										<input type='text' id='clientAddressCity' name='clientAddressCity' value={this.props.clientAddressCity} onChange={this.props.inputHandler} />

									</div>

									<div className='edit-invoice-bill-to-post-code-div'>
										<span>Post Code</span>
										<input type='text' id='clientAddressPostCode' name='clientAddressPostCode' value={this.props.clientAddressPostCode} onChange={this.props.inputHandler} />

									</div>

									<div className='edit-invoice-bill-to-country-div'>
										<span>Country</span>
										<input type='text' id='clientAddressCountry' name='clientAddressCountry' value={this.props.clientAddressCountry} onChange={this.props.inputHandler} />

									</div>
								</div>
							</div>

							<div className='edit-invoice-invoice-date-payment-terms-div'>
								<div className='edit-invoice-invoice-date-div'>
									<span>Invoice Date</span>
									<input type='text' id='createdAt' name='createdAt' placeholder='YYYY-MM-DD' value={this.props.createdAt} onChange={this.props.inputHandler} />
								</div>

								<div className='edit-invoice-payment-terms-div'>
									<span>Payment Terms</span>
									{this.props.showOptions === true ? 
										<div className='edit-invoice-payment-terms-custom-select-container-div'>
											<div className='edit-invoice-payment-terms-custom-select' onClick={this.props.flipOptions}>
												{this.props.paymentTerms > 1 ? 
													<span>Net {this.props.paymentTerms} Days</span>
												:
													<span>Net {this.props.paymentTerms} Day</span>
												}
												<img src={DownArrowIcon} alt='up-arrow' className='down-arrow-icon-reversed' />
											</div>

											<div className='edit-invoice-payment-terms-custom-select-option-container-div'>
												<span onClick={() => this.props.updatePaymentTerms(1)}>Net 1 Day</span>
												<span onClick={() => this.props.updatePaymentTerms(7)}>Net 7 Days</span>
												<span onClick={() => this.props.updatePaymentTerms(14)}>Net 14 Days</span>
												<span onClick={() => this.props.updatePaymentTerms(30)}>Net 30 Days</span>
											</div>
										</div>
									:
										<div className='edit-invoice-payment-terms-custom-select' onClick={this.props.flipOptions}>
											{this.props.paymentTerms > 1 ? 
												<span>Net {this.props.paymentTerms} Days</span>
											:
												<span>Net {this.props.paymentTerms} Day</span>
											}
											<img src={DownArrowIcon} alt='down-arrow' className='down-arrow-icon' />
										</div>
									}
								</div>
							</div>

							<div className='edit-invoice-project-description-div'>
								<span>Project Description</span>
								<input type='text' id='description' name='description' value={this.props.description} onChange={this.props.inputHandler} />
							</div>
							
							{this.props.items.length === 0 ? 
								<div className='edit-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='edit-invoice-item-list-labels-div'>
										<span className='edit-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='edit-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='edit-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='edit-invoice-item-list-labels-div-total-span'>Total</span>
									</div>
									<div className='edit-invoice-add-new-item-div' onClick={this.props.addItem}>
										<span>+ Add New Item</span>	
									</div>
								</div>				
							: null
							}

							{this.props.items.length === 1 ? 
								<div className='edit-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='edit-invoice-item-list-labels-div'>
										<span className='edit-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='edit-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='edit-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='edit-invoice-item-list-labels-div-total-span'>Total</span>
									</div>
									<div className='edit-item-card-div'>
										<input className='edit-item-card-name-input' type='text' id={this.props.id + 0 + 'name'} name='item0name' value={this.props.item0name} onChange={this.props.inputHandler} />
										<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 0 + 'quantity'} name='item0quantity' value={this.props.item0quantity} onChange={this.props.itemQuantityInputHandler} />
										<input className='edit-item-card-price-input' type='text' id={this.props.id + 0 + 'price'} name='item0price' value={this.props.item0price} onChange={this.props.itemPriceInputHandler} />
										<span className='edit-item-card-total-span'>{Number(this.props.item0total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(0)}/>
									</div>
									<div className='edit-invoice-add-new-item-div' onClick={this.props.addItem}>
										<span>+ Add New Item</span>	
									</div>
								</div>
							: null			
							}

							{this.props.items.length === 2 ? 
								<div className='edit-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='edit-invoice-item-list-labels-div'>
										<span className='edit-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='edit-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='edit-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='edit-invoice-item-list-labels-div-total-span'>Total</span>
									</div>
									<div className='edit-item-card-div'>
										<input className='edit-item-card-name-input' type='text' id={this.props.id + 0 + 'name'} name='item0name' value={this.props.item0name} onChange={this.props.inputHandler} />
										<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 0 + 'quantity'} name='item0quantity' value={this.props.item0quantity} onChange={this.props.itemQuantityInputHandler} />
										<input className='edit-item-card-price-input' type='text' id={this.props.id + 0 + 'price'} name='item0price' value={this.props.item0price} onChange={this.props.itemPriceInputHandler} />
										<span className='edit-item-card-total-span'>{Number(this.props.item0total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(0)}/>
									</div>

									<div className='edit-item-card-div'>
										<input className='edit-item-card-name-input' type='text' id={this.props.id + 1 + 'name'} name='item1name' value={this.props.item1name} onChange={this.props.inputHandler} />
										<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 1 + 'quantity'} name='item1quantity' value={this.props.item1quantity} onChange={this.props.itemQuantityInputHandler} />
										<input className='edit-item-card-price-input' type='text' id={this.props.id + 1 + 'price'} name='item1price' value={this.props.item1price} onChange={this.props.itemPriceInputHandler} />
										<span className='edit-item-card-total-span'>{Number(this.props.item1total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(1)}/>
									</div>
									<div className='edit-invoice-add-new-item-div' onClick={this.props.addItem}>
										<span>+ Add New Item</span>	
									</div>
								</div>
							: null			
							}

							{this.props.items.length === 3 ? 
								<div className='edit-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='edit-invoice-item-list-labels-div'>
										<span className='edit-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='edit-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='edit-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='edit-invoice-item-list-labels-div-total-span'>Total</span>
									</div>
									<div className='edit-item-card-div'>
										<input className='edit-item-card-name-input' type='text' id={this.props.id + 0 + 'name'} name='item0name' value={this.props.item0name} onChange={this.props.inputHandler} />
										<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 0 + 'quantity'} name='item0quantity' value={this.props.item0quantity} onChange={this.props.itemQuantityInputHandler} />
										<input className='edit-item-card-price-input' type='text' id={this.props.id + 0 + 'price'} name='item0price' value={this.props.item0price} onChange={this.props.itemPriceInputHandler} />
										<span className='edit-item-card-total-span'>{Number(this.props.item0total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(0)}/>
									</div>

									<div className='edit-item-card-div'>
										<input className='edit-item-card-name-input' type='text' id={this.props.id + 1 + 'name'} name='item1name' value={this.props.item1name} onChange={this.props.inputHandler} />
										<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 1 + 'quantity'} name='item1quantity' value={this.props.item1quantity} onChange={this.props.itemQuantityInputHandler} />
										<input className='edit-item-card-price-input' type='text' id={this.props.id + 1 + 'price'} name='item1price' value={this.props.item1price} onChange={this.props.itemPriceInputHandler} />
										<span className='edit-item-card-total-span'>{Number(this.props.item1total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(1)}/>
									</div>

									<div className='edit-item-card-div'>
										<input className='edit-item-card-name-input' type='text' id={this.props.id + 2 + 'name'} name='item2name' value={this.props.item2name} onChange={this.props.inputHandler} />
										<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 2 + 'quantity'} name='item2quantity' value={this.props.item2quantity} onChange={this.props.itemQuantityInputHandler} />
										<input className='edit-item-card-price-input' type='text' id={this.props.id + 2 + 'price'} name='item2price' value={this.props.item2price} onChange={this.props.itemPriceInputHandler} />
										<span className='edit-item-card-total-span'>{Number(this.props.item2total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(2)}/>
									</div>
									<div className='edit-invoice-add-new-item-div' onClick={this.props.addItem}>
										<span>+ Add New Item</span>	
									</div>
								</div>
							: null			
							}

							{this.props.items.length === 4 ? 
								<div className='edit-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='edit-invoice-item-list-labels-div'>
										<span className='edit-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='edit-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='edit-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='edit-invoice-item-list-labels-div-total-span'>Total</span>
									</div>
									<div className='edit-item-card-div'>
										<input className='edit-item-card-name-input' type='text' id={this.props.id + 0 + 'name'} name='item0name' value={this.props.item0name} onChange={this.props.inputHandler} />
										<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 0 + 'quantity'} name='item0quantity' value={this.props.item0quantity} onChange={this.props.itemQuantityInputHandler} />
										<input className='edit-item-card-price-input' type='text' id={this.props.id + 0 + 'price'} name='item0price' value={this.props.item0price} onChange={this.props.itemPriceInputHandler} />
										<span className='edit-item-card-total-span'>{Number(this.props.item0total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(0)}/>
									</div>

									<div className='edit-item-card-div'>
										<input className='edit-item-card-name-input' type='text' id={this.props.id + 1 + 'name'} name='item1name' value={this.props.item1name} onChange={this.props.inputHandler} />
										<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 1 + 'quantity'} name='item1quantity' value={this.props.item1quantity} onChange={this.props.itemQuantityInputHandler} />
										<input className='edit-item-card-price-input' type='text' id={this.props.id + 1 + 'price'} name='item1price' value={this.props.item1price} onChange={this.props.itemPriceInputHandler} />
										<span className='edit-item-card-total-span'>{Number(this.props.item1total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(1)}/>
									</div>

									<div className='edit-item-card-div'>
										<input className='edit-item-card-name-input' type='text' id={this.props.id + 2 + 'name'} name='item2name' value={this.props.item2name} onChange={this.props.inputHandler} />
										<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 2 + 'quantity'} name='item2quantity' value={this.props.item2quantity} onChange={this.props.itemQuantityInputHandler} />
										<input className='edit-item-card-price-input' type='text' id={this.props.id + 2 + 'price'} name='item2price' value={this.props.item2price} onChange={this.props.itemPriceInputHandler} />
										<span className='edit-item-card-total-span'>{Number(this.props.item2total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(2)}/>
									</div>
									
									<div className='edit-item-card-div'>
										<input className='edit-item-card-name-input' type='text' id={this.props.id + 3 + 'name'} name='item3name' value={this.props.item3name} onChange={this.props.inputHandler} />
										<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 3 + 'quantity'} name='item3quantity' value={this.props.item3quantity} onChange={this.props.itemQuantityInputHandler} />
										<input className='edit-item-card-price-input' type='text' id={this.props.id + 3 + 'price'} name='item3price' value={this.props.item3price} onChange={this.props.itemPriceInputHandler} />
										<span className='edit-item-card-total-span'>{Number(this.props.item3total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(3)}/>
									</div>
									<div className='edit-invoice-add-new-item-div' onClick={this.props.addItem}>
										<span>+ Add New Item</span>	
									</div>
								</div>
							: null			
							}

							{this.props.items.length === 5 ? 
								<div className='edit-invoice-item-list-div'>
									<h2>Item List</h2>
									<div className='edit-invoice-item-list-labels-div'>
										<span className='edit-invoice-item-list-labels-div-name-span'>Item Name</span>
										<span className='edit-invoice-item-list-labels-div-qty-span'>Qty.</span>
										<span className='edit-invoice-item-list-labels-div-price-span'>Price</span>
										<span className='edit-invoice-item-list-labels-div-total-span'>Total</span>
									</div>
									<div className='edit-item-card-div'>
										<input className='edit-item-card-name-input' type='text' id={this.props.id + 0 + 'name'} name='item0name' value={this.props.item0name} onChange={this.props.inputHandler} />
										<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 0 + 'quantity'} name='item0quantity' value={this.props.item0quantity} onChange={this.props.itemQuantityInputHandler} />
										<input className='edit-item-card-price-input' type='text' id={this.props.id + 0 + 'price'} name='item0price' value={this.props.item0price} onChange={this.props.itemPriceInputHandler} />
										<span className='edit-item-card-total-span'>{Number(this.props.item0total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(0)}/>
									</div>

									<div className='edit-item-card-div'>
										<input className='edit-item-card-name-input' type='text' id={this.props.id + 1 + 'name'} name='item1name' value={this.props.item1name} onChange={this.props.inputHandler} />
										<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 1 + 'quantity'} name='item1quantity' value={this.props.item1quantity} onChange={this.props.itemQuantityInputHandler} />
										<input className='edit-item-card-price-input' type='text' id={this.props.id + 1 + 'price'} name='item1price' value={this.props.item1price} onChange={this.props.itemPriceInputHandler} />
										<span className='edit-item-card-total-span'>{Number(this.props.item1total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(1)}/>
									</div>

									<div className='edit-item-card-div'>
										<input className='edit-item-card-name-input' type='text' id={this.props.id + 2 + 'name'} name='item2name' value={this.props.item2name} onChange={this.props.inputHandler} />
										<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 2 + 'quantity'} name='item2quantity' value={this.props.item2quantity} onChange={this.props.itemQuantityInputHandler} />
										<input className='edit-item-card-price-input' type='text' id={this.props.id + 2 + 'price'} name='item2price' value={this.props.item2price} onChange={this.props.itemPriceInputHandler} />
										<span className='edit-item-card-total-span'>{Number(this.props.item2total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(2)}/>
									</div>
									
									<div className='edit-item-card-div'>
										<input className='edit-item-card-name-input' type='text' id={this.props.id + 3 + 'name'} name='item3name' value={this.props.item3name} onChange={this.props.inputHandler} />
										<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 3 + 'quantity'} name='item3quantity' value={this.props.item3quantity} onChange={this.props.itemQuantityInputHandler} />
										<input className='edit-item-card-price-input' type='text' id={this.props.id + 3 + 'price'} name='item3price' value={this.props.item3price} onChange={this.props.itemPriceInputHandler} />
										<span className='edit-item-card-total-span'>{Number(this.props.item3total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(3)}/>
									</div>
																		
									<div className='edit-item-card-div'>
										<input className='edit-item-card-name-input' type='text' id={this.props.id + 4 + 'name'} name='item4name' value={this.props.item4name} onChange={this.props.inputHandler} />
										<input className='edit-item-card-quantity-input' type='text' id={this.props.id + 4 + 'quantity'} name='item4quantity' value={this.props.item4quantity} onChange={this.props.itemQuantityInputHandler} />
										<input className='edit-item-card-price-input' type='text' id={this.props.id + 4 + 'price'} name='item4price' value={this.props.item4price} onChange={this.props.itemPriceInputHandler} />
										<span className='edit-item-card-total-span'>{Number(this.props.item4total).toFixed(2)}</span>
										<img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(4)}/>
									</div>
								</div>
							: null			
							}

							<div className='edit-invoice-bottom-buttons-div'>
								<div className='edit-invoice-bottom-button-cancel-div'>
									<span onClick={this.cancelUpdates}>Cancel</span>
								</div>
								<div className='edit-invoice-bottom-button-save-div'>
									<span onClick={this.saveUpdates}>Save Changes</span>
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