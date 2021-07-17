import React from 'react';
import { AppContext } from '../context/appContext.js';

import '../../css/showInvoices.css';
import InvoiceCard from './invoiceCard.js';
import EmptyInvoiceIMG from '../../assets/illustration-empty.svg';

class InvoicesContainer extends React.Component {
	state = {
	};

	render() {
		return (
			<div className="invoices-container-div">
				{this.props.type === 'dark' ? (
					<div className="invoices-inside-container-div">
						{this.props.activeFilter === false ? 
							<>
								{this.context.state.invoices.length > 0 ? 
		                            <div className='card-container-div-all-invoices'>
										{this.context.state.invoices.map(invoice => (
											<InvoiceCard
												key={invoice.id}
												id={invoice.id}
												paymentDue={invoice.paymentDue}
												clientName={invoice.clientName}
												total={invoice.total}
												status={invoice.status}
												type='unfiltered'
												colorType='dark'
											/>
										))}
									</div>
								: 
									<div className='empty-invoices-container-div'>
										<div className='empty-invoices-inside-container-div'>
											<img className='empty-invoices-empty' src={EmptyInvoiceIMG} alt='Woman in envelope holding megaphone' />
											<div className='empty-invoices-text-container-div'>
												<h5 className='empty-invoices-h5-dark-mode'>There is nothing here</h5>
												<p className='empty-invoices-p-dark-mode'>Create an invoice by clicking the <span>New Invoice</span> button and get started</p>
											</div>
										</div>
									</div>
								}
							</>

                        : 
                            null
                        } 

						{this.props.activeFilter === true && this.props.draftFilter === true ? 
                            <div className='card-container-div-filtered-invoices'>
								{this.context.state.draftInvoices.length > 0 ? 
									<>
										{this.context.state.draftInvoices.map(invoice => (
											<InvoiceCard
												id={invoice.id}
												paymentDue={invoice.paymentDue}
												clientName={invoice.clientName}
												total={invoice.total}
												status={invoice.status}
												type='filtered'
												colorType='dark'
											/>
										))}
									</>
								: 
									<div className='empty-invoices-container-div'>
										<div className='empty-invoices-inside-container-div'>
											<img className='empty-invoices-empty' src={EmptyInvoiceIMG} alt='Woman in envelope holding megaphone' />
											<div className='empty-invoices-text-container-div'>
												<h5 className='empty-invoices-h5-dark-mode'>There is nothing here</h5>
												<p className='empty-invoices-p-dark-mode'>Create an invoice by clicking the <span>New Invoice</span> button and get started</p>
											</div>
										</div>
									</div>
								}
                            </div>
                        : 
                            null
                        } 

						{this.props.activeFilter === true && this.props.pendingFilter === true ? 
                            <div className='card-container-div-filtered-invoices'>
								{this.context.state.pendingInvoices.length > 0 ? 
									<>
										{this.context.state.pendingInvoices.map(invoice => (
											<InvoiceCard
												id={invoice.id}
												paymentDue={invoice.paymentDue}
												clientName={invoice.clientName}
												total={invoice.total}
												status={invoice.status}
												type='filtered'
												colorType='dark'
											/>
										))}
									</>
								: 
									<div className='empty-invoices-container-div'>
										<div className='empty-invoices-inside-container-div'>
											<img className='empty-invoices-empty' src={EmptyInvoiceIMG} alt='Woman in envelope holding megaphone' />
											<div className='empty-invoices-text-container-div'>
												<h5 className='empty-invoices-h5-dark-mode'>There is nothing here</h5>
												<p className='empty-invoices-p-dark-mode'>Create an invoice by clicking the <span>New Invoice</span> button and get started</p>
											</div>
										</div>
									</div>
								}
                            </div>
                        : 
                            null
                        } 

						{this.props.activeFilter === true && this.props.paidFilter === true ? 
                            <div className='card-container-div-filtered-invoices'>
								{this.context.state.paidInvoices.length > 0 ? 
									<>
										{this.context.state.paidInvoices.map(invoice => (
											<InvoiceCard
												id={invoice.id}
												paymentDue={invoice.paymentDue}
												clientName={invoice.clientName}
												total={invoice.total}
												status={invoice.status}
												type='filtered'
												colorType='dark'
											/>
										))}
									</>
								: 
									<div className='empty-invoices-container-div'>
										<div className='empty-invoices-inside-container-div'>
											<img className='empty-invoices-empty' src={EmptyInvoiceIMG} alt='Woman in envelope holding megaphone' />
											<div className='empty-invoices-text-container-div'>
												<h5 className='empty-invoices-h5-dark-mode'>There is nothing here</h5>
												<p className='empty-invoices-p-dark-mode'>Create an invoice by clicking the <span>New Invoice</span> button and get started</p>
											</div>
										</div>
									</div>
								}
                            </div>
                        : 
                            null
                        } 
					</div>
				) : (
					<div className="invoices-inside-container-div">
						{this.props.activeFilter === false ? 
							<>
								{this.context.state.invoices.length > 0 ? 
		                            <div className='card-container-div-all-invoices'>
										{this.context.state.invoices.map(invoice => (
											<InvoiceCard
												key={invoice.id}
												id={invoice.id}
												paymentDue={invoice.paymentDue}
												clientName={invoice.clientName}
												total={invoice.total}
												status={invoice.status}
												type='unfiltered'
												colorType='light'
											/>
										))}
									</div>
								: 
									<div className='empty-invoices-container-div'>
										<div className='empty-invoices-inside-container-div'>
											<img className='empty-invoices-empty' src={EmptyInvoiceIMG} alt='Woman in envelope holding megaphone' />
											<div className='empty-invoices-text-container-div'>
												<h5 className='empty-invoices-h5'>There is nothing here</h5>
												<p className='empty-invoices-p'>Create an invoice by clicking the <span>New Invoice</span> button and get started</p>
											</div>
										</div>
									</div>
								}
							</>

                        : 
                            null
                        } 

						{this.props.activeFilter === true && this.props.draftFilter === true ? 
                            <div className='card-container-div-filtered-invoices'>
								{this.context.state.draftInvoices.length > 0 ? 
									<>
										{this.context.state.draftInvoices.map(invoice => (
											<InvoiceCard
												id={invoice.id}
												paymentDue={invoice.paymentDue}
												clientName={invoice.clientName}
												total={invoice.total}
												status={invoice.status}
												type='filtered'
												colorType='light'
												/>
										))}
									</>
								: 
									<div className='empty-invoices-container-div'>
										<div className='empty-invoices-inside-container-div'>
											<img className='empty-invoices-empty' src={EmptyInvoiceIMG} alt='Woman in envelope holding megaphone' />
											<div className='empty-invoices-text-container-div'>
												<h5 className='empty-invoices-h5'>There is nothing here</h5>
												<p className='empty-invoices-p'>Create an invoice by clicking the <span>New Invoice</span> button and get started</p>
											</div>
										</div>
									</div>
								}
                            </div>
                        : 
                            null
                        } 

						{this.props.activeFilter === true && this.props.pendingFilter === true ? 
                            <div className='card-container-div-filtered-invoices'>
								{this.context.state.pendingInvoices.length > 0 ? 
									<>
										{this.context.state.pendingInvoices.map(invoice => (
											<InvoiceCard
												id={invoice.id}
												paymentDue={invoice.paymentDue}
												clientName={invoice.clientName}
												total={invoice.total}
												status={invoice.status}
												type='filtered'
												colorType='light'
												/>
										))}
									</>
								: 
									<div className='empty-invoices-container-div'>
										<div className='empty-invoices-inside-container-div'>
											<img className='empty-invoices-empty' src={EmptyInvoiceIMG} alt='Woman in envelope holding megaphone' />
											<div className='empty-invoices-text-container-div'>
												<h5 className='empty-invoices-h5'>There is nothing here</h5>
												<p className='empty-invoices-p'>Create an invoice by clicking the <span>New Invoice</span> button and get started</p>
											</div>
										</div>
									</div>
								}
                            </div>
                        : 
                            null
                        } 

						{this.props.activeFilter === true && this.props.paidFilter === true ? 
                            <div className='card-container-div-filtered-invoices'>
								{this.context.state.paidInvoices.length > 0 ? 
									<>
										{this.context.state.paidInvoices.map(invoice => (
											<InvoiceCard
												id={invoice.id}
												paymentDue={invoice.paymentDue}
												clientName={invoice.clientName}
												total={invoice.total}
												status={invoice.status}
												type='filtered'
												colorType='light'
												/>
										))}
									</>
								: 
									<div className='empty-invoices-container-div'>
										<div className='empty-invoices-inside-container-div'>
											<img className='empty-invoices-empty' src={EmptyInvoiceIMG} alt='Woman in envelope holding megaphone' />
											<div className='empty-invoices-text-container-div'>
												<h5 className='empty-invoices-h5'>There is nothing here</h5>
												<p className='empty-invoices-p'>Create an invoice by clicking the <span>New Invoice</span> button and get started</p>
											</div>
										</div>
									</div>
								}
                            </div>
                        : 
                            null
                        } 
					</div>
				)}
			</div>
		);
	}
}

InvoicesContainer.contextType = AppContext;

export default InvoicesContainer;
