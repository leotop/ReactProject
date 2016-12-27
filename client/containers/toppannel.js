import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import * as basketActions  from '../actions/basketActions';

import '../css/top-pannel.sass'

class TopPannel extends React.Component {

    render() {
        let { inputChange } = this.props.basketActions;
        let { text } = this.props.text;
        let { sendParams } = this.props.basketActions;
        return (
        	<div className="top__pannel">
                <div className="basket">
                    <Link to="/basket"><i title="Корзина" className="fa fa-shopping-cart" aria-hidden="true"></i></Link>
                    <p>Товаров: 12</p>
                    <br />
                    <p>На сумму: 12345 руб.</p>
                </div>

        		<div className="search">
        			<i title="Поиск" className="fa fa-search" aria-hidden="true"></i>
        			<input className="input__search" type="text" onChange={inputChange} value={text} placeholder="Введите номер требуемой запчасти" />
                    <Link to="/directory"><button onClick={sendParams} >Найти деталь</button></Link>
        		</div>

                <div className="choice">
                    <a href="#">по номеру</a>
                    <a href="#">по vin</a>
                    <a href="#">по сайту</a>
                </div>
        	</div>
        );
    }
}



function mapStateToProps(state) {
    return {
        text: state.handlerapi,
        sendParams: state.basketActions
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        basketActions: bindActionCreators(basketActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPannel)
