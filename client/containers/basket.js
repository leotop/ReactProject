import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as basketActions  from '../actions/basketActions';


class Basket extends React.Component {

	render() {
		const { deleteProduct } = this.props.basketActions
		return (
			<div className="catalog">
				<ul className="top__catalog">
					<li>Производитель</li>
					<li>Код детали</li>
					<li>Наименование</li>
					<li>Срок поставки</li>
					<li>Склад</li>
					<li>Обновлен</li>
					<li>Остаток</li>
					<li>Цена</li>
					<li>Удалить</li>
				</ul>

				{/* {Tasks.find({ userName: Meteor.userId() }).fetch().length > 0?
					Tasks.find({ userName: Meteor.userId() }).fetch().map((item, index) => {
						return <div key={index}>
									<ul key={index}>
										<li>{item.brand}</li>
										<li>{item.nr}</li>
										<li title={item.name} >{item.name}</li>
										<li>{item.delivery}</li>
										<li>EA52/1</li>
										<li>{item.upd}</li>
										<li>{item.stock}</li>
										<li>{item.cost} руб.</li>
										<span onClick={deleteProduct.bind(this, item)}> x</span>
									</ul>
							   </div>
					})
						: <div></div>
				} */}

			</div>
		)
	}
}


function mapStateToProps(state) {
    return {
		basketActions: state.basketActions
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        basketActions: bindActionCreators(basketActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket)
