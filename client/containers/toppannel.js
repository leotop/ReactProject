import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import * as basketActions  from '../actions/basketActions';


import '../css/logo.sass';
import '../css/top-pannel.sass'


class TopPannel extends React.Component {
    logoutActions() {
        localStorage.getItem('jwtToken');
        localSotrage.removeItem('jwtToken');
    }

    render() {
        let { inputChange } = this.props.basketActions;
        let { text, product } = this.props.text;
        let { sendParams, SendRequest } = this.props.basketActions;

        const userLinks = (
            <div className="registration__wrapper">
                <i className="fa fa-sign-in" aria-hidden="true"></i><Link to="/authorization">Войти</Link>
                <Link to="/forgotpassword"><span>Забыли пароль?</span></Link>
                <Link to="/registration"><span className="last__span">Зарегистрироваться</span></Link>
            </div>
        )

        const guestLinks = (
            <div className="registration__wrapper">
                <i className="fa fa-sign-in" aria-hidden="true"></i><Link to="/authorization">Войти</Link>
                <Link to="/forgotpassword"><span>Забыли пароль?</span></Link>
                <Link to="/registration"><span className="last__span">Зарегистрироваться</span></Link>
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
                    { guestLinks }
                    <div className="top__pannel">
                        <div className="search">
                            <i title="Поиск" className="fa fa-search" aria-hidden="true"></i>
                            <input className="input__search" type="text" onChange={inputChange} value={text} placeholder="Введите номер требуемой запчасти" />
                            <Link to="/directory"><button onClick={SendRequest} >Найти деталь</button></Link>
                        </div>

                        <div className="choice">
                            <a href="#">по номеру</a>
                            <a href="#">по vin</a>
                            <a href="#">по сайту</a>
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
        sendParams: state.basketActions
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        basketActions: bindActionCreators(basketActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPannel)
