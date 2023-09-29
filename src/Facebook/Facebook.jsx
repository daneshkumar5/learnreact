import React from "react";
import "./Facebook.css";
const Facebook =() => {
    const news = [
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
        },
        {
            name:"parshotam",
            age:12,
            department:"lab",
            location:"golarchi",
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
        <div className="hye">
            {
                news.map((item,index) => (
                    <>
                    <div Keys={index} className="cv">
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
export default Facebook;