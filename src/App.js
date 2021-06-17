import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { AppContext } from './components/context/appContext.js';

// Components
import Homepage from './components/homepage';

class App extends React.Component {

	componentDidMount() {
		if(this.context.state.invoices.length > 0) {
			let invoiceCount = 0;
			let draftInvoiceCount = 0;
			let paidInvoiceCount = 0;
			let pendingInvoiceCount = 0;
			let draftInvoices = [];
			let paidInvoices = [];
			let pendingInvoices = [];

			this.context.state.invoices.map((invoice, index) => {
				if(invoice.status === 'paid') {
					paidInvoices = [...paidInvoices, invoice]
					paidInvoiceCount ++
				}

				else if(invoice.status === 'pending') {
					pendingInvoices = [...pendingInvoices, invoice]
					pendingInvoiceCount ++
				}

				else if(invoice.status === 'draft') {
					draftInvoices = [...draftInvoices, invoice]
					draftInvoiceCount ++
				}

				else {
					console.log(invoice)
				}
				
				console.log(invoice, invoice.status, index)
			})
		}
	}

	render() {
		if (this.context.state.darkMode === true) {
			return (
				<div className='app-outside-container-dark-mode'>
					<div className="app-inside-container-dark-mode">
						<Switch>
							<Route exact path="">
								<Homepage />
							</Route>
							<Route>
								<Homepage />
							</Route>
						</Switch>
					</div>
				</div>
			);
		}

		else {
			return (
				<div className='app-outside-container'>
					<div className="app-inside-container">
						<Switch>
							<Route exact path="">
								<Homepage />
							</Route>
							<Route>
								<Homepage />
							</Route>
						</Switch>
					</div>
				</div>
			);
		}
	}
}

App.contextType = AppContext;

export default App;