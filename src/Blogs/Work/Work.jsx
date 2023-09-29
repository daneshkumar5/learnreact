import React from "react";
import "./Work.css";
const Work =() => {
    const biscuit = [
        {
            name:"muneet",
            age:46,
            department:"i dont no",
            location:"karachi",
        },
        {
            name:"raja",
            age:29,
            department:"clark",
            location:"islamlot",
        },
        {
            name:"sapna",
            age:32,
            department:"madical",
            location:"badin",
        },
        {
            name:"sanbho",
            age:45,
            department:"house",
            location:"badin",
        }
    ]
    return (
        <>
        <div className="allfamily">
            {
                biscuit.map((item,index) => (
                    <>
                    <div Keys={index} className="young">
                        <p>serial no {index} </p>
                        <p>my name is {item.name} </p>
                        <p>my age is {item.age} </p>
                        <p>my department is{item.department} </p>
                        <p>my Location is{item.location} </p>
                    </div>
                    </>
                ))
            }
        </div>
        </>
    )
}
export default Work;