import React from 'react';



export default class MainSlider extends React.Component {
    constructor() {
        super();
        this.state = {
            params: 0,
            teal1: 'teal',
            teal2: '#23f5ff',
            teal3: '#23f5ff'
        }
        this.handlerSliderRight = this.handlerSliderRight.bind(this)
        this.changeColor = this.changeColor.bind(this)
    }

    componentDidMount() {
        this.handlerSliderRight()
    }

    changeColor() {
        if(this.state.params > 0) {
            this.setState({ teal1: '#23f5ff' })
            this.setState({ teal2: 'teal' })
            this.setState({ teal3: '#23f5ff' })
        }
        if(this.state.params > 1200) {
            this.setState({ teal1: '#23f5ff' })
            this.setState({ teal2: '#23f5ff' })
            this.setState({ teal3: 'teal' })
        }
        if(this.state.params === 0) {
            this.setState({ teal1: 'teal' })
            this.setState({ teal2: '#23f5ff' })
            this.setState({ teal3: '#23f5ff' })
        }
    }


    handlerSliderRight() {
        setInterval(() => {
            if(this.state.params === 0) {
                this.setState({ params: this.state.params + 1200 })
            }
            if(this.state.params > 2400) {
                this.setState({ params: this.state.params -1200 })
            }
            this.changeColor()
        }, 5000)
    }

    oneHanlder() {
        this.setState({ params: 0 })
        this.changeColor()
    }

    twoHanlder() {
        this.setState({ params: 1200 })
        this.changeColor()
    }

    threeHanlder() {
        this.setState({ params: 2400 })
        this.changeColor()
    }

	render() {

		return (
			<div className="slider__wrapper">
                <div className="ball">
                    <div style={{ "backgroundColor":`${this.state.teal1}` }} onClick={this.oneHanlder.bind(this)}></div>
                    <div style={{ "backgroundColor":`${this.state.teal2}` }} onClick={this.twoHanlder.bind(this)}></div>
                    <div style={{ "backgroundColor":`${this.state.teal3}` }} onClick={this.threeHanlder.bind(this)}></div>
                </div>
                {/* <i onClick={this.handlerSliderLeft.bind(this)} className="fa fa-chevron-left fa-2x" aria-hidden="true"></i>
                <i onClick={this.handlerSliderRight.bind(this)} className="fa fa-chevron-right fa-2x" aria-hidden="true"></i> */}
				<ul className="main__slider">
                    <li style={{ 'left': `${this.state.params}px` }} className="first__child">
                        <img src="marks.jpeg"></img>
                        <p>ЕвропАвто  рекомендует покупать покупать только качественные запчасти это сэкономит вам время и деньги</p>

                    </li>
                    <li style={{ 'left': `${this.state.params}px` }} className="two__child">
                        <img src="marks.jpeg"></img>
                        <p>ЕвропАвто рекомендует покупать покупать только качественные запчасти это сэкономит вам время и деньги</p>

                    </li>
                    <li style={{ 'left': `${this.state.params}px` }} className="three__child">
                        <img src="marks.jpeg"></img>
                        <p>ЕвропАвто  рекомендует покупать покупать только качественные запчасти это сэкономит вам время и деньги</p>

                    </li>
                </ul>

			</div>
		)
	}
}
