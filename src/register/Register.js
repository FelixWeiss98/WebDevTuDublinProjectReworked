import { useState } from "react";
import "./Register.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {

    let navigate = useNavigate();
    const [userName, setUsername] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleUserName = (event) => {
        setUsername(event.target.value);
    }

    const handleEmailAddress = (event) => {
        setEmailAddress(event.target.value);
    }

    
    const handleChange = event => {
        setPassword(event.target.value);
    }
    
    const handleChange2 = event => {
        setPassword2(event.target.value);
        
    }
    
    const handleClick = () => {
        if (password === password2) {
            const registerRequest = async () => {
                try {
                    const results = await axios.post('http://localhost:3003/user/register', {
                        userName: userName,
                        emailAddress: emailAddress,
                        password: password
                    })
                    alert("Success!")
                    setTimeout(() => {
                        setUsername('');
                        setEmailAddress('');
                        setPassword('');
                        setPassword2('');
                        console.log(results.data);
                        navigate('/', {replace: true})
                    }, 800);
                } catch (error) {
                    alert(error.response.data.message)
                }

            }
            registerRequest();
        } else {
            alert("Passwords does not match");
        }
    }

    return ( 
        <div className="wrapperRegister flex">
            <div className="register flex">
                <label>
                    <b>Type in Email</b>
                </label>
                <input type="text" value={ emailAddress } onChange={ handleEmailAddress } placeholder="Enter Email Address" name="email" required></input>
                <label>
                    <b>Create Username</b>
                </label>
                <input type="text" value={ userName } onChange={ handleUserName } placeholder="Enter New Username" name="username" required></input>
                <label>
                    <b>Create Password</b>
                </label>
                <input type="password" value={ password } onChange={ handleChange } placeholder="Enter New Password" name="password" required></input>
                <label>
                    <b>Repeat Password</b>
                </label>
                <input type="password" value={ password2 } onChange={ handleChange2 } placeholder="Repeat Your New Password" name="password2" required></input>
                <button onClick={ handleClick } className="loginbutton" type="submit">Sign Up</button>
            </div>
        </div> 
    );
}
 
export default Register;