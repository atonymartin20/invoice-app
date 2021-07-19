import React from 'react';
import { AppContext } from '../context/appContext.js';

import Navbar from '../navbar';
import '../../css/viewInvoice.css';
import LeftArrowIcon from '../../assets/icon-arrow-left.svg';


class ViewInvoice extends React.Component {
	state = {
        invoice: {}
	};

    componentDidMount() {
        this.context.state.invoices.map((invoice, index) => {
            if(invoice.id === this.props.location.state.id) {
                this.setState({
                    invoice
                });
            }
            return null;
        })

    }

	render() {
        console.log(this.state.invoice)
		return (
			<div className="view-invoice-outside-div">
				<Navbar />
				{this.context.state.darkMode === true ? (
					<div className="view-invoice-outside-container-div-dark-mode">
                        test text
					</div>
				) : (
					<div className="view-invoice-outside-container-div">
						<div className='view-invoice-inside-container-div'>
							<span className='' onClick={this.handleRedirect}><img src={LeftArrowIcon} alt='left arrow' /> Go Back</span>
							
						</div>
						

					</div>
				)}
			</div>
		);
	}
}

ViewInvoice.contextType = AppContext;

export default ViewInvoice;
