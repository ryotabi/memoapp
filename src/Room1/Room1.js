import React from 'react'

import { Link } from 'react-router-dom'




  const Room1=()=>{

    return(
        <>
 
                <h1>ここはROOM1です</h1>
                <Link to ="/form1">Form</Link>
                <br></br>
                <Link to ="/list1">List</Link>
                <br></br>
                <Link to="/">Select</Link>

        </>
    )
  }

  export default Room1