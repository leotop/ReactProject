import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import * as basketActions  from '../actions/basketActions';
import jwt from 'jsonwebtoken';
import isEmpty from 'lodash/isEmpty';

import '../css/logo.sass';
import '../css/top-pannel.sass'


class TopPannel extends React.Component {

    render() {
        let { inputChange } = this.props.basketActions;
        let { text, product } = this.props.text;
        let { sendParams, SendRequest } = this.props.basketActions;
        if(localStorage.getItem('jwtToken')) {
            var decode = jwt.decode(localStorage.getItem('jwtToken'),{complete: true});
        }
        const userLinks = (
            <div className="registration__wrapper">
                <i className="fa fa-sign-in" aria-hidden="true"></i><Link to="/authorization">Войти</Link>
                {/* <Link to="/forgotpassword"><span>Забыли пароль?</span></Link> */}
                <Link to="/registration"><span className="last__span">Зарегистрироваться</span></Link>
            </div>
        )
        const guestLinks = (
            <div className="registration__wrapper logout__wrapper">
                <span className="last__span">Вы вошли как: <b>{ localStorage.getItem('jwtToken') ? decode.payload.name : <div></div>}</b></span>
                <span className="balans__span">Ваш баланс: <b>0</b></span>
            </div>
        )

        return (
            <div className="logo__container">
                <div>
                    <Link to="/">
        				<img src="../../logo/logo.png" alt="Alt" />
    	                <h1>EuropAuto</h1>
    	                <p>Интернет-магазин автозапчастей</p>
                    </Link>
    			</div>
                <div className="toppannel__wrapper">
                    { localStorage.getItem('jwtToken') ? guestLinks : userLinks }
                    <div className="top__pannel">
                        <div className="search">
                            <i title="Поиск" className="fa fa-search" aria-hidden="true"></i>
                            <input className="input__search" type="text" onChange={inputChange} value={text} placeholder="Введите номер требуемой запчасти" />
                            <Link to="/directory"><button onClick={SendRequest} >Найти деталь</button></Link>
                        </div>

                        <div className="choice">
                            <Link title="В корзине пусто" to="/basket"><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link>
                            <Link title="Последние заказы" to="/lastorders"><i className="fa fa-file-text-o" aria-hidden="true"></i></Link>
                            <Link title="Личный кабинет" to="/personaloffice"><i className="fa fa-home" aria-hidden="true"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        text: state.handlerapi,
        sendParams: state.basketActions,
        isAuthorizations: state.authorization
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        basketActions: bindActionCreators(basketActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPannel)
