import React, { useState } from "react";
import "./Register.css";

export default function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm(){

    }


    return (
        <div className="register-container">
            <div className="register-box">
            
            <label htmlFor="username">Username</label>
            <div className="input-group">
                <input
                type="text"
                name="username"
                placeholder="Username"/>
            </div>

            <label htmlFor="email">Email</label>
            <div className='input-group'>
              <input 
              type='email' 
              name='email'/>
            </div>

            <label htmlFor="password">Password</label>
            <div className="input-group">
                <input
                type="password"
                name="password"
                placeholder="Password"/>
            </div>

            <label htmlFor="rePassword">Retype your password</label>
            <div className="input-group">
                <input
                type="password"
                name="rePassword"
                placeholder="Password"/>
            </div>

            <button
                type="button"
                className="register-btn"
                onClick={validateForm()}>
                    Register
                </button>

            </div>
        </div>
        );
}