import React, { useState } from 'react'
import './App.css';
import Img from './images/UniBudget-logos_cropped.jpeg'

function LoginForm({ Login, error}) {
    const [details, setDetails] = useState({name: "", email: "", password: ""})

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return (
        <div className="loginbox">
            <img className="logoImg" src={Img} alt="logo"></img>
            <div className="memberLogin">Member Login</div>
            <form className="loginFields" onSubmit={submitHandler}>
                <input className="nameInput" type="text" id="name" name="name" placeholder="Full Name" onChange={e => setDetails({...details, name: e.target.value})} value = {details.name}></input> <br></br>
                <input className="emailInput" type="email" id="email" name="email" placeholder=" ✉️     Email" onChange={e => setDetails({...details, email: e.target.value})} value = {details.email}></input> <br></br>
                <input className="passwordInput" type="password" id="password" name="password" placeholder=" 🔒      Password" onChange={e => setDetails({...details, password: e.target.value})} value = {details.password}></input>
                <button className="submitLoginInfoBTN" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;