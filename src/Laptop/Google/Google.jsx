import React from "react";
import "./Google.css";
const Google =() => {
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
        <div className="facebook">
            {
                network.map((item,index) => (
                    <>
                    <div Keys={index} className="net">
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
export default Google;