import React from 'react';

import '../../css/editInvoice.css';

class EditItemCard extends React.Component {
	state = {
        item: this.props.item,
	};

    componentDidMount() {
    }

	render() {
        if (this.props.colorType === 'dark') {
            return (
                <div className='edit-item-card-div'>
                    <input className='item-card-name-input-dark-mode' />
                    <input className='item-card-quantity-input-dark-mode' />
                    <input className='item-card-price-input-dark-mode' />
                    <input className='item-card-total-input-dark-mode' />
                </div>
            )
        }

        else {
            return (
                <div className='edit-item-card-div'>
                    <input className='item-card-name-input' />
                    <input className='item-card-quantity-input' />
                    <input className='item-card-price-input' />
                    <input className='item-card-total-input' />
                </div>
            )
        }
	}
}

export default EditItemCard;
