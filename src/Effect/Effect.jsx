import React,{useState  } from "react";
const Effect = () => {
    const [name, setname] = useState("parshotam")
    return (
        <div>
            <h3>My name is {name} </h3>
            <button onClick={() => setname("parshotam kumar")}>update name</button>
        </div>
    )
}
export default Effect;