import React from 'react';

import '../css/mainpage/purchased.sass';

export default class Purchased extends React.Component {

	render() {
		return (
			<div className="purchased">
				<h2>Самые покупаемые товары</h2>
				<ul>
					<li>
						<div><img src="purchased/koita.jpg"></img></div>
						<p>2250 руб.</p>
						<span>Лампа Высокотемпературная KOITO WHITEBEAM PREMIUM, комплект 2 шт</span>
						<button>В корзину</button>
					</li>
					<li>
						<div><img src="purchased/colodki_nibk.jpg"></img></div>
						<p>от 650 руб.</p>
						<span>Тормозные колодки HSB Hong Sung Brake Gold </span>
						<button>В корзину</button>
					</li>
					<li>
						<div><img src="purchased/ctr_podveska.jpg"></img></div>
						<p>от 450 руб.</p>
						<span>Лампа Высокотемпературная KOITO WHITEBEAM PREMIUM, комплект 2 шт</span>
						<button>В корзину</button>
					</li>
					<li>
						<div><img src="purchased/colodki_nibk.jpg"></img></div>
						<p>от 650 руб.</p>
						<span>Лампа Высокотемпературная KOITO WHITEBEAM PREMIUM, комплект 2 шт</span>
						<button>В корзину</button>
					</li>
					<li>
						<div><img src="purchased/clips_masuma.jpg"></img></div>
						<p>от 15 руб.</p>
						<span>Лампа Высокотемпературная KOITO WHITEBEAM PREMIUM, комплект 2 шт</span>
						<button>В корзину</button>
					</li>
					<li>
						<div><img src="purchased/g_energy.jpg"></img></div>
						<p>2250 руб.</p>
						<span>Лампа Высокотемпературная KOITO WHITEBEAM PREMIUM, комплект 2 шт</span>
						<button>В корзину</button>
					</li>
					<li>
						<div><img src="purchased/denso.jpg"></img></div>
						<p>2250 руб.</p>
						<span>Лампа Высокотемпературная KOITO WHITEBEAM PREMIUM, комплект 2 шт</span>
						<button>В корзину</button>
					</li>
					<li>
						<div><img src="purchased/suprotek.jpg"></img></div>
						<p>2250 руб.</p>
						<span>Лампа Высокотемпературная KOITO WHITEBEAM PREMIUM, комплект 2 шт</span>
						<button>В корзину</button>
					</li>
				</ul>
			</div>
		)
	}
}
