import React from "react";
import "./English.css";
const English = () => {
    const book = [
        {
            name:"Danesh",
            age:19,
            department:"computer science",
            location:"karachi",
        },
        {
            name:"Danesh",
            age:19,
            department:"computer science",
            location:"karachi",
        },{
            name:"Danesh kumar",
            age:19,
            department:"computer science",
            location:"karachi",
        },{
            name:"Dani",
            age:19,
            department:"computer science",
            location:"mithi",
        },{
            name:"danu",
            age:19,
            department:"computer science",
            location:"mithi",
        }
    ]
    return (
        <>
        <div className="chemistry">
            {
                book.map((item,index) => (
                    <>
                    <div Keys={index} className="biology">
                        <p>serial no{index} </p>
                        <p>my name is{item.name} </p>
                        <p>my age is{item.age} </p>
                        <p>my department is{item.department} </p>
                        <p>my location is{item.location} </p>
                    </div>
                    </>
                ))
            }
        </div>
        </>
    )
}
export default English;