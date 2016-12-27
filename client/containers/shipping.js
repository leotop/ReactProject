import React from 'react';
import '../css/shipping__container.sass';


export default class Shipping extends React.Component {

	render() {
		return (
			<div className="shipping__container">
				<h4>Способы оплаты:</h4>
                <h5>Перевод на Банковскую карту Сбербанка России</h5>
                <h6>Номер сберкарты: <span>0000000000</span> до <span>04.2021</span></h6>
                <ul>
                    <li>Оплата банковской картой<img src="visa/visa_electron.png"></img><img src="visa/visa-mastercard.png"></img><img src="visa/maestro.png"></img></li>

                    <li>Безналичные переводы денег при оплате заказов в интернет-магазине <span>ЕвропАвто</span> должны осуществляться с указание Вашего номера заказа</li>
                    <li>Вашим банком могут взиматься комиссионные сборы. Размер сборов вы можете уточнить в вашем банке</li>
                </ul>
                <h5>Наличный способ оплаты</h5>
                <ul>
                    <li>Наличный способ оплаты в нашем офисе</li>
                    <li>Оплата банковской картой<img src="visa/visa_electron.png"></img><img src="visa/visa-mastercard.png"></img><img src="visa/maestro.png"></img> в нашем офисе</li>

                </ul>
                <img className="oplata__jpg" src="visa/oplata.jpg"></img>
                <p>Более полную информацию о способах и условиях оплаты <br /> Вы можете получить у наших менеджеров по телефонам:
                    <b>8-920-111-52-65</b>
                    <b>8-920-111-52-64</b>
                    <b>8-920-11-11-052</b>
                    <b>8-920-111-20-52</b>
                    Или написать нам письмо на электронную почту: <a>europautodz@mail.ru</a>
                    <br />
                    Мы с удовольствием ответим на все интересующие Вас вопросы!</p>
			</div>
		)
	}
}
