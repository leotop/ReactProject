import React from 'react';

import '../css/mainpage/main-slider.sass';

var clear1,
    clear2,
    clear3,
    clear4;

export default class MainSlider extends React.Component {
    constructor() {
        super();
        this.state = {
            params: 0,
            isOpen1: true,
            isOpen2: false,
            isOpen3: false,
            clear: true
        }


    }

    isOpenOne() {
        this.setState({ isOpen1: true })
        this.setState({ isOpen2: false })
        this.setState({ isOpen3: false })
    }

    isOpenTwo() {
        this.setState({ isOpen1: false })
        this.setState({ isOpen2: true })
        this.setState({ isOpen3: false })
    }

    isOpenThree() {
        this.setState({ isOpen1: false })
        this.setState({ isOpen2: false })
        this.setState({ isOpen3: true })
    }


    handlerSliderRight() {
            if(this.state.params === 0) {
                clear1 = setTimeout(() => {
                    this.setState({ params: this.state.params + 1200 })
                    this.isOpenTwo()
                },5000)

                if(this.state.params <= 1200) {
                    clear2 = setTimeout(() => {
                        this.setState({ params: this.state.params + 1200 })
                        this.isOpenThree()
                        if(this.state.params === 2400) {
                            clear3 = setTimeout(() => {
                                this.setState({ params: this.state.params - 1200 })
                                this.isOpenTwo()
                            },5000)
                            clear4 = setTimeout(() => {
                                this.setState({ params: this.state.params - 1200 })
                                this.isOpenOne()
                                if(this.state.params === 0) {
                                    this.handlerSliderRight()
                                }
                            },10000)
                        }
                    },10000)
                }
            }
    }


    componentWillUnmount() {
        clearTimeout(clear1)
        clearTimeout(clear2)
        clearTimeout(clear3)
        clearTimeout(clear4)
    }

    oneHanlder() {
        this.setState({ params: 0 })
        this.isOpenOne()
    }

    twoHanlder() {
        this.setState({ params: 1200 })
        this.isOpenTwo()
    }

    threeHanlder() {
        this.setState({ params: 2400 })
        this.isOpenThree()
    }

    componentDidMount() {
        this.handlerSliderRight()

    }

	render() {

		return (
			<div className="slider__wrapper">
                <div className="ball">
                    <div style={{ "backgroundColor": this.state.isOpen1? 'teal' : '#23f5ff' }} onClick={this.oneHanlder.bind(this)}></div>
                    <div style={{ "backgroundColor": this.state.isOpen2? 'teal' : '#23f5ff' }} onClick={this.twoHanlder.bind(this)}></div>
                    <div style={{ "backgroundColor": this.state.isOpen3? 'teal' : '#23f5ff' }} onClick={this.threeHanlder.bind(this)}></div>
                </div>

				<ul className="main__slider">
                    <li style={{ 'left': `${this.state.params}px` }} className="first__child">
                        <img src="./img/marks.jpeg"></img>
                        <p>ЕвропАвто  рекомендует покупать покупать только качественные запчасти это сэкономит вам время и деньги</p>

                    </li>
                    <li style={{ 'left': `${this.state.params}px` }} className="two__child">
                        <img src="./img/marks.jpeg"></img>
                        <p>ЕвропАвто рекомендует покупать покупать только качественные запчасти это сэкономит вам время и деньги</p>

                    </li>
                    <li style={{ 'left': `${this.state.params}px` }} className="three__child">
                        <img src="./img/marks.jpeg"></img>
                        <p>ЕвропАвто  рекомендует покупать покупать только качественные запчасти это сэкономит вам время и деньги</p>
                    </li>
                </ul>

			</div>
		)
	}
}
