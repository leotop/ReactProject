import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AuthActions from '../actions/AuthActions';
import classnames from 'classnames';

class Authorization extends React.Component {

    render() {
        let { name , password, errors } = this.props.AuthActionsData;
        let { AuthActions, NameInputChange, PasswordInputChange } = this.props.AuthActions;
        return (
            <div className="registration__container">
                {
                    localStorage.getItem('jwtToken') ?

                        <div><h2>И чего ты тут забыл?</h2></div>
                                                     :
                        <form onSubmit={AuthActions}>
                            <h2>Авторизация</h2>
                            {/* <span className="help__block">{errors.name}</span> */}
                            {/* <span className="help__block">{errors.password}</span> */}
                            <label>Ваше Имя <span>*</span></label>
                            <input onChange={NameInputChange} value={name} type="text" placeholder="Введите ваше имя" />
                            {/* {errors.name && <span className="help__block">{errors.name}</span>} */}
                            <label>Придумайте Пароль <span>*</span></label>
                            <input onChange={PasswordInputChange} value={password} type="password" placeholder="Введите ваш пароль" />
                            {/* {errors.password && <span className="help__block">{errors.password}</span>} */}
                            <button onClick={AuthActions}>Войти</button>
                        </form>
                }
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
