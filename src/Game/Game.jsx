import React, { useState } from "react";

const Game = () => {
  const [name, setName] = useState("");
  const [secent, setSencent] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setshow] = useState(false);
  const [store, setStore] = useState({});

  console.log(password.length, "passss")
  const handleForm = () => {
    setStore({ name, secent, email, password });

    
  };
  const handleShowPassword = ()=>{
   if(name.length==0 ||secent.length===0 || email.length===0|| password.length===0){
    return true
   }
  }

  return (
    <div
      className=""
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        className=""
        style={{
          display: "flex",
          borderRadius: "10px",
          justifyContent: "center",
          flexDirection: "column",
          background: "repeating-linear-gradient(45deg, black, transparent 100px)",
          margin: "2rem 0",
          border: "1px solid",
          padding: "0px 70px 0px 30px",
        }}
      >
        <h1 style={{ display: "flex", justifyContent: "center", color: "white" }}>Login Form</h1>

        {store.name && <h2>My firstname is : {store.name} </h2>}
        {store.secent && <h2>My Lastename is : {store.secent} </h2>}
        {store.email && <h2>My Email is : {store.email} </h2>}
        {store.password && <h2>My Password is : {store.password} </h2>}

        <label htmlFor="name" style={{ fontSize: "20px", padding: "5px 0", color: "white" }}>
          Enter Firstname
        </label>
        <input
          id="name"
          type="text"
          placeholder="Enter Firstname"
          style={{ padding: "8px 20px", fontSize: "14px", width: "100%", borderRadius: "5px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="secent" style={{ fontSize: "20px", padding: "5px 0", color: "white" }}>
          Enter Lastname
        </label>
        <input
          id="secent"
          type="text"
          placeholder="Enter Lastname"
          style={{ padding: "8px 20px", fontSize: "14px", width: "100%", borderRadius: "5px" }}
          value={secent}
         
          onChange={(e) => setSencent(e.target.value)}
        />

        <label htmlFor="email" style={{ fontSize: "20px", padding: "5px 0", color: "white" }}>
          Enter Email
        </label>
        <input
          id="email"
          type="text"
          placeholder="Enter email"
          style={{ padding: "8px 20px", fontSize: "14px", width: "100%", borderRadius: "5px" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password" style={{ fontSize: "20px", padding: "5px 0", color: "white" }}>
          Enter Password
        </label>
        <input
          id="password"
          type={show ? "text" : "password"}
          placeholder="Enter Password"
          style={{ padding: "8px 20px", fontSize: "14px", width: "100%", borderRadius: "5px" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

       {password.length===0?'': <button 
        onClick={() => setshow(!show)} 
        style={{ width: "fit-content", padding: "5px 5px", margin: "5px" }}
        >show Password</button>}
{handleShowPassword()?"":
        <button
          disabled={!name === " " || !secent === " " || !email === " " || !password === " "}
          onClick={handleForm}
          style={{
            margin: "1rem 0",
            padding: "8px 50px",
            width: "10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          submit
        </button>}
      </div>
    </div>
  );
};

export default Game;
