import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RegActions from '../actions/RegActions';
import io from 'socket.io-client';
import classnames from 'classnames';

import '../css/registration.sass';


class Registration extends React.Component {
	constructor() {
		super();
		this.state = {
			text: 'пример собщения',
			array: ['text','text2','text3']
		}
	}

	Websocket() {
		const socket = io('http://localhost:3000');
		socket.on('news', function (data) {
			console.log(data);
			socket.emit('my other event', { my: 'пример'})
		});

	}

	render() {
        const {
			RegActions,
			NameInputChange,
			PasswordInputChange,
			PasswordConfirmationInputChange ,
			EmailInputChange } = this.props.RegActions;
		const { name, password, passwordConfirmation, email, errors  } = this.props.RegActionsData;
		return (
			<div className="registration__container">
				<form onSubmit={RegActions}>
					<h2>Регистрация</h2>
					<label>Ваше Имя <span>*</span></label>
	                <input className={classnames{'form-group', { 'has-error': errors.username }}} onChange={NameInputChange} value={name} type="text" placeholder="Введите имя" />
						{errors.name && <span className="help__block">{errors.name}</span>}
	                <label>Придумайте Пароль <span>*</span></label>
	                <input onChange={PasswordInputChange} value={password} type="password" placeholder="Введите пароль" />
					{errors.password && <span className="help__block">{errors.password}</span>}
	                <label>Повторите Пароль <span>*</span></label>
	                <input onChange={PasswordConfirmationInputChange} type="password" value={passwordConfirmation} placeholder="Повторите Пароль" />
					{errors.passwordConfirmation && <span className="help__block">{errors.passwordConfirmation}</span>}
	                <label>Ваш email </label>
	                <input onChange={EmailInputChange} value={email} type="text" placeholder="Ваш email" />
					{errors.email && <span className="help__block">{errors.email}</span>}
	                <p>C <Link to="/conditions">условиями</Link> ознакомлен</p><input className="checkbox__input" type="checkbox" />
	                <button onClick={RegActions} >Регистрация</button>
				</form>
			</div>
		)
	}
}


function mapStateToProps(state) {
    return {
        RegActionsData: state.registrations,
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        RegActions: bindActionCreators(RegActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)

// async function conq(world) {
// 	let state = await console.log('opa')
// 	return state;
// }
// conq()

// function* params () {
// 	console.log('params');
// 	let opa = yield console.log('example');;
// 	console.log(opa)
// 	console.log('example');
// }
// params().next()
// params().next()
