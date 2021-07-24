import React from 'react';
import { AppContext } from '../context/appContext.js';

import Navbar from '../navbar';
import '../../css/editInvoice.css';


class EditInvoice extends React.Component {
	state = {
	};

    componentDidMount() {
    }

	render() {
		return (
			<div className="edit-invoice-outside-div">
				<Navbar />
			</div>
		);
	}
}

EditInvoice.contextType = AppContext;

export default EditInvoice;