import React from "react";
import "./Hellosir.css";
const Hellosir =() => {
    const network = [
        {
            name:"nand",
            age:36,
            department:"lab",
            location:"karachi",
        },
        {
            name:"sapna",
            age:45,
            department:"physics",
            location:"islambad",
        },
        {
            name:"guneesh",
            age:89,
            department:"madical",
            location:"hyd",
        },
        {
            name:"parshotam",
            age:12,
            department:"lab",
            location:"golarchi",
        }
    ]
    return (
        <>
        <div className="whatsapp">
            {
                network.map((item,index) => (
                    <>
                    <div Keys={index} className="kite">
                        <p>serial no {index} </p>
                        <p>my name is {item.name} </p>
                        <p>my age is {item.age} </p>
                        <p>my department is {item.department} </p>
                        <p>my Location is {item.location} </p>
                    </div>
                    </>
                ))
            }
        </div>
        </>
    )
}
export default Hellosir;