import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Components
import Homepage from './components/homepage';

class App extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="">
						<Homepage />
					</Route>
					<Route>
						<Homepage />
					</Route>
				</Switch>
			</div>
		);
	}
}

export default App;