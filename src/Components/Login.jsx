import bgImg from '../assets/img1.jpg';
import { useState } from "react";
import validator from "validator";


export default function Login(props) {

    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");


    const validateEmail = (e) => {
        let email = e.target.value;
        if (validator.isEmail(email)) {
            setEmailError(" ");
            setUser(email);
            e.target.style.borderColor = "green";
        } else {
            setEmailError("Enter valid Email!");
            e.target.style.borderColor = "red";
        }
    };

    const validatePassword = (e) => {
        let pass = e.target.value;
        if (pass.length < 4) {
            setPasswordError("Password should be at least 4 characters");
            e.target.style.borderColor = "red";
        } else if (pass.length > 12) {
            setPasswordError("Password shouldnt exceed 12 characters");
            e.target.style.borderColor = "red";
        } else {
            setPasswordError("");
            setPass(pass);
            e.target.style.borderColor = "green";
        }
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user == 0 && !pass == 0) {
            alert("Submitted successfully")
        }
        else {
            alert("Please enter the details!")
        }
    }


    return (
        <section>
            <div className="signup">
                <div className="col-1">
                    <h2>Login</h2>
                    <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
                        <input type="email" placeholder='Email' onChange={(e) => validateEmail(e)} />
                        <small>{emailError}</small>
                        <input type="password" placeholder='Password' onChange={(e) => validatePassword(e)} />
                        <small>{passwordError}</small>
                        <button type='submit' className='btn'>Login</button>
                    </form>
                    <h4>Don't have an account?</h4>
                    <button className="link-btn" onClick={() => props.onFormSwitch('Signup')}>Register here</button>
                </div>
                <div className="col-2">
                    <img src={bgImg} alt="form-img" />
                </div>
            </div>
        </section>
    )
}