import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as basketActions  from '../actions/basketActions';
import CatalogButtons from '../components/catalogbuttons';

import '../css/catalog.sass';

class Catalog extends React.Component {

	render() {
		const products = this.props.products;
		const { addBasket, inputChange, onlyOriginal, sendParams } = this.props.basketActions;
		const { arrayMoskvorechie, arrayPartKom } = this.props.example.handlerapi;
		return (
			<div className="catalog">
				<div className="search__filter">
					<p onClick={sendParams} ><i className="fa fa-globe" aria-hidden="true"></i>Все</p>
					<p onClick={onlyOriginal}><i className="fa fa-sun-o" aria-hidden="true"></i>Оригинальные детали</p>
					<p><i className="fa fa-retweet" aria-hidden="true"></i>Оригинальные замены</p>
					<p><i className="fa fa-clone" aria-hidden="true"></i>Замены</p>
				</div>
				<ul className="top__catalog">
					<li>Производитель</li>
					<li>Код детали</li>
					<li>Наименование</li>
					<li>Срок поставки</li>
					<li>Склад</li>
					<li>Обновлен</li>
					<li>Остаток</li>
					<li>Цена</li>
					<li>Корзина</li>
				</ul>

				{arrayMoskvorechie.length > 0?
					arrayMoskvorechie.map((item, index) => {
						return <div key={index}>
									<ul key={index}>
										<li>{item.brand}</li>
										<li>{item.nr.replace(/\s/g,"")}</li>
										<li title={item.name} >{item.name}</li>
										<li className={ item.delivery === 'на складе' || item.delivery === '1 день' ? 'green__lesser': null }>{item.delivery.replace('на складе','1 день')}</li>
										<li>EA52/1</li>
										<li>{item.upd}</li>
										<li>{item.stock}</li>
										<li>{Math.floor(item.price*1.15)} руб.</li>
										<li><input onChange={inputChange} placeholder="0" type="number"/><i onClick={addBasket.bind(this, item)} className="fa fa-cart-plus" aria-hidden="true"></i></li>
									</ul>
							   </div>
					})
						: <div></div>
				}
				{arrayPartKom.length > 0?
					arrayPartKom.map((item, index) => {
						return <div key={index}>
									<ul key={index}>
										<li>{item.maker}</li>
										<li>{item.number}</li>
										<li title={item.description} >{item.description}</li>
										<li>От {item.minDeliveryDays} до {item.maxDeliveryDays}</li>
										<li>EA52/2</li>
										<li>{item.lastUpdateDate.slice(2,-3)}</li>
										<li>{item.quantity}</li>
										<li>{Math.floor(item.price*1.15)} руб.</li>
										<li><input onChange={inputChange} placeholder="0" type="number"/><i onClick={addBasket.bind(this, item)} className="fa fa-cart-plus" aria-hidden="true"></i></li>
									</ul>
							   </div>
					})
						: <div></div>
				}

			</div>

		)
	}
}


function mapStateToProps(state) {
    return {
        products: state.product,
		basketActions: state.basketActions,
		example: state
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        basketActions: bindActionCreators(basketActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)
