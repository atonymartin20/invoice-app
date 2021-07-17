import React from 'react';
import { AppContext } from '../context/appContext.js';

import Navbar from '../navbar';
import '../../css/viewInvoice.css';

class ViewInvoice extends React.Component {
	state = {

	};

	render() {
        console.log(this.props.location.state)
		return (
			<div className="view-invoice-container-div">
				<Navbar />
				{this.context.state.darkMode === true ? (
					<div className="view-invoice-inside-container-div-dark-mode">
                        test text
					</div>
				) : (
					<div className="view-invoice-inside-container-div">
					</div>
				)}
			</div>
		);
	}
}

ViewInvoice.contextType = AppContext;

export default ViewInvoice;
