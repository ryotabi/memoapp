import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../config/firebase'
import Item3 from './Item3'



const List = () => {
  const [memos, setMemos] = useState(null)

  useEffect(() => {
    firebase.firestore().collection('room3').orderBy('day','desc')
      .onSnapshot((snapshot) => {
        const memos = snapshot.docs.map(doc => {
          return doc.data()
        })

        setMemos(memos)
      })
  })

  const deleteMemo=()=>(
    firebase.firestore().collection('room3')
    .get().then(function(querySnapshot){
      querySnapshot.forEach(function(doc){
        console.log(doc.id, "=>", doc.data() )
        firebase.firestore().collection('room3')
        .doc(doc.id).delete()
      })
    })
  )

  return (
    <>
      <div>
        {memos &&
          memos.map(memo => {
            return <Item3 memo={memo} deleteMemo={deleteMemo} />
          })
        }
      </div>
      <Link to="/form3">Form</Link>
    </>
  )
}

export default List