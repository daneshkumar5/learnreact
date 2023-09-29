import React from "react";
import "./Blogs.css";
const Blogs =() => {
    const biscuit = [
        {
            name:"jawaher",
            age:30,
            department:"army",
            location:"bawalpor",
        },
        {
            name:"haresh",
            age:29,
            department:"clark",
            location:"mithi",
        },
        {
            name:"raveela",
            age:32,
            department:"house",
            location:"pangrio",
        },
        {
            name:"mahesh",
            age:56,
            department:"house",
            location:"mithi",
        }
    ]
    return (
        <>
        <div className="bigbrother">
            {
                biscuit.map((item,index) => (
                    <>
                    <div Keys={index} className="bhai">
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
export default Blogs;