import React from "react";
import "./Navbar.css"
const Navbar  = (()=>{
    return (
        <div className="text">
        <img src="images" alt="" />
        <p>compny</p>
        <p>Services</p>
        <p>Consulting</p>
        <p>Careers</p>
        <p>Blogs</p>
        <p className="color">Projects</p>
        <div className="" style={{display:"flex", justifyContent:"center", alignatims:"center", paddingTop:15,}}>
            <button className="btn">Contect us</button></div>
        </div>
    )
})
export default Navbar;