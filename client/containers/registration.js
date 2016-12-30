import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RegActions from '../actions/RegActions';
import io from 'socket.io-client';

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
        const { RegActions, NameInputChange, PasswordInputChange, EmailInputChange } = this.props.RegActions;
		const { name, password, email } = this.props.RegActionsData;
		console.log(name,password,email)
		return (
			<div className="registration__container">
				<h2>Регистрация</h2>
				<label>Ваше Имя <span>*</span></label>
                <input onChange={NameInputChange} value={name} type="text" placeholder="Введите имя" />
                <label>Придумайте Пароль <span>*</span></label>
                <input onChange={PasswordInputChange} value={password} type="password" placeholder="Введите пароль" />
                <label>Повторите Пароль <span>*</span></label>
                <input type="password" placeholder="Повторите Пароль" />
                <label>Ваш email </label>
                <input onChange={EmailInputChange} value={email} type="text" placeholder="Ваш email" />
                <p>C <Link to="/conditions">условиями</Link> ознакомлен</p><input className="checkbox__input" type="checkbox" />
                <button onClick={RegActions} >Регистрация</button>
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
