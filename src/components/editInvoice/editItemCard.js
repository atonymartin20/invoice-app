import React from 'react';

import '../../css/editInvoice.css';
import DeleteIcon from '../../assets/icon-delete.svg';

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
                    <input className='edit-item-card-name-input-dark-mode' />
                    <input className='edit-item-card-quantity-input-dark-mode' />
                    <input className='edit-item-card-price-input-dark-mode' />
                    <span className='edit-item-card-total-span-dark-mode'>{Number(this.state.item['quantity'] * this.state.item['price']).toFixed(2)}</span>
                    <img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' />
                </div>
            )
        }

        else {
            return (
                <div className='edit-item-card-div'>
                    <input className='edit-item-card-name-input' />
                    <input className='edit-item-card-quantity-input' />
                    <input className='edit-item-card-price-input' />
                    <span className='edit-item-card-total-span'>{Number(this.state.item['quantity'] * this.state.item['price']).toFixed(2)}</span>
                    <img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' />
                </div>
            )
        }
	}
}

export default EditItemCard;
