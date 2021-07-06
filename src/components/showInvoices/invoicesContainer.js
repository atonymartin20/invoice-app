import React from 'react';
import { AppContext } from '../context/appContext.js';

import '../../css/showInvoices.css';
import InvoiceCard from './invoiceCard.js';

class InvoicesContainer extends React.Component {
	state = {
	};

	render() {
        console.log(this.props)
		return (
			<div className="invoices-container-div">
				{this.props.type === 'dark' ? (
					<div className="dark-mode">
					</div>
				) : (
					<div className="invoices-inside-container-div">
                        {this.props.activeFilter === false ? 
                            <div>
                                {this.context.state.invoices.map(invoice => (
									<InvoiceCard
										key={invoice.id}
										id={invoice.id}
										paymentDue={invoice.paymentDue}
										clientName={invoice.clientName}
										total={invoice.total}
										status={invoice.status}
									/>
								))}
                            </div>
                        : 
                            null
                        } 

						{this.props.activeFilter === true && this.props.draftFilter === true ? 
                            <div>
                                {this.context.state.draftInvoices.map(invoice => (
									<InvoiceCard
										id={invoice.id}
										paymentDue={invoice.paymentDue}
										clientName={invoice.clientName}
										total={invoice.total}
										status={invoice.status}
									/>
								))}
                            </div>
                        : 
                            null
                        } 

						{this.props.activeFilter === true && this.props.pendingFilter === true ? 
                            <div>
                                {this.context.state.pendingInvoices.map(invoice => (
									<InvoiceCard
										id={invoice.id}
										paymentDue={invoice.paymentDue}
										clientName={invoice.clientName}
										total={invoice.total}
										status={invoice.status}
									/>
								))}
                            </div>
                        : 
                            null
                        } 

						{this.props.activeFilter === true && this.props.paidFilter === true ? 
                            <div>
                                {this.context.state.paidInvoices.map(invoice => (
									<InvoiceCard
										id={invoice.id}
										paymentDue={invoice.paymentDue}
										clientName={invoice.clientName}
										total={invoice.total}
										status={invoice.status}
									/>
								))}
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
