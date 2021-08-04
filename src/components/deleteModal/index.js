import React from 'react';

import '../../css/deleteModal.css';

class DeleteModal extends React.Component {
	render() {
        if (this.props.colorType === 'dark') {
            return (
                <div className='delete-modal-outside-div'>
                    <div className='delete-modal-container-div'>
                        <div className='delete-modal-inside-container-div-dark-mode'>
                            <h2 className='delete-modal-h2-confirm-dark-mode'>Confirm Deletion</h2>
                            <span className='delete-modal-span-confirm-dark-mode'>Are you sure you want to delete invoice #{this.props.id}? This action cannot be undone.</span>

                            <div className='delete-modal-button-container'>
                                <div className='delete-modal-cancel-button-dark-mode' onClick={this.props.closeDeleteModal}>
                                    <span>Cancel</span>
                                </div>
                                <div className='delete-modal-delete-button' onClick={this.props.deleteInvoice}>
                                    <span>Delete</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        else {
            return (
                <div className='delete-modal-outside-div'>
                    <div className='delete-modal-container-div'>
                        <div className='delete-modal-inside-container-div'>
                            <h2 className='delete-modal-h2-confirm'>Confirm Deletion</h2>
                            <span className='delete-modal-span-confirm'>Are you sure you want to delete invoice #{this.props.id}? This action cannot be undone.</span>

                            <div className='delete-modal-button-container'>
                                <div className='delete-modal-cancel-button' onClick={this.props.closeDeleteModal}>
                                    <span>Cancel</span>
                                </div>
                                <div className='delete-modal-delete-button' onClick={this.props.deleteInvoice}>
                                    <span>Delete</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
	}
}

export default DeleteModal;