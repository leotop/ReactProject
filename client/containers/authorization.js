import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../actions/AuthActions';
import classnames from 'classnames';

class Authorization extends React.Component {


    render() {
        const { name, password } = this.props.AuthActionsData;
        const { AuthActions, NameInputChange, PasswordInputChange } = this.props.AuthActions
        return (
            <div className="registration__container">
                <label>Ваше Имя <span>*</span></label>
                <input onChange={NameInputChange} value={name} type="text" placeholder="Введите ваше имя" />
                <label>Придумайте Пароль <span>*</span></label>
                <input onChange={PasswordInputChange} value={password} type="password" placeholder="Введите ваш пароль" />
                <button onClick={AuthActions} >Регистрация</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        AuthActionsData: state.authorization,
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        AuthActions: bindActionCreators(AuthActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authorization)
