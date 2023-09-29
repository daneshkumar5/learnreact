import React, { useState } from 'react'
const Footer = () =>{
  const [book,setbook]= useState(false)
  return (
    <div>

        <button onClick={()=>setbook(!book)}>{book===false?"pakistan":"india"}</button>
        
              {/* <button  onClick={()=>setcount(0)} style={{padding:"12px 20px"}}>clear</button> */}

    </div>
  )
}

export default Footer