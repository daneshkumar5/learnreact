import React from "react";
import Logo from "../../src/navbar/Images/logo.png";
import "./Picandworld";
const Picandworld = () => {
    const Water = [
        {

        }
    ]
    return (
        <>
        <div className="shot">
            {
                Water.map((item, index) => (
                    <>
                    <div Keys={index} className="kitchin">
                        <img src="logo.png" alt="" />
                    </div>
                    <div className="name">
                        <h1>Danesh kumar parhyar</h1>
                    </div>
                    </>
                ))
            }
        </div>
        </>
    )
}
export default Picandworld;