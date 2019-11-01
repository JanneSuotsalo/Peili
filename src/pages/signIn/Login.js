import React, { useState } from "react";
import "./Login.css";

export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    function onUsernameChange(username){
        setUsername(username.target.value);
        console.log(username.target.value);
        setErrorMsg("")
    }

    function validateForm() {
        if(username == ""){
            setErrorMsg("Username can not be empty");
        }
    }

    return (
        <div className="login-container">
            <div className="box">
            
            <label htmlFor="username">Username</label>
            <div className="input-group">
                <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={onUsernameChange}
                />
            </div>

            <label htmlFor="password">Password</label>
            <div className="input-group">
                <input
                type="password"
                name="password"
                placeholder="Password"/>
            </div>

            <div className="errorMsg">
                <small>{errorMsg}</small>
            </div>

            <button
                type="button"
                className="login-btn"
                onClick={() => validateForm()}>
                Login
            </button>

            </div>
        </div>
        );
}