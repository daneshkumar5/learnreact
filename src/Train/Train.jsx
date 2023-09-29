import React from "react";
import "./Train.css";
const Train =() => {
    const safar = [
        {
            name:"Ritik",
            age:25,
            department:"loer",
            location:"diplo",
        },
        {
            name:"mevo",
            age:35,
            department:"shop",
            location:"chho",
        },
        {
            name:"rano",
            age:22,
            department:"medical",
            location:"mithi",
        },
        {
            name:"Ritik",
            age:23,
            department:"loyer",
            location:"diplo",
        }
    ]
    return (
        <>
        <div className="diba">
            {
                safar.map((item,index) => (
                    <>
                    <div Keys={index} className="passanger">
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
export default Train;