import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import Logo from "./components/logo";
// import TopPannel from './containers/toppannel';
// import Slider from "./containers/slaider";
// import Premium from "./containers/premium";
// import Footer from "./containers/footer";
// import TopMenu from "./containers/topmenu";

import './css/all.sass';

const store = configureStore();

class App extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <header>
                    <Logo />
                    {/* <TopPannel />
                    <TopMenu />
                    <div className="routes__classes">
                        {this.props.content}
                    </div> */}
                </header>
                {/* <Footer/> */}
            </div>
        );
    }
}

render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('mount-point')
)
