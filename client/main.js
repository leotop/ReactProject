import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import configureStore from './store/configureStore';


import TopPannel from './containers/toppannel';
import TopMenu from './containers/topmenu';
import MainPage from './containers/mainpage';
import Registration from './containers/registration';
import Authorization from './containers/authorization';
import ForgotPassword from './components/ForgotPassword';
import Catalog from './containers/catalog';
import Shipping from './containers/shipping';
import Basket from './containers/basket';
import Contacts from './containers/contacts';
import Footer from './containers/footer';

import './css/normalize.css'
import './css/all.sass';
import './css/all_routes_classes.sass';


console.time('d')

const store = configureStore();
store.dispatch({type: "PHOTOS_SUCCESS"})
class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <header>
                    <TopPannel />
                    <TopMenu />
                    <div className="routes__classes">
                        {this.props.children}
                    </div>
                </header>
                <Footer/>
            </div>
        );
    }
}

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={MainPage}/>
                <Route path="directory" component={Catalog} />
                <Route path="shipping" component={Shipping} />
                <Route path="basket" component={Basket} />
                <Route path="about" component={Contacts} />
                <Route path="registration" component={Registration} />
                <Route path="authorization" component={Authorization} />
                <Route path="forgotpassword" component={ForgotPassword} />
            </Route>
            {/* <Route path="*" component={No} /> */}
        </Router>
    </Provider>
    ,document.getElementById('mount-point')
)