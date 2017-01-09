import React from 'react';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';

import '../css/contacts.sass';

export default class Contacts extends React.Component {

	render() {
		return (
			<div className="contacts__container">
				<h2>Контакты</h2>
					<div className="call__us">
						<span>Позвоните нам:</span>
						<p>8-920-111-52-65</p>
						<p>8-920-111-52-65</p>
						<p>8-920-111-52-65</p>
						<p>8-920-111-52-65</p>
					</div>

					<div className="write__us">
						<span>Или напишите:</span>
						<p><a>europautodz@gmail.com</a></p>
					</div>


				<h2>Нас просто найти</h2>

                <div className="local__map">
                    <img src="./img/local.jpg"/>
                </div>
                <div className="yandex__map">
                    <Map pt={56.25564685, 43.46306741} width={1200} height={257} center={[56.25564685, 43.46306741]} zoom={15}>
                        <Marker lat={56.25564685} lon={43.46306741} />
                    </Map>
                </div>
			</div>
		)
	}
}
