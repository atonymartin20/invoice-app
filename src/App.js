import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { AppContext } from './components/context/appContext.js';

// Components
import Homepage from './components/homepage';

class App extends React.Component {
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