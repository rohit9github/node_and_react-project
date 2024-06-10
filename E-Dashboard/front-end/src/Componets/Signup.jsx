import { useState } from "react";



function Signup() {

    let [signupData, setSignupData] = useState({});

    let handleValue = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setSignupData({ ...signupData, [name]: value });
    }

    let collectData = () => {
        console.log(signupData);
    }

    return (
        <>
            <h1>Register</h1>
            <form action="">
                <input className="inputBox" value={signupData.username ? signupData.username : ""} type="text" placeholder="Enter Name" name="username" onChange={(e) => handleValue(e)} />
                <input className="inputBox" value={signupData.email ? signupData.email : ""} type="text" placeholder="Enter Email" name="email" onChange={(e) => handleValue(e)} />
                <input className="inputBox" value={signupData.pass ? signupData.pass : ""} type="text" placeholder="Enter Password" name="pass" onChange={(e) => handleValue(e)} />
                <button type="button" onClick={collectData} >Sign-Up</button>
            </form>
        </>
    )
}

export default Signup;