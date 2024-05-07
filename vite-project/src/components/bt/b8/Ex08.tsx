import React, { Component } from 'react';
interface Count{
    count: number;
}
export default class Example extends Component<any,Count> {
  constructor(props:Count) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <b>Ex08</b><br />
        <button onClick={this.handleClick}>Click {count} lần</button>
      </div>
    );
  }
}