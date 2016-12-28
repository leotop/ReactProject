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

						{/* <li><Link to="/directory">Каталоги</Link></li> */}
						{/* <li><Link to="/news">Новости</Link></li> */}
						<li><Link to="/shipping">Способы оплаты</Link></li>
						<li><Link to="/basket">Корзина</Link></li>
						<li><Link to="/about">О нас</Link></li>
					</ul>
				</div>
			</div>
		)
	}
}
