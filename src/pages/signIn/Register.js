import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./Register.css";

export default function Register(props) {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const [registerErrorMsg, setRegisterErrorMsg] = useState("");
    const [usernameErrorMsg, setUsernameErrorMsg] = useState("");
    const [emailErrorMsg, setEmailErrorMsg] = useState("");
    const [passwordErrorMsg, setPasswordErrorMsg] = useState("");

    const [validUsername, setValidUsername] = useState(false);
    const [validEmail, setValidEmail] = useState(false);

    const [redirectFeed, changeRedirectFeed] = useState(false);
    const [redirectLogin, changeRedirectLogin] = useState(false);

    function onUsernameChange(username){
        setUsername(username.target.value);
       // console.log(username.target.value);
       // console.log("test:" + username.target.value.length);
        setRegisterErrorMsg("")
        if(username.target.value.length >= 3){
            setUsernameErrorMsg("")
        }
    }

    function validUsernameCheck(){
        if(username.length < 3){
            setUsernameErrorMsg("Username must be over 3 characters")
            setValidUsername(false)
        } else {
            setValidUsername(true)
        }
    }

    function validEmailCheck(){
        const regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       // console.log("reg:" + regexp.test(email));
        if(regexp.test(email) !== true){
            setEmailErrorMsg("Invalid email")
            setValidEmail(false)
        } else {
            setEmailErrorMsg("")
            setValidEmail(true)
        }
    }

    function passwordCheck(){
        if(password !== rePassword){
            setPasswordErrorMsg("Passwords do not match");
            return false
        } else {
            setPasswordErrorMsg("");
            if(password.length < 8){
                setPasswordErrorMsg("Password must be over 8 characters");
                return false
            } else {
                return true
            }
        }
    }

    function validateForm(){
        console.log("password: " + passwordCheck())
        console.log("username: " + validUsername)
        console.log("email: " + validEmail)
        validUsernameCheck()
        validEmailCheck()
        if( validEmail === true && passwordCheck() === true && validUsername === true){
            console.log("Valid: True")
            changeRedirectFeed(true)
        } else {
            console.log("Valid: False")
        }
    }

    function redirectToLogin(){
        changeRedirectLogin(true);
    }

    if(redirectFeed){
        return <Redirect push to="/feed" />;
    }

    if(redirectLogin){
        return <Redirect push to="/login" />;
    }

    return (
        <div className="register_container">
            <div className="register_box">

            <div className="register_peiliLogoContainer">
            <img className="register_peiliLogo" src="PeiliLogo.png" />
            </div>

            <div className="register_signUpText">
                Sign up
            </div>

            <hr className="register_line">
            </hr>
            
            <div className="register_inputContainers">
                <input
                className="register_inputs"
                type="text"
                name="username"
                placeholder="Username"
                maxLength={20}
                onBlur={validUsernameCheck}
                onChange={onUsernameChange}
                />
            </div>
            <div className="register_inputErrorMsgs">
                <small>{usernameErrorMsg}</small>
            </div>

            <div className='register_inputContainers'>
              <input 
              className="register_inputs"
              type='email' 
              name='email'
              placeholder="Email"
              value={email}
              onBlur={validEmailCheck}
              onChange={(email) => setEmail(email.target.value)}
              />
            </div>
            <div className="register_inputErrorMsgs">
                <small>{emailErrorMsg}</small>
            </div>

            <div className="register_inputContainers">
                <input
                className="register_inputs"
                type="password"
                name="password"
                value={password}
                onChange={(password) => setPassword(password.target.value)}
                placeholder="Password"/>
            </div>

            <div className="register_inputContainers">
                <input
                className="register_inputs"
                type="password"
                name="rePassword"
                value={rePassword}
                onChange={(rePassword) => setRePassword(rePassword.target.value)}
                placeholder="Retype your password"/>
            </div>
            <div className="register_inputErrorMsgs">
                <small>{passwordErrorMsg}</small>
            </div>

            <div className="register_btnContainer">
                <button
                    type="button"
                    className="register_btn"
                    onClick={() => validateForm()}>
                    Register
                </button>
            </div>

            <div className="register_haveAccount">
            <button
                    type="button"
                    className="register_haveAccountBtn"
                    onClick={() => redirectToLogin()}
                    >
                    already registered?
                </button>
            </div>

            </div>
        </div>
        );
}