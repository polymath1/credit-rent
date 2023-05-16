import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

    return (
        <div className="auth-form-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input  value={pass} onChange={(e) => setPass(e.target.value)} type="pass" placeholder="*******" id="password" name="password" />
            <button type="submit">Login</button>
    <Link to="/register" className="site-title"> <button className="link-btn"> Don't have an account, Register here</button> </Link>
        </form>
         </div>
    )
}
