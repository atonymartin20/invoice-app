import React from 'react';
import { AppContext } from '../context/appContext.js';

import '../../css/invoicesContainer.css';
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
                                {this.context.state.invoices}
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
