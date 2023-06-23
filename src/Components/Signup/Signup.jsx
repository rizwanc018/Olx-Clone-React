import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { auth, db } from '../../firebase/config';
import { addDoc, collection } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate()

  const [Username, setUsername] = useState('')
  const [Email, setEmail] = useState('')
  const [Phone, setPhone] = useState('')
  const [Password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const { user } = await createUserWithEmailAndPassword(auth, Email, Password)
      await updateProfile(user, { displayName: Username })
      await addDoc(collection(db, 'users'), {
        id: user.uid,
        username: Username,
        phone: Phone
      })
      navigate('/login')
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
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
            value={Email}
            onChange={e => setEmail(e.target.value)}
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
            value={Phone}
            onChange={e => setPhone(e.target.value)}
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
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
