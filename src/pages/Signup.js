import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../config/firebase.js'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(err => {
        console.log(err)
      })

    console.log(email)
    console.log(password)
  }
  return (
    <>
      <h1>New User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"

          ></input>
        </div>
        <div>
          <label htmlFor="useName">usename</label>
          <input
            type="text"
            id="useName"
          ></input>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          ></input>
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          ></input>
        </div>
        <button type="submit">送信</button>
      </form>
      <Link to="/login">Login</Link>
    </>
  )
}

export default SignUp