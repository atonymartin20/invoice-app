import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import Homepage from './components/homepage';

class App extends React.Component {
	render() {
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

export default App;