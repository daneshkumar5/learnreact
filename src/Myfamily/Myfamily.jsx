import React from "react";
import "./Myfamily.css";
const Myfamily= () => {
    const family = [
        {
            name:"piyaro",
            age:22,
            department:"driver",
            location:"kherpur mirs",
        },
        {
            name:"Danesh",
            age:20,
            department:"computer science",
            location:"karachi",
        },
        {
            name:"parksh",
            age:18,
            department:"study",
            location:"mithi",
        },
        {
            name:"bhaveeta",
            age:16,
            department:"study",
            location:"mithi",
        },
        {
            name:"sapna",
            age:10,
            department:"student",
            location:"malanhore veena",
        }
    ]
    return (
        <>
        <div className="partenir">
            {
                family.map((item,index) => (
                    <>
                    <div Keys={index} className="brothers">
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
export default Myfamily;