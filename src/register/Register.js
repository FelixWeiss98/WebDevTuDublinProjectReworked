import { useState } from "react";
import "./Register.css"

const Register = () => {
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    let isPasswordValid;

    const handleClick = event => {
        if (password === password2){
            isPasswordValid = true;
        }
    }

    const handleChange = event => {
        setPassword(event.target.value);
    }

    const handleChange2 = event => {
        setPassword2(event.target.value);
        
    }
    

    return ( 
        <div className="wrapperRegister flex">
            <div className="register flex">
                <label>
                    <b>Type in Email</b>
                </label>
                <input type="text" placeholder="Enter Email Address" name="email" required></input>
                <label>
                    <b>Create Username</b>
                </label>
                <input type="text" placeholder="Enter New Username" name="username" required></input>
                <label>
                    <b>Create Password</b>
                </label>
                <input type="text" value={ password } onChange={ handleChange } placeholder="Enter New Password" name="password" required></input>
                <label>
                    <b>Repeat Password</b>
                </label>
                <input type="text" value={ password2 } onChange={ handleChange2 } placeholder="Repeat Your New Password" name="password2" required></input>
                <button onClick={ handleClick } className="loginbutton" type="submit">Sign Up</button>
            </div>
        </div> 
    );
}
 
export default Register;