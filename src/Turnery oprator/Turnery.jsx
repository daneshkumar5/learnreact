import React, { useState } from 'react'

const Turnery = () => {

    const [value,setvalue] = useState(false)
  return (
    <div>

        <button onClick={()=>setvalue(true)}>{value===false?"done":"fail"}</button>
    </div>
  )
}

export default Turnery