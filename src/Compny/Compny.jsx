import React from "react";
import "./Compny.css";
const Compny = () => {
    const person = [
        {
            name: "rahool",
            age: 6,
            department: "no department",
            location: "thar",
        },
        {
            name: "munna",
            age: 22,
            department: "comirse",
            location: "karaci",
        },
        {
            name: "deewan",
            age: 12,
            department: "science ",
            location: "badin",
        }, {
            name: "vinu",
            age: 5,
            department: "chemistry  ",
            location: "golarchi",
        }

    ]
    return (
        <>
            <div className="Local-div">
                {
                    person.map((item,index) => (
                        <>
                            <div key={index} className="card">
                                <p>serial no {index} </p>
                                <p> my name is {item.name} </p>
                                <p> my age is {item.age} </p>
                                <p> my department is {item.department} </p>
                                <p> my location is {item.location} </p>
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}
export default Compny;