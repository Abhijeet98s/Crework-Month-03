import bgImg from '../assets/img1.jpg';
import { useState } from "react";
import validator from "validator";


export default function Signup(props) {
    const [fullName, setFullName] = useState("")
    const [pass, setPass] = useState(0);
    const [user, setUser] = useState(0);
    const [pswd, setPswd] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const validateEmail = (e) => {
        let email = e.target.value;
        if (validator.isEmail(email)) {
            setEmailError("");
            setUser(1);
            console.log(user);
            e.target.style.borderColor = "green";
        } else {
            setEmailError("Enter valid Email!");
            e.target.style.borderColor = "red";
        }
    }


    const validatePassword = (e) => {
        let password = e.target.value;
        let regExp = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,}$/;

        if (password.length < 4) {
            setPasswordError("Password should be at least 4 characters");
            e.target.style.borderColor = "red";
        } else if (password.length > 12) {
            setPasswordError("Password shouldnt exceed 12 characters");
            e.target.style.borderColor = "red";
        } else if (!regExp.test(password)) {
            setPasswordError("Password must contain atleast a number ");
            e.target.style.borderColor = "red";
        } else {
            setPasswordError("");
            e.target.style.borderColor = "green";
            setPswd(password);
        }
    }


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
                    <h2>Sign Up</h2>

                    <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
                        <input type="text" placeholder='Full Name' />
                        <small>{ }</small>
                        <input type="email" placeholder='Email' onChange={(e) => validateEmail(e)} />
                        <small>{emailError}</small>
                        <input type="password" placeholder='Password' onBlur={(e) => validatePassword(e)} />
                        <small>{passwordError}</small>
                        <button type='submit' className='btn'>Sign Up</button>
                    </form>
                    <h4>Already have an account?</h4>
                    <button className="link-btn" onClick={() => props.onFormSwitch('Login')}>Login</button>
                </div>
                <div className="col-2">
                    <img src={bgImg} alt="" />
                </div>
            </div>
        </section>
    )
}