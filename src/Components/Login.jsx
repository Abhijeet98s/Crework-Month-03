import { useState } from "react";
import bgImg from '../assets/img2.jpg';


export default function Signup(props) {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email == 0 && !pass == 0) {
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
                        <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" value={pass} placeholder='Password' onChange={(e) => setPass(e.target.value)} />
                        <button type='submit' className='btn'>Login</button>
                    </form>
                    <h4>Don't have an account?</h4>
                    <button className="link-btn" onClick={() => props.onFormSwitch('Signup')}>Register here</button>
                </div>
                <div className="col-2">
                    <img src={bgImg} alt="" />
                </div>
            </div>
        </section>
    )
}