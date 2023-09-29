import React, { useState } from 'react'

const Flate = () => {
    const [color, setcolor] = useState("")
    const [show, setshow] = useState(false)
    return (
        <div align="center">
            <button onClick={() => setshow(!show)}>show passowd</button>
            <p>{color}</p>

            <h3 style={{ background: color, fontSize: "30px" }}>pakistan</h3>
            <input placeholder="enter password" type={show ? "text" : 'password'} />
            <input type="text" placeholder='data' value={color} onChange={(e) => setcolor(e.target.value)} />
        </div>
    )
}

export default Flate