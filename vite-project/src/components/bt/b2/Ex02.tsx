import React, { ChangeEvent, Component } from 'react';

interface Input {
  inputValue: string;
}

export default class Ex02 extends Component<any, Input> {
  constructor(props: Input) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <div>
        <b>Ex02</b><br />
        <input type="text" value={inputValue} onChange={this.handleChange} />
        <p>Giá trị đã nhập: {inputValue}</p>
      </div>
    );
  }
}
