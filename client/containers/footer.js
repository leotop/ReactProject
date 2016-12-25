import React from 'react';


export default class Footer extends React.Component {

   
    render() {
        return (
            <div className="footer__section">
            	<ul className="top__contact">
                    <li>
                        <div>
                            <p>Контакты:</p>
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <span>8 (831) 411-18-65</span>
                            <span>8 (831) 411-18-65</span>
                        </div>
                        <div>
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <a>europautodz@gmail.com</a>
                        </div>
                    </li>

                    <li>
                        <div>
                            <p>Режим работы:</p>
                            <i className="fa fa-building-o" aria-hidden="true"></i>
                            <span>Пн-пт 9.00 - 19.00</span>
                            <span className="low__span_one" >Сб-вс 10.00 - 17.00</span>
                        </div>
                        <div>
                                        
                        </div>
                    </li>

                    <li>
                        <div>
                            <p>Адресс:</p>
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            <span>Нижегородская обл.</span>
                            <span className="low__span_two" >г. Дзержинск ул.Советская 3</span>
                        </div>
                        <div>
                            
                        </div>
                    </li>
                </ul>
           		<div className="right__block">© 2004-2016 EuropAuto. All rights reserved.</div>
            </div>  
        );
    }
}