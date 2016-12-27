import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions  from '../actions/hanlderactions';

import MainSlider from '../containers/main-slider';
import Advantages from '../components/advantages';
import Purchased from './Purchased';

import '../css/mainpage/mainpage.sass';

class MainPage extends React.Component {

    render() {
        return (
            <div className="main__page">
                <MainSlider />
                <Purchased />
                <Advantages />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authorization: state
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        taskActions: bindActionCreators(taskActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
