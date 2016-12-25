import React from 'react';

import Authorization from '../containers/authorization';

export default class TopMenu extends React.Component {
	render() {
		return (
			<div className="top__menu">
				<Authorization />
				<div className="main__menu">
					<ul>
						<li>
							<a href="/">Главная</a>
						</li>
						<li><a href="/directory">Каталоги</a></li>
						<li><a href="/news">Новости</a></li>
						<li><a href="/shipping">Способы оплаты</a></li>
						<li><a href="/basket">Корзина</a></li>
						<li><a href="/about">О нас</a></li>
					</ul>
				</div>
			</div>
		)
	}
}
