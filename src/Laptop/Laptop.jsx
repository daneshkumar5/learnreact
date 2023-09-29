import React from "react";
import "./Laptop.css";
const Laptop =() => {
    const network = [
        {
            name:"solanki",
            age:46,
            department:"physics",
            location:"karachi",
        },
        {
            name:"ram",
            age:69,
            department:"clark",
            location:"islamlot",
        },
        {
            name:"muneet",
            age:32,
            department:"madical",
            location:"badin",
        },
        {
            name:"suneel",
            age:45,
            department:"house",
            location:"badin",
        }
    ]
    return (
        <>
        <div className="singer">
            {
                network.map((item,index) => (
                    <>
                    <div Keys={index} className="songs">
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
export default Laptop;