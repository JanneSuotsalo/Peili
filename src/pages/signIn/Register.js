import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { TextField } from '@material-ui/core';
import "./Register.css";

export default function Register(props) {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const [usernameErrorMsgBoolean, setUsernameErrorMsgBoolean] = useState(false)
    const [emailErrorMsgBoolean, setEmailErrorMsgBoolean] = useState(false)
    const [passwordErrorMsgBoolean, setPasswordErrorMsgBoolean] = useState(false)

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
        if(username.target.value.length >= 3){
            setUsernameErrorMsg("")
        }
    }

    function validUsernameCheck(){
        if(username.length < 3){
            setUsernameErrorMsg("Käyttäjänimen pitää olla vähintään 3 merkkiä")
            setValidUsername(false)
            setUsernameErrorMsgBoolean(true)
        } else {
            setValidUsername(true)
            setUsernameErrorMsgBoolean(false)
        }
    }

    function validEmailCheck(){
        const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       // console.log("reg:" + regexp.test(email));
        if(regexp.test(email) !== true){
            setEmailErrorMsg("Kelpaamaton sähköposti")
            setValidEmail(false)
            setEmailErrorMsgBoolean(true)
        } else {
            setEmailErrorMsgBoolean(false)
            setEmailErrorMsg("")
            setValidEmail(true)
        }
    }

    function passwordCheck(){
        if(password !== rePassword){
            setPasswordErrorMsg("Salasanat eivät täsmää");
            setPasswordErrorMsgBoolean(true)
            return false
        } else {
            setPasswordErrorMsg("");
            if(password.length < 8){
                setPasswordErrorMsgBoolean(true)
                setPasswordErrorMsg("Salasanan pitää olla yli 8 merkkiä pitkä");
                return false
            } else {
                setPasswordErrorMsgBoolean(false)
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
            <img alt="asd" className="register_peiliLogo" src="PeiliLogo.png" />
            </div>

            <div className="register_signUpText">
                Rekisteröityminen
            </div>

            <hr className="register_line">
            </hr>
            
            <div className="register_inputContainers">
            <TextField 
                label="Käyttäjänimi"
                className="register_inputs"
                type="text"
                name="username"
                placeholder="Käyttäjänimi"
                maxLength={20}
                onBlur={validUsernameCheck}
                onChange={onUsernameChange}
                error = {usernameErrorMsgBoolean}
                helperText={usernameErrorMsg}
                InputLabelProps={{style: {fontSize: 20}}}
                />
            </div>

            <div className='register_inputContainers'>
            <TextField 
                label="Sähköposti"
                className="register_inputs"
                type='email' 
                name='email'
                placeholder="Sähköposti"
                value={email}
                onBlur={validEmailCheck}
                onChange={(email) => setEmail(email.target.value)}
                error = {emailErrorMsgBoolean}
                helperText={emailErrorMsg}
                InputLabelProps={{style: {fontSize: 20}}}
              />
            </div>

            <div className="register_inputContainers">
            <TextField 
                label="Salasana"
                className="register_inputs"
                type="password"
                name="password"
                value={password}
                onChange={(password) => setPassword(password.target.value)}
                placeholder="Salasana"
                error = {passwordErrorMsgBoolean}
                helperText={passwordErrorMsg}
                InputLabelProps={{style: {fontSize: 20}}}/>
            </div>

            <div className="register_inputContainers">
            <TextField 
                label="Kirjoita salasana uudelleen"
                className="register_inputs"
                type="password"
                name="rePassword"
                value={rePassword}
                onChange={(rePassword) => setRePassword(rePassword.target.value)}
                placeholder="Kirjoita salasana uudelleen"
                InputLabelProps={{style: {fontSize: 20}}}/>
            </div>

            <div className="register_btnContainer">
                <button
                    type="button"
                    className="register_btn"
                    onClick={() => validateForm()}>
                    Rekisteröidy
                </button>
            </div>

            <div className="register_haveAccount">
            <button
                    type="button"
                    className="register_haveAccountBtn"
                    onClick={() => redirectToLogin()}
                    >
                    Jos sinulla on jo käyttäjä, klikkaa tästä
                </button>
            </div>

            </div>
        </div>
        );
}