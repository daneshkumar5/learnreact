import React from "react";
import "./Solution.css"
const Solution = () => {
    const solve = [
        {
            name:"kewalram",
            age:35,
            department:"medical",
            location:"mithi",
        },
        {
            name:"akshay",
            age:13,
            department:"engenering",
            location:"mithi",
        },
        {
            name:"arpna",
            age:11,
            department:"medical",
            location:"mithi",
        },
        {
            name:"Danesh",
            age:19,
            department:"computer science",
            location:"malanhore veena",
        }
    ]
    return (
        <>
        <div className="family">
            {
                solve.map((item,index) => (
                    <>
                    <div Keys={index}className="home">
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
export default Solution;
