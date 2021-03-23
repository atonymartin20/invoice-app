import React, { Component } from 'react';

export const AppContext = React.createContext();

export default class AppProvider extends Component {
    state = {
        // Variables
    };

    render() {

        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    // Functions below
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}