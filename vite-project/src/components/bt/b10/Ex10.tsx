import React, { Component } from 'react';
interface Btn{
    showButton: boolean;
}
export default class Ex05 extends Component<any,Btn> {
  constructor(props:any) {
    super(props);
    this.state = {
      showButton: true,
    };
  }

  toggleButton = () => {
    this.setState((prevState) => ({
      showButton: !prevState.showButton,//sau moi lan cap nhat lai gtri cua button thi gtri cua no se dao lai true thanh false va false thanh true
    }));
  };

  render() {
    const { showButton } = this.state;//gan gia tri

    return (
      <div>
        <b>Ex10</b><br /><p>Giới tính:{showButton ? 'Nữ' : 'Nam'}</p>
        <button onClick={this.toggleButton}>Random Gender</button>
        
      </div>
    );
  }
}

