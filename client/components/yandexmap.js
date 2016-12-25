import React from 'react';

export default class YandexMap extends React.Component {

	render() {

		return (
			<div className="yandex__map">
				<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=3D5b3ysO-6xDWu_8AWniKDSWH6jMJIFA&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;sourceType=constructor&amp;scroll=true"></script>
			</div>
		)
	}
}
