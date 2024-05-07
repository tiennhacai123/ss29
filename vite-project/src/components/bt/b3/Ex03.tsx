import React, { Component } from 'react'
interface Date{
    date:string,
}
export default class Ex03 extends Component<any,Date> {
    constructor(props:Date) {
        super(props);
        this.state = {
            date:''
        }
    }
    handleClick=(e:React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({date:e.target.value});//ham cap nhat lai gia tri o input
    }
  render() {
    const {date} = this.state;//tạo một biến date và gán giá trị của thuộc tính date trong state cho biến đó.
    return (
      <div><b>Ex03</b><br />
        <input type="date" value={date} onChange={this.handleClick} />
        <p>Thời gian:{date}</p>
      </div>
    )
  }
}
