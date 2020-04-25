import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../config/firebase'
import Item from './Item'



const List = () => {
  const [memos, setMemos] = useState(null)

  useEffect(() => {
    firebase.firestore().collection('memos').orderBy('day','desc')
      .onSnapshot((snapshot) => {
        const memos = snapshot.docs.map(doc => {
          return doc.data()
        })

        setMemos(memos)
      })
  })

  const deleteMemo=()=>(
    firebase.firestore().collection('memos')
    .doc().delete()
  )

  return (
    <>
      <div>
        {memos &&
          memos.map(memo => {
            return <Item memo={memo} deleteMemo={deleteMemo} />
          })
        }
      </div>
      <Link to="/">Form</Link>
    </>
  )
}

export default List