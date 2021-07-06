import React from 'react';
import { AppContext } from '../context/appContext.js';
// import { Redirect } from 'react-router-dom';
import '../../css/homepage.css';

import  { Button } from 'reactstrap';
import PlusIcon from '../../assets/icon-plus.svg';
import DownArrowIcon from '../../assets/icon-arrow-down.svg';
import CheckIcon from '../../assets/icon-check.svg';

class InvoicesHeader extends React.Component {
    state = {
        redirect: false,
		activeFilter: this.props.activeFilter,
		draftFilter: this.props.draftFilter,
		paidFilter: this.props.paidFilter,
		pendingFilter: this.props.pendingFilter,        
    }

    handleRedirect = (event) => {
        event.preventDefault();
        this.setState({
            redirect: true
        })
    }   

    render() {
        if (this.props.type === 'light') {
            return(
                <div className='invoices-header'>
                    <div className='invoices-header-left-side'>
                        <h1>Invoices</h1>
                        {this.props.activeFilter === true ? 
                            <>
                            {this.props.draftFilter === true ? 
                                <>
                                    {this.context.state.draftInvoiceCount === 0 ?
                                        <body>
                                            No invoices
                                        </body>
                                    : 
                                        null
                                    }

                                    {this.context.state.draftInvoiceCount === 1 ?
                                        <body>
                                            There is 1 draft invoice
                                        </body>
                                    : 
                                        null
                                    }

                                    {this.context.state.draftInvoiceCount > 1 ?
                                        <body>
                                        There are {this.context.state.draftInvoiceCount} draft invoices
                                        </body>
                                    : 
                                        null
                                    }
                                </>
                            : 
                                null
                            }

                            {this.props.paidFilter === true ? 
                                <>
                                    {this.context.state.paidInvoiceCount === 0 ?
                                        <body>
                                            No invoices
                                        </body>
                                    : 
                                        null
                                    }

                                    {this.context.state.paidInvoiceCount === 1 ?
                                        <body>
                                            There is 1 paid invoice
                                        </body>
                                    : 
                                        null
                                    }

                                    {this.context.state.paidInvoiceCount > 1 ?
                                        <body>
                                        There are {this.context.state.paidInvoiceCount} paid invoices
                                        </body>
                                    : 
                                        null
                                    }
                                </>
                            : 
                                null
                            }

                            {this.props.pendingFilter === true ? 
                                <>
                                    {this.context.state.pendingInvoiceCount === 0 ?
                                        <body>
                                            No invoices
                                        </body>
                                    : 
                                        null
                                    }

                                    {this.context.state.pendingInvoiceCount === 1 ?
                                        <body>
                                            There is 1 pending invoice
                                        </body>
                                    : 
                                        null
                                    }

                                    {this.context.state.pendingInvoiceCount > 1 ?
                                        <body>
                                        There are {this.context.state.pendingInvoiceCount} pending invoices
                                        </body>
                                    : 
                                        null
                                    }
                                </>
                            : 
                                null
                            }
                            </>
                        : 
                            <>
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
                            </>
                        }
                    </div>
                    
                    {this.props.filterStatusContainerOpen === true ? 
                        <div className='filtered-container-div'>
                            <div className='filter-div-true' onClick={this.props.closeFilterStatusMenu}>
                                <div className='filter-span'>
                                    Filter by status
                                </div>
                                <img src={DownArrowIcon} alt='Up Arrow' className='down-arrow-icon-reversed' />
                            </div>
                            
                            <div className='filter-option-div'>
                                {this.props.draftFilter === true ? 
                                    <span className='filter-option-span' onClick={this.props.filterByStatusDraft}><div className='filter-checkbox-checked'><img src={CheckIcon} alt='checkmark' className='check-icon' /></div> Draft</span>
                                :
                                    <span className='filter-option-span' onClick={this.props.filterByStatusDraft}><div className='filter-checkbox'/> Draft</span>
                                }

                                {this.props.pendingFilter === true ? 
                                    <span className='filter-option-span' onClick={this.props.filterByStatusPending}><div className='filter-checkbox-checked'><img src={CheckIcon} alt='checkmark' className='check-icon' /></div> Pending</span>
                                :
                                    <span className='filter-option-span' onClick={this.props.filterByStatusPending}><div className='filter-checkbox'/> Pending</span>
                                }

                                {this.props.paidFilter === true ? 
                                    <span className='filter-option-span' onClick={this.props.filterByStatusPaid}><div className='filter-checkbox-checked'><img src={CheckIcon} alt='checkmark' className='check-icon' /></div> Paid</span>
                                :
                                    <span className='filter-option-span' onClick={this.props.filterByStatusPaid}><div className='filter-checkbox'/> Paid</span>
                                }
                            </div>
                        </div>
                        
                    : 
                        <div className='filter-div' onClick={this.props.openFilterStatusMenu}>
                            <div className='filter-span'>
                                Filter by status
                            </div>
                            <img src={DownArrowIcon} alt='Down Arrow' className='down-arrow-icon' />
                        </div>         
                    }
    
                    <Button className='header-button'>
                        <div className='icon-div'>
                            <img src={PlusIcon} alt='Plus Icon' />
                        </div>
                        <span className='header-span'>New Invoice</span>
                    </Button>
    
    
                    
                </div>
            )
        }
        else {
            return(
                <div className='invoices-header'>
                    <div className='invoices-header-left-side-dark-mode'>
                        <h1>Invoices</h1>
                        {this.props.activeFilter === true ? 
                            <>
                            {this.props.draftFilter === true ? 
                                <>
                                    {this.context.state.draftInvoiceCount === 0 ?
                                        <body>
                                            No invoices
                                        </body>
                                    : 
                                        null
                                    }

                                    {this.context.state.draftInvoiceCount === 1 ?
                                        <body>
                                            There is 1 draft invoice
                                        </body>
                                    : 
                                        null
                                    }

                                    {this.context.state.draftInvoiceCount > 1 ?
                                        <body>
                                        There are {this.context.state.draftInvoiceCount} draft invoices
                                        </body>
                                    : 
                                        null
                                    }
                                </>
                            : 
                                null
                            }

                            {this.props.paidFilter === true ? 
                                <>
                                    {this.context.state.paidInvoiceCount === 0 ?
                                        <body>
                                            No invoices
                                        </body>
                                    : 
                                        null
                                    }

                                    {this.context.state.paidInvoiceCount === 1 ?
                                        <body>
                                            There is 1 paid invoice
                                        </body>
                                    : 
                                        null
                                    }

                                    {this.context.state.paidInvoiceCount > 1 ?
                                        <body>
                                        There are {this.context.state.paidInvoiceCount} paid invoices
                                        </body>
                                    : 
                                        null
                                    }
                                </>
                            : 
                                null
                            }

                            {this.props.pendingFilter === true ? 
                                <>
                                    {this.context.state.pendingInvoiceCount === 0 ?
                                        <body>
                                            No invoices
                                        </body>
                                    : 
                                        null
                                    }

                                    {this.context.state.pendingInvoiceCount === 1 ?
                                        <body>
                                            There is 1 pending invoice
                                        </body>
                                    : 
                                        null
                                    }

                                    {this.context.state.pendingInvoiceCount > 1 ?
                                        <body>
                                        There are {this.context.state.pendingInvoiceCount} pending invoices
                                        </body>
                                    : 
                                        null
                                    }
                                </>
                            : 
                                null
                            }
                            </>
                        : 
                            <>
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
                            </>
                        }
                    </div>
                    
                    {this.props.filterStatusContainerOpen === true ? 
                        <div className='filtered-container-div'>
                            <div className='filter-div-true' onClick={this.props.closeFilterStatusMenu}>
                                <div className='filter-span-dark-mode'>
                                    Filter by status
                                </div>
                                <img src={DownArrowIcon} alt='Up Arrow' className='down-arrow-icon-reversed' />
                            </div>
                            
                            <div className='filter-option-div-dark-mode'>
                                {this.props.draftFilter === true ? 
                                    <span className='filter-option-span-dark-mode' onClick={this.props.filterByStatusDraft}><div className='filter-checkbox-checked-dark-mode'><img src={CheckIcon} alt='checkmark' className='check-icon' /></div> Draft</span>
                                :
                                    <span className='filter-option-span-dark-mode' onClick={this.props.filterByStatusDraft}><div className='filter-checkbox-dark-mode'/> Draft</span>
                                }

                                {this.props.pendingFilter === true ? 
                                    <span className='filter-option-span-dark-mode' onClick={this.props.filterByStatusPending}><div className='filter-checkbox-checked-dark-mode'><img src={CheckIcon} alt='checkmark' className='check-icon' /></div> Pending</span>
                                :
                                    <span className='filter-option-span-dark-mode' onClick={this.props.filterByStatusPending}><div className='filter-checkbox-dark-mode'/> Pending</span>
                                }

                                {this.props.paidFilter === true ? 
                                    <span className='filter-option-span-dark-mode' onClick={this.props.filterByStatusPaid}><div className='filter-checkbox-checked-dark-mode'><img src={CheckIcon} alt='checkmark' className='check-icon' /></div> Paid</span>
                                :
                                    <span className='filter-option-span-dark-mode' onClick={this.props.filterByStatusPaid}><div className='filter-checkbox-dark-mode'/> Paid</span>
                                }
                            </div>
                        </div>
                    : 
                        <div className='filter-div' onClick={this.props.openFilterStatusMenu}>
                            <div className='filter-span-dark-mode'>
                                Filter by status
                            </div>
                            <img src={DownArrowIcon} alt='Down Arrow' className='down-arrow-icon' />
                        </div>      
                    }
    
                    <Button className='header-button'>
                        <div className='icon-div'>
                            <img src={PlusIcon} alt='Plus Icon' />
                        </div>
                        <span className='header-span'>New Invoice</span>
                    </Button>
    
    
                    
                </div>
            )
        }
    }
}

InvoicesHeader.contextType = AppContext;

export default InvoicesHeader;