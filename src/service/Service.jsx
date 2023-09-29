import React from "react";
import "./service.css"
const Service = () => {
    const name = "Danesh"
    const a = 10;
    const b = 20;
    const person = [
        {
            name: "raja",
            age: 20,
            department: "computer science ",
            location: "karachi",
        },
        {
            name: "kamleh",
            age: 22,
            department: "biology ",
            location: "mithi",
        },
        {
            name: "vinod",
            age: 12,
            department: "chemistry science ",
            location: "golarchi",
        }, {
            name: "vinod",
            age: 12,
            department: "chemistry science ",
            location: "golarchi",
        }

    ]
    return (
        <>
            <div className="main-div">
                {
                    person.map((item,index) => (
                        <>
                            <div key={index} className="box">
                                <p>serial no {index} </p>
                                <hr />
                                <div className="" style={{width:"100%",backgroundColor:"white",height:"2px"}}></div>
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
export default Service;