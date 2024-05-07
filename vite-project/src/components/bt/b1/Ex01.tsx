import React, { Component } from 'react'

export default class Ex01 extends Component {
    handleClick = () =>{
        console.log("Clicked!");
    }
  render() {
    return (
      <div>
        <b>Exercises01</b> <br />
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    )
  }
}
