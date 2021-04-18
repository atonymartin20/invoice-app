import React, { Component } from 'react';

export const AppContext = React.createContext();

export default class AppProvider extends Component {
    state = {
        darkMode: false,
    };

    render() {
        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    // Functions
                    switchToDarkMode: () => {
                        this.setState({
                            darkMode: true,
                        })
                    },
                    switchToLightMode: () => {
                        this.setState({
                            darkMode: false,
                        })
                    }
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}