import React from 'react';

export default class Advantages extends React.Component {

	render() {
		return (
			<div className="advantages">
				<h2>Наши преимущества</h2>
				<div className="advantages__container">
					<div><i className="fa fa-thumbs-up fa-4x" aria-hidden="true"></i><span>Качество</span><p>Мы предлогаем только <br /> качественные автозапчасти <br /> ведущих брендов</p></div>
					<div><i className="fa fa-exchange fa-4x" aria-hidden="true"></i><span>Скорость</span><p>Быстрая доставка</p></div>
					<div><i className="fa fa-money fa-4x" aria-hidden="true"></i><span>Цена</span><p>Лучшие цены в городе</p></div>
					<div><i className="fa fa-star fa-4x" aria-hidden="true"></i><span>Опыт</span><p>Более 7 лет опыта <br /> и 1000 довольных клиентов</p></div>
				</div>
			</div>
		)
	}
}
