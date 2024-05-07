import React, { useState } from 'react';

interface User {
  email: string;
  password: string;
}
export default function Ex09() {
  const [user, setUser] = useState<User>({
    email: '',
    password: '',
  });
  const [submittedUser, setSubmittedUser] = useState<User | null>(null);

  const register = () => {
    setSubmittedUser(user);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  return (
    <div>
      <b>Ex09</b><br />
      <b>Form</b><br />
      <input
        name="email" onChange={handleChange} type="text"placeholder="Nhap email"
      />
      <br />
      <input
        name="password" onChange={handleChange} type="password" placeholder="Nhap mat khau"
      />
      <br />
      <button onClick={register}>Submit</button>
      {submittedUser && (
        <div>
          <p>Email: {submittedUser.email}</p>
          <p>Password: {submittedUser.password}</p>
        </div>
      )}
    </div>
  );
}