import React, { useState } from "react";
import Marquee from "react-fast-marquee";

const Content = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [store, setStore] = useState([]);
    const [color, setcolor] = useState({})

    const handleForm = () => {
        setStore([...store,{ name, email, password, color }]);
    }


    let datas = [3,4,5,6,]
    let output = [33,44,55,66,...datas]
    console.log(output,'ll')

    return (
        <>
        <Marquee>
        git config --global user.email "daneshkumar580@gmail.com"
        git config --global user.name "daneshkumar580"


        </Marquee>
            <div className="" style={{ display: 'flex',  justifyContent: "space-around", flexWrap:'wrap', gap:'1rem', alignItems: "center", width: '100%' }}>
               {store.map((item)=>(
                <>
                 <div className="" style={{ background:item.name==='kishor'?"green":"", display:  "flex",position:"relative", padding:"10px 20px", flexDirection: "column", justifyContent: "center", alignItems: "center", border: '2px solid red' }}>
                   <button style={{position:'absolute',top:'3px',right:'3px'}}>delete</button>
                    <p>My name is : {item.name} </p>
                    <p>My email is : {item.email}</p>
                    <p>My password is : {item.password}</p>
                </div>
                </>
               ))}

            </div>


            <div style={{ display: "flex", justifyContent: "center" }}>
                <div className="" style={{ display: "flex", justifyContent: "ceter", margin: "20px", flexDirection: "column", width: "20%", border: "1px solid", padding: "10px", borderRadius: "5px", background: color }}>
                    <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center", background: color }}>Login Form</h1>



                    <label htmlFor="name" style={{ padding: "6px" }}>Name:</label>
                    <input
                        type="text"
                        placeholder="Enter name"
                        style={{ padding: "6px" }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="email" style={{ padding: "6px" }}>Email:</label>
                    <input
                        type="text"
                        placeholder="Enter email"
                        style={{ padding: "6px" }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password" style={{ padding: "6px" }}>Password:</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        style={{ padding: "6px" }}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <input
                            type="text"
                            placeholder="change color"
                            style={{
                                margin: "1rem 0",
                                padding: "3px 10px",
                                width: "30%",
                            }}
                            value={color}
                            onChange={(e) => setcolor(e.target.value)}
                        />

                        <button onClick={() => setShowPassword(!showPassword)}
                            style={{
                                padding: "2px 8px",
                                margin: "5px",
                            }}
                        >
                            Toggle Password
                        </button>
                    </div>

                    <button disabled={name === " " || email === " " || !password === " "}
                        onClick={handleForm}
                        style={{
                            margin: "5px 0",
                            padding: "8px 50px",
                            width: "10%",
                            display: "flex",
                            justifyContent: "center",

                        }}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}

export default Content;
