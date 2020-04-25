import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import firebase from '../config/firebase'
import Item1 from './Item1'
import styled from 'styled-components'




const List = () => {
  const [memos, setMemos] = useState(null)

  useEffect(() => {
    firebase.firestore().collection('room1').orderBy('day','desc')
      .onSnapshot((snapshot) => {
        const memos = snapshot.docs.map(doc => {
          return doc.data()
        })

        setMemos(memos)
      })
  })

  const deleteMemo=()=>(
    firebase.firestore().collection('room1')
    .get().then(function(querySnapshot){
      querySnapshot.forEach(function(doc){
        console.log(doc.id, "=>", doc.data() )
        firebase.firestore().collection('room1')
        .doc(doc.id).delete()
      })
    })
  )

  return (
    <>
    <h1>ルーム１</h1>
      <div>
        {memos &&
          memos.map(memo => {
            return <Item1 memo={memo} deleteMemo={deleteMemo} />
          })
        }
      </div>
      <Link to="/form1">Form</Link>
    </>
  )
}

// const Title = styled 'h1'

export default List