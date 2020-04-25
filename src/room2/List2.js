import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../config/firebase'
import Item2 from './Item2'



const List = () => {
  const [memos, setMemos] = useState(null)

  useEffect(() => {
    firebase.firestore().collection('room2').orderBy('day','desc')
      .onSnapshot((snapshot) => {
        const memos = snapshot.docs.map(doc => {
          return doc.data()
        })

        setMemos(memos)
      })
  })

  const deleteMemo=()=>(
    firebase.firestore().collection('room2')
    .get().then(function(querySnapshot){
      querySnapshot.forEach(function(doc){
        console.log(doc.id, "=>", doc.data() )
        firebase.firestore().collection('room2')
        .doc(doc.id).delete()
      })
    })
  )

  return (
    <>
      <div>
        {memos &&
          memos.map(memo => {
            return <Item2 memo={memo} deleteMemo={deleteMemo} />
          })
        }
      </div>
      <Link to="/form2">Form</Link>
    </>
  )
}

export default List