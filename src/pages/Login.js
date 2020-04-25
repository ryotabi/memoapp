import React, { useState, useContext } from 'react'
import { Link, Redirect } from 'react-router-dom'
import firebase from '../config/firebase'
import { AuthContext } from '../AuthServices'


const Login = ({ history}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userName,setUserName]=useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }
  const user = useContext(AuthContext)
  if (user) {
    return <Redirect to="/" />
  }



  return (
    <>
      <h1>Login</h1>
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
            value={userName}
            onChange={(e)=>(
              setUserName(e.target.value)
            )}
          ></input>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password"
            id="password"
          ></input>
        </div>
        <div>
          <label htmlFor="gmail">gmail</label>
          <input
            type="gmail"
            id="gmail"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          ></input>
        </div>
        <button type="submit">送信</button>
      </form>
      <Link to="/signup">Signup</Link>
    </>
  )
}

export default Login