import React from 'react';
import Authorization from '../containers/authorization';
import { Link, IndexLink } from 'react-router';
import '../css/topmenu.sass';


export default class TopMenu extends React.Component {
	render() {
		return (
			<div className="top__menu">
				<div className="main__menu">
					<ul>
						<li>
							<IndexLink to="/">Главная</IndexLink>
						</li>
						<li><Link to="/shipping">Способы оплаты</Link></li>	
						<li><Link to="/contacts">Контакты</Link></li>
						<li><Link to="/basket">Корзина</Link></li>
						{
							localStorage.getItem('jwtToken') ? <li><Link to="/personaloffice">Личный кабинет</Link></li> : <div></div>
						}

					</ul>
				</div>
			</div>
		)
	}
}
