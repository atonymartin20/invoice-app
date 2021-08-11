import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { AppContext } from './components/context/appContext.js';

// Components
import Homepage from './components/homepage';
import ViewInvoice from './components/viewInvoice';

class App extends React.Component {

	componentDidMount = () => {
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
					invoiceCount ++
				}

				else if(invoice.status === 'pending') {
					pendingInvoices = [...pendingInvoices, invoice]
					pendingInvoiceCount ++
					invoiceCount ++
				}

				else if(invoice.status === 'draft') {
					draftInvoices = [...draftInvoices, invoice]
					draftInvoiceCount ++
					invoiceCount ++
				}

				else {
					console.log(invoice)
				}
				
				this.context.setInvoiceCount(invoiceCount);
				this.context.setDraftInvoiceCount(draftInvoiceCount);
				this.context.setPaidInvoiceCount(paidInvoiceCount);
				this.context.setPendingInvoiceCount(pendingInvoiceCount);
				this.context.grabDraftInvoices(draftInvoices);
				this.context.grabPaidInvoices(paidInvoices);
				this.context.grabPendingInvoices(pendingInvoices);
				return null;
			})
		}
	}

	render() {
		if (this.context.state.darkMode === true) {
			if (this.context.state.grayMode === true) {
				return (
					<div className='app-outside-container-dark-mode-gray-mode'>
						<div className="app-inside-container-dark-mode">
							<Switch>
								<Route exact path="/">
									<Homepage />
								</Route>
								<Route path='/view' render={(props) => <ViewInvoice {...props} />} />
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
					<div className='app-outside-container-dark-mode'>
						<div className="app-inside-container-dark-mode">
							<Switch>
								<Route exact path="/">
									<Homepage />
								</Route>
								<Route path='/view' render={(props) => <ViewInvoice {...props} />} />
								<Route>
									<Homepage />
								</Route>
							</Switch>
						</div>
					</div>
				);
			}
		}

		else {
			if (this.context.state.grayMode === true) {
				return (
					<div className='app-outside-container-gray-mode'>
						<div className="app-inside-container">
							<Switch>
								<Route exact path="/">
									<Homepage />
								</Route>
								<Route path='/view' render={(props) => <ViewInvoice {...props} />} />
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
								<Route exact path="/">
									<Homepage />
								</Route>
								<Route path='/view' render={(props) => <ViewInvoice {...props} />} />
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
}

App.contextType = AppContext;

export default App;