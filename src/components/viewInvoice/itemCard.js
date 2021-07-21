import React from 'react';

import '../../css/viewInvoice.css';

class ItemCard extends React.Component {
	state = {
        item: this.props.item,
	};

	render() {
        return (
            <div>
                {this.state.item['name']}
                {this.state.item['quantity']}
                £ {this.state.item['price'].toFixed(2)}
                £ {this.state.item['total'].toFixed(2)}
            </div>
        )
	}
}

export default ItemCard;
