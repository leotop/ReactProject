import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactDOM from 'react-dom';


export default class Authorization extends TrackerReact(React.Component) {

    componentDidMount() {
        this.view = Blaze.render(Template._loginButtons, ReactDOM.findDOMNode(this.refs.container))
    }

    render() {
        return (
            <div ref="container" className="authorization">
            </div>
        );
    }
}
