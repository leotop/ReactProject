import React from 'react';


export default class Slider extends React.Component {
    constructor() {
        super();
        this.state = {
            array: ["first__element","two__element","three__element"],
            matrix: [
                     `matrix3d(${1},${0},${1.00},${0.001},${0.00},${1},${0.00},${0},${0},${0},${1},${0},${200},${0},${0},${1.2})`,
                     `matrix3d(${1},${0},${1.00},${0.000},${0.00},${1},${0.00},${0},${0},${0},${1},${0},${0},${0},${0},${1.0})`,
                     `matrix3d(${1},${0},${1},${-0.001},${0.00},${1},${0.00},${0},${0},${0},${1},${0},${-200},${0},${0},${1.2})`
                    ]
        }
    }

    handler() {
        let last = this.state.array.slice(-2)
        let first = this.state.array.slice(0,1)
        this.setState({ array: last })
        this.setState({ array: last.concat(first) })
    }

    render() {
        return (

            <div className="container__slider" >
                <div className="react__slider">
                    <i onClick={this.handler.bind(this)} className="fa fa-angle-left fa-5x" aria-hidden="true"></i> 
                    <i onClick={this.handler.bind(this)} className="fa fa-angle-right fa-5x" aria-hidden="true"></i>
                <ul className="carousel">
                    {
                        this.state.array.map((item, index) => {
                            return (
                                    // style={{"transform": `${this.state.matrix[index]}`}}
                                    <li  className={item} key={index}><img src="abstractia.jpg"/></li>
                                )
                        })
                    }
                </ul>          
                </div>
              
            </div>
            
        );
    }
}








 // <li 
                    //     // style={{
                    //     //     "transform": `matrix3d(${1},${0},${1.00},${0.001},${0.00},${1},${0.00},${0},${0},${0},${1},${0},${200},${0},${0},${1.2})`
                    //     // }} 
                    //     className="first__element" ><img src="abstractia.jpg" /></li>
                    // <li 
                    //     // style={{
                    //     //     "transform": `matrix3d(${1},${0},${1.00},${0.000},${0.00},${1},${0.00},${0},${0},${0},${1},${0},${0},${0},${0},${1.0})`
                    //     // }}
                    //     className={this.state.two} ><img src="abstractia.jpg" /></li>
                    // <li 
                    //     // style={{
                    //     //     "transform": `matrix3d(${1},${0},${1},${-0.001},${0.00},${1},${0.00},${0},${0},${0},${1},${0},${-200},${0},${0},${1.2})`,
                    //     //     "zIndex": "-1"
                    //     // }} s