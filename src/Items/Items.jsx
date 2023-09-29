import React from "react";
import "./Item.css";
const Items =() => {
    const boss = [
        {
            name:"danesh",
            age:20,
            department:"computer science",
            location:"mithi",
        },
        {
            name:"danesh",
            age:20,
            department:"computer science",
            location:"mithi",
        },
        {
            name:"danesh",
            age:20,
            department:"computer science",
            location:"mithi",
        },
        {
            name:"danesh",
            age:20,
            department:"computer science",
            location:"mithi",
        },
        {
            name:"danesh",
            age:20,
            department:"computer science",
            location:"mithi",
        },
        {
            name:"danesh",
            age:20,
            department:"computer science",
            location:"mithi",
        },
    ]
    return (
        <>
        <div className="container">
            {
                boss.map((item,index) => (
                    <>
                    <div Keys={index} className="boxx">
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
export default Items;