import React from 'react';





export default class CatalogButtons extends React.Component {

	render() {
		return (
				<li><input onChange={this.props.inputChange} placeholder="0" type="number"/><i onClick={this.props.addBasket.bind(this, this.props.item)} className="fa fa-cart-plus" aria-hidden="true"></i></li>
		)
	}
}
