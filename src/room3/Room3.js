import React from 'react'

import { Link } from 'react-router-dom'




  const Room3=()=>{

    return(
        <>

                <h1>ここはROOM3です</h1>
                <Link to="/form3">Form</Link>
                <br></br>
                <Link to="/list3">List</Link>
                <br></br>
                <Link to="/">Select</Link>


        </>
    )
  }

  export default Room3