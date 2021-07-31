import React from 'react';

import '../../css/editInvoice.css';
import DeleteIcon from '../../assets/icon-delete.svg';

class EditItemCard extends React.Component {
	// state = {
    //     item: this.props.item,
    //     itemLocation: 0,
    //     name: '',
    //     quantity: '',
    //     price: '',
    //     total: 0,
	// };

    // componentDidMount() {
    //     this.props.items.map((item, index) => {
    //         if(item['name'] === this.props.item['name'] && item['price'] === this.props.item['price']) {
    //             this.setState({
    //                 itemLocation: index,
    //                 name: item['name'],
    //                 quantity: item['quantity'],
    //                 price: item['price'],
    //                 total: item['total']
    //             })
    //         }
    //         return null;
    //     })
    // }


	// inputHandler = (event) => {
	// 	event.preventDefault();
	// 	let target = event.target;
    //     let total = 0;
    //     if (target.name === 'quantity') {
    //         total = Number(target.value * this.state.price).toFixed(2)
    //         this.setState({
    //             [target.name]: target.value,
    //             total
    //         })
    //         // this.props.updateItem(this.state.itemLocation, target.name, target.value, total)
    //     }

    //     else if(target.name === 'price') {
    //         total = Number(target.value * this.state.quantity).toFixed(2)
    //         this.setState({
    //             [target.name]: target.value,
    //             total
    //         })
    //         // this.props.updateItem(this.state.itemLocation, target.name, target.value, total)
    //     }

    //     else {
    //         this.setState({
    //             [target.name]: target.value
    //         });
    //         // this.props.updateItem(this.state.itemLocation, target.name, target.value, this.state.total)
    //     }

	// }

	render() {
        if (this.props.colorType === 'dark') {
            return (
                <div className='edit-item-card-div'>
                    <input className='edit-item-card-name-input-dark-mode' />
                    <input className='edit-item-card-quantity-input-dark-mode' />
                    <input className='edit-item-card-price-input-dark-mode' />
                    <span className='edit-item-card-total-span-dark-mode'>{Number(this.props.item['quantity'] * this.props.item['price']).toFixed(2)}</span>
                    <img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' />
                </div>
            )
        }

        else {
            return (
                <div className='edit-item-card-div'>
                    <input className='edit-item-card-name-input' type='text' id={this.props.id + this.props.index + 'name'} name={`item${this.props.index}name`} value={this.props.name} onChange={this.props.inputHandler} />
                    <input className='edit-item-card-quantity-input' type='text' id={this.props.id + this.props.index + 'quantity'} name='quantity' value={this.props.quantity} onChange={this.props.inputHandler} />
                    <input className='edit-item-card-price-input' type='text' id={this.props.id + this.props.index + 'price'} name='price' value={this.props.price} onChange={this.props.inputHandler} />
                    <span className='edit-item-card-total-span'>{Number(this.props.total).toFixed(2)}</span>
                    <img src={DeleteIcon} alt='Trash Can' className='edit-item-card-trash-can' onClick={() => this.props.deleteItem(this.props.name)}/>
                </div>
            )
        }
	}
}

export default EditItemCard;