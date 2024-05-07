import React, { useState } from 'react'

interface User {
    userName:string,
    email:string,
}

export default function Function() {
    // const [userName,setUsername]=useState<string>("");
    // const [email,setEmail]=useState<string>("");
    const [user,setUser]=useState<User>({
        userName:"",
        email:"",
    })
    const handleClick=()=>{
        console.log("đã click");
        
    }
    //gọi hàm theo kiểu truyền tham số
    const handleDelete=(userID:any)=>{
        console.log("userID",userID);
        
    }
    //khai báo hàm register
    const register=()=>{
        console.log("đã click hàm register",user);
     
        
        
        
        
    }
    //khai báo hàm handleChange
    
    const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        // console.log("e là:",e.target.value);
        let name = e.target.name;//tên của ô input
        let value = e.target.value;// giá trị ô input
        setUser({
            ...user,[name]:value
        })
        
    }
    // const handleChangeMail =(e:React.ChangeEvent<HTMLInputElement>)=>{
    //     // console.log("e là:",e.target.value);
    //     setEmail( e.target.value);
    // }
  return (
    <div>Function
        <p onClick={()=>handleDelete(5)}>Hoa</p>
        <button onClick={handleClick}> click</button> <br />
        <label htmlFor="">userName</label>
        <input
        onChange={handleChange}
        name="userName"
         type="text" />
        <button onClick={handleClick}> click</button> <br />
        <label htmlFor="">email</label>
        <input
        onChange={handleChange}
        name='email'
         type="text" />
        <button onClick={register}>register</button>
    </div>
    
  )
}