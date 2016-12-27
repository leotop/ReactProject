import React from 'react';
import { Link } from 'react-router';
import '../css/logo.sass';

export default class Logo extends React.Component {
    render() {
        return (
    		<div className="logo__container">
    			<div>
                    <Link to="/">
        				<img src="../../logo.png" alt="Alt" />
    	                <h1>EuropAuto</h1>
    	                <p>Интернет-магазин автозапчастей</p>
                    </Link>
    			</div>

                <div className="contact">
        			<p>Контакты:</p>
	        		<span><i className="fa fa-phone" aria-hidden="true"></i>8-920-111-52-65,</span>
	        		<span><i className="fa fa-phone" aria-hidden="true"></i>8-920-111-52-64</span>
	        		<br />
	        		<span><i className="fa fa-phone" aria-hidden="true"></i>8-920-11-11-052,</span>
	        		<span><i className="fa fa-phone" aria-hidden="true"></i>8-920-111-20-52</span>
	        		<br />
	        		<span>Нижегородская обл. г. Дзержинск ул. Советская 3</span>
        		</div>
            </div>
        );
    }
}
