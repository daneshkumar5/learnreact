import React, { useState } from "react";
import logo from './Untitled design (2).png';

const Input = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [store, setStore] = useState({});


    const handleForm = () => {
        setStore({ name, email, password });
    };

    return (
        <div className="" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <div className=""
                style={{
                    display: "flex",
                    borderRadius: "10px",
                    justifyContent: "center",
                    flexDirection: "column",
                    background: "repeating-linear-gradient(50deg, green, transparent 90px)",
                    margin: "2rem 0",
                    border: "1px solid",
                    padding: "0px 70px 0px 30px",
                }}>
                <div className="" style={{width:"100%", padding: "0px 20px", margin: "inherit", flexDirection:"column"}}>
                    <img src={logo} alt="" />
                    <h1 style={{ display: "flex", justifyContent: "center" }}>Login Form</h1>
                </div>
                

                {store.name && <h2>My Name is : {store.name}</h2>}
                {store.email && <h2>My Email is : {store.email} </h2>}
                {store.password && <h2>My Password is : {store.password}</h2>}

                <label htmlFor="" style={{ fontSize: "20px", padding: "5px 0" }}>
                    Enter name
                </label >
                <input
                    type="text"
                    placeholder="Enter Name"
                    style={{ padding: "8px 20px", fontSize: "14px", width: "100%", borderRadius: "5px" }}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="" style={{ fontSize: "20px", padding: "5px 0" }}>
                    Enter Email
                </label>
                <input
                    type="text"
                    placeholder="Enter Email"
                    style={{ padding: "8px 20px", fontSize: "14px", width: "100%", borderRadius: "5px" }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="" style={{ fontSize: "20px", padding: "5px 0" }}>
                    Enter Password
                </label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    style={{ padding: "8px 20px", fontSize: "14px", width: "100%", borderRadius: "5px" }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button
                    disabled={name === " " || email === " " || password === " "}
                    onClick={handleForm}
                    style={{
                        margin: "1rem 0",
                        padding: "8px 50px",
                        width: "10%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        background:"red",
                        borderRadius:"5px"
                    }}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default Input;
