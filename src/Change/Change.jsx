import React, { useState } from 'react'

const Change = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("")
    const [store, setstore] = useState("")



    const handleForm = () => {
        setstore({ name, email })


    }
    return (
        <div className="" align="center">
            <div style={{ padding: '2rem', width: "50%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                {store.name && <h2>my Name is : {store.name}</h2>}
                {store.email && <h2> my Email is :{store.email}</h2>}

                <label htmlFor="" style={{ fontSize: "20px", padding: "10px 0" }}>Enter Name</label>
                <input
                    type="text"
                    placeholder='Enter Name'
                    style={{ padding: "12px 20px", fontSize: "16px", width: "100%" }}
                    value={name}
                    onChange={(e) => setname(e.target.value)}


                />
                <label htmlFor="" style={{ fontSize: "20px", padding: "10px 0" }}>Enter Email</label>
                <input
                    type=""
                    placeholder='Enter Email'
                    style={{ padding: "12px 20px", fontSize: "16px", width: "100%" }}
                    value={email}
                    onChange={(e) => setemail(e.target.value)}


                />
                <button disabled={name=="" || email===""?true:false} onClick={handleForm} style={{ margin: '1rem 0' }}>Submit</button>

            </div>
        </div>
    )
}

export default Change;