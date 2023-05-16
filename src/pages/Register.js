import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register  () {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }

return (
    <div className="auth-form-container">
    <form className="register-form" onSubmit={handleSubmit}>
    <label htmlFor="name">Full name</label>
    <input value={name} name="name" id="name" placeholder="full Name"  />
    <label htmlFor="email">email</label>
    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
    <label htmlFor="password">password</label>
    <input  value={pass} onChange={(e) => setPass(e.target.value)} type="pass" placeholder="*******" id="password" name="password" />
    <button type="submit">Register</button>
    <Link to="/login" className="site-title"> <button className="link-btn"> Already have an account, Login here</button> </Link>
    </form>
    
</div>
)
}
