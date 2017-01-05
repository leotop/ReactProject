import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as RegActions from '../actions/RegActions';
import io from 'socket.io-client';
import classnames from 'classnames';

import '../css/registration.sass';


class Registration extends React.Component {

	render() {
        const {
			goAuth,
			RegActions,
			ConditionAgree,
			NameInputChange,
			PasswordInputChange,
			PasswordConfirmationInputChange,
			EmailInputChange } = this.props.RegActions;
		const { name, password, passwordConfirmation, email, errors, isLoading, isOpen } = this.props.RegActionsData;
		return (
			<div className="registration__container">
				{
					typeof errors === 'string'?

						<div className="thanks__register">
							<h2>{errors}</h2>
							<button onClick={goAuth}>Перейти к авторизации</button>
						</div>
											  :

						<form onSubmit={RegActions}>
							<h2>Регистрация</h2>
							<label>Ваше Имя <span>*</span></label>
			                <input className={classnames('form-group', { 'has-error': errors.name })} onChange={NameInputChange} value={name} type="text" placeholder="Введите имя" />
								{errors.name && <span className="help__block">{errors.name}</span>}
			                <label>Придумайте Пароль <span>*</span></label>
			                <input className={classnames('form-group', { 'has-error': errors.password })} onChange={PasswordInputChange} value={password} type="password" placeholder="Введите пароль" />
								{errors.password && <span className="help__block">{errors.password}</span>}
			                <label>Повторите Пароль <span>*</span></label>
			                <input className={classnames('form-group', { 'has-error': errors.passwordConfirmation })} onChange={PasswordConfirmationInputChange} type="password" value={passwordConfirmation} placeholder="Повторите Пароль" />
								{errors.passwordConfirmation && <span className="help__block">{errors.passwordConfirmation}</span>}
			                <label>Ваш email </label>
			                <input  className={classnames('form-group', { 'has-error': errors.email })} onChange={EmailInputChange} value={email} type="text" placeholder="Ваш email" />
								{errors.email && <span className="help__block">{errors.email}</span>}
			                <p>C <Link to="/conditions">условиями</Link> ознакомлен</p><input className="checkbox__input" onClick={ConditionAgree} type="checkbox" />
			                <button className={classnames({ 'button__reg': isOpen })} disabled={isOpen} onClick={RegActions} >Регистрация</button>
						</form>
				}

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
