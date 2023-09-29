import React, { useState } from "react";
const Paragon = () =>{
    const [mobile, setmobile] = useState("cower")
    console.log(mobile)
    return (
        <div>
            <h2>My english is {mobile} </h2>
            <button onClick={() => setmobile("Book cower")}>{mobile==="cower" ?"contact us":"update"}</button>
        </div>
    )
}
export default Paragon;