import React, { useState } from "react";
const Hook = () => {
    const [name, setname] = useState("kamlesh")
    const [count, setcount] = useState(0)
    const handleCount = ()=>{setcount(count+1)}
    return (
        <div>
            <button onClick={()=>setname("kamlesh kumar")}>Update name</button>
            <h2>My name is {name} </h2>
            <h2 align="center">{count} </h2>
            <button onClick={handleCount} style={{padding:"7px 15px"}}>count is {count}</button>
            <button onClick={()=>setcount(0)} style={{padding:"7px 15px"}}>clear</button>
            
        </div>
        )
}
export default Hook;
