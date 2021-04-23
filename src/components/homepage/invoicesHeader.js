import React from 'react';
import { AppContext } from '../context/appContext.js';
import { Redirect } from 'react-router-dom';
import '../../css/homepage.css';

class InvoicesHeader extends React.Component {
    state = {
        redirect: false,
    }

    handleRedirect = (event) => {
        event.preventDefault();
        this.setState({
            redirect: true
        })
    }   
    


    render() {
        return(
            <div className='invoices-header'>
                <div className='invoices-header-left-side'>
                    <h1>Invoices</h1>
                    {this.context.state.invoiceCount === 0 ? 
                        <body>
                            No invoices
                        </body>
                    : 
                        null
                    }

                    {this.context.state.invoiceCount === 1 ?
                        <body>
                            There is 1 total invoice
                        </body>
                    : 
                        null
                    }

                    {this.context.state.invoiceCount > 1 ?
                        <body>
                            There are {this.context.state.invoiceCount} total invoices
                        </body>
                    :
                        null
                    }
                </div>

                
            </div>
        )
    }
}

InvoicesHeader.contextType = AppContext;

export default InvoicesHeader;