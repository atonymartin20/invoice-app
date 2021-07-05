import React from 'react';
import { AppContext } from '../context/appContext.js';

import Navbar from '../navbar';
import '../../css/homepage.css';
import InvoicesHeader from './invoicesHeader.js';

class Homepage extends React.Component {
	state = {
		filterStatusContainerOpen: false,
		activeFilter: false,
		draftFilter: false,
		paidFilter: false,
		pendingFilter: false,
	};

	openFilterStatusMenu = (event) => {
		event.preventDefault();
		this.setState({
			filterStatusContainerOpen: true,
		});
	};

	closeFilterStatusMenu = (event) => {
		event.preventDefault();
		this.setState({
			filterStatusContainerOpen: false,
		});
	};

	filterByStatusDraft = () => {
		if (this.state.draftFilter === true) {
			this.setState({
				activeFilter: false,
				draftFilter: !this.state.draftFilter,
				paidFilter: false,
				pendingFilter: false,
			});
		} else {
			this.setState({
				activeFilter: true,
				draftFilter: !this.state.draftFilter,
				paidFilter: false,
				pendingFilter: false,
			});
		}
	};

	filterByStatusPaid = () => {
		if (this.state.paidFilter === true) {
			this.setState({
				activeFilter: false,
				draftFilter: false,
				paidFilter: !this.state.paidFilter,
				pendingFilter: false,
			});
		} else {
			this.setState({
				activeFilter: true,
				draftFilter: false,
				paidFilter: !this.state.paidFilter,
				pendingFilter: false,
			});
		}
	};

	filterByStatusPending = () => {
		if (this.state.pendingFilter === true) {
			this.setState({
				activeFilter: false,
				draftFilter: false,
				paidFilter: false,
				pendingFilter: !this.state.pendingFilter,
			});
		} else {
			this.setState({
				activeFilter: true,
				draftFilter: false,
				paidFilter: false,
				pendingFilter: !this.state.pendingFilter,
			});
		}
	};

	render() {
		return (
			<div className="homepage-container-div">
				<Navbar />
				{this.context.state.darkMode === true ? (
					<div className="homepage-inside-container-div-dark-mode">
						<InvoicesHeader
							type="dark"
							openFilterStatusMenu={this.openFilterStatusMenu}
							closeFilterStatusMenu={this.closeFilterStatusMenu}
                            filterByStatusDraft={this.filterByStatusDraft}
                            filterByStatusPaid={this.filterByStatusPaid}
                            filterByStatusPending={this.filterByStatusPending}
							filterStatusContainerOpen={
								this.state.filterStatusContainerOpen
							}
							activeFilter={this.state.activeFilter}
							draftFilter={this.state.draftFilter}
							paidFilter={this.state.paidFilter}
							pendingFilter={this.state.pendingFilter}
						/>
					</div>
				) : (
					<div className="homepage-inside-container-div">
						<InvoicesHeader
							type="light"
							openFilterStatusMenu={this.openFilterStatusMenu}
							closeFilterStatusMenu={this.closeFilterStatusMenu}
                            filterByStatusDraft={this.filterByStatusDraft}
                            filterByStatusPaid={this.filterByStatusPaid}
                            filterByStatusPending={this.filterByStatusPending}
							filterStatusContainerOpen={
								this.state.filterStatusContainerOpen
							}
							activeFilter={this.state.activeFilter}
							draftFilter={this.state.draftFilter}
							paidFilter={this.state.paidFilter}
							pendingFilter={this.state.pendingFilter}
						/>
					</div>
				)}
			</div>
		);
	}
}

Homepage.contextType = AppContext;

export default Homepage;
