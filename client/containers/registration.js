import React from 'react';
import { Link } from 'react-router';

import '../css/registration.sass';

export default class Registration extends React.Component {

	render() {
		return (
			<div className="registration__container">
                <h2>Регистрация</h2>
				<label>Ваше Имя <span>*</span></label>
                <input type="text" placeholder="Введите имя" />
                <label>Придумайте Пароль <span>*</span></label>
                <input type="password" placeholder="Введите пароль" />
                <label>Повторите Пароль <span>*</span></label>
                <input type="password" placeholder="Повторите Пароль" />
                <label>Ваш email </label>
                <input type="password" placeholder="Ваш email" />
                <p>C <Link to="/conditions">условиями</Link> ознакомлен</p><input className="checkbox__input" type="checkbox" />
                <button>Регистрация</button>
			</div>
		)
	}
}
