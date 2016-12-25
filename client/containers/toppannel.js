import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as basketActions  from '../actions/basketActions';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Meteor.subscribe('tasks');


class TopPannel extends TrackerReact(React.Component) {

    SumReduce()  {
        let result = 0;
        Tasks.find({ userName: Meteor.userId() }).fetch().map(item => {
            return result += item.cost
        })
        return result
    }

    render() {
        let params = this.SumReduce.bind(this)()
        let { inputChange } = this.props.basketActions;
        let { text } = this.props.text;
        let { sendParams } = this.props.basketActions;
        return (
        	<div className="top__pannel">
                <div className="basket">
                    <a href="/basket"><i title="Корзина" className="fa fa-shopping-cart" aria-hidden="true"></i></a>
                    <p>Товаров: {Tasks.find({ userName: Meteor.userId() }).fetch().length}</p>
                    <br />
                    <p>На сумму: {params} руб.</p>
                </div>

        		<div className="search">
        			<i title="Поиск" className="fa fa-search" aria-hidden="true"></i>
        			<input className="input__search" type="text" onChange={inputChange} value={text} placeholder="Введите номер требуемой запчасти" />
                    <button onClick={sendParams} >Найти деталь</button>
        		</div>

                <div className="choice">
                    <a href="#">по номеру</a>
                    <a href="#">по vin</a>
                    <a href="#">по сайту</a>
                </div>
        	</div>
        );
    }
}



function mapStateToProps(state) {
    return {
        text: state.handlerapi,
        sendParams: state.basketActions
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        basketActions: bindActionCreators(basketActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPannel)
