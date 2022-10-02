import { useState } from "react";
import bgImg from '../assets/img2.jpg';


export default function Signup(props) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email);
    }

    return (
        <section>
            <div className="signup">
                <div className="col-1">
                    <h2>Sign Up</h2>

                    <form id='form' className='flex flex-col' onSubmit={handleSubmit}>
                        <input type="text" value={firstName} placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
                        <input type="text" value={lastName} placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
                        <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" value={pass} placeholder='Password' onChange={(e) => setPass(e.target.value)} />
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