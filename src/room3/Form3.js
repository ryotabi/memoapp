import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../config/firebase'




const Form3 = () => {
  const [title, setTitle] = useState('')
  const [memo, setMemo] = useState('')
  const [day, setDay] = useState('')
  const [user, setUser] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    firebase.firestore().collection('room3').add({
      memo: memo,
      title: title,
      day: day,
      user: user,
    })
    
  
  

    setTitle('')
    setMemo('')
    setDay('')
  }

  return (
    <>
      <h1>Memo</h1>
      <form
        onSubmit={handleSubmit}
      >
        <div>
          <label htmlFor='user'>ユーザー</label>
          <input
            id="user"
            type="text"
            value={user}
            onChange={(e) => {
              setUser(e.target.value)
            }}
          ></input>
        </div>
        <div>
          <label htmlFor='day'>日付</label>
          <input
            id="day"
            type="date"
            value={day}
            onChange={(e) => {
              setDay(e.target.value)
            }}
          ></input>
        </div>
        <div>
          <label htmlFor='title'>タイトル</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={e => {
              setTitle(e.target.value)
            }
            }
          >
          </input>
        </div>
        <div>
          <label htmlFor="text">memo</label>
          <textarea
            id="text"
            value={memo}
            onChange={(e) => {
              setMemo(e.target.value)
            }
            }
          ></textarea>
        </div>
        <button
          type="submit"
        >送信</button>
      </form>
      <Link to="/list3">List</Link>
    </>
  )
}

export default Form3