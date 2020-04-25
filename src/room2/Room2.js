import React from 'react'
import { Link } from 'react-router-dom'



  

  const Room2=()=>{

    return(
        <>

                <h1>ここはROOM2です</h1>
                <Link to="/form2">Form</Link>
                <br></br>
                <Link to="/list2">List</Link>
                <br></br>
                <Link to="/">Select</Link>


        </>
    )
  }

  export default Room2