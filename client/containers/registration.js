import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RegActions from '../actions/RegActions';

import '../css/registration.sass';

class Registration extends React.Component {

	render() {
        const { RegActions, NameInputChange, PasswordInputChange, EmailInputChange } = this.props.RegActions
		console.log()
		return (
			<div className="registration__container">
                <h2>Регистрация</h2>
				<label>Ваше Имя <span>*</span></label>
                <input onChange={NameInputChange} type="text" placeholder="Введите имя" />
                <label>Придумайте Пароль <span>*</span></label>
                <input onChange={PasswordInputChange} type="password" placeholder="Введите пароль" />
                <label>Повторите Пароль <span>*</span></label>
                <input type="password" placeholder="Повторите Пароль" />
                <label>Ваш email </label>
                <input onChange={EmailInputChange} type="text" placeholder="Ваш email" />
                <p>C <Link to="/conditions">условиями</Link> ознакомлен</p><input className="checkbox__input" type="checkbox" />
                <button onClick={RegActions} >Регистрация</button>
			</div>
		)
	}
}


function mapStateToProps(state) {
    return {
        RegActions: state.RegActions
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        RegActions: bindActionCreators(RegActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)
