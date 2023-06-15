import React, { useState } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {
const [Username, setUsername] = useState('')
const [Email, setEmail] = useState('')
const [Phone, setPhone] = useState('')
const [Password, setPassword] = useState('')
console.log(Username);
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={Username}
            onChange={e => setUsername(e.target.value)}
            defaultValue=""
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={Phone}
            onChange={e => setPhone(e.target.value)}
            defaultValue=""
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            value={Email}
            onChange={e => setEmail(e.target.value)}
            defaultValue=""
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={Password}
            onChange={e => setPassword(e.target.value)}
            defaultValue=""
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
