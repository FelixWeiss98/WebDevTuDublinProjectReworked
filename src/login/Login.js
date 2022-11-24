import "./Login.css";
import { useState } from "react";
import axios from "axios";

const Login = () => {

    const [loginData, setLoginData] = useState({
        userName: "",
        password: ""
    })

    const handleClick = () => {
        const loginRequest = async () => {
            try {
                let results = await axios.post('http://localhost:3003/user/login', {
                    userName: loginData.userName,
                    password: loginData.password
                });
                setLoginData({
                    userName: "",
                    password: ""
                });
                console.log(results.data);
                alert("Login successful")
            } catch (error) {
                setLoginData({
                    userName: "",
                    password: ""
                });
                alert(error.response.data.message)
            }

        }
        loginRequest();
    }

    const handler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setLoginData(l => ({...l, [name]:value}))
    }

    return ( 
        <div className="wrapperLogin flex">
            <div className="login flex">
                <label>
                    <b>Username</b>
                </label>
                <input type="text" placeholder="Enter Username" name="userName" value={loginData.userName} onChange={handler} required></input>
                <label>
                    <b>Password</b>
                </label>
                <input type="password" placeholder="Enter Password" name="password" value={loginData.password} onChange={handler} required></input>
                <button className="loginbutton" type="submit" onClick={handleClick}>Login</button>
            </div>
        </div>
    );
}
 
export default Login;