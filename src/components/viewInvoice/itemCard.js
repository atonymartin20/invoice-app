import React from 'react';

import '../../css/viewInvoice.css';

class ItemCard extends React.Component {
	state = {
        item: this.props.item,
        price: '',
        total: '',
	};

    componentDidMount() {
        let precisePrice = this.state.item['price'].toFixed(2);
        let preciseTotal = this.state.item['total'].toFixed(2);
        let price = precisePrice.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        let total = preciseTotal.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        this.setState({
            price,
            total,
        })
    }

	render() {
        if (this.props.colorType === 'dark') {
            return (
                <div className='item-card-div'>
                    <span className='item-card-name-span-dark-mode'>{this.state.item['name']}</span>
                    <span className='item-card-quantity-span-dark-mode'>{this.state.item['quantity']}</span>
                    <span className='item-card-price-span-dark-mode'>£ {this.state.price}</span>
                    <span className='item-card-total-span-dark-mode'>£ {this.state.total}</span>
                </div>
            )
        }

        else {
            return (
                <div className='item-card-div'>
                    <span className='item-card-name-span'>{this.state.item['name']}</span>
                    <span className='item-card-quantity-span'>{this.state.item['quantity']}</span>
                    <span className='item-card-price-span'>£ {this.state.price}</span>
                    <span className='item-card-total-span'>£ {this.state.total}</span>
                </div>
            )
        }
	}
}

export default ItemCard;
