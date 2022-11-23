import "./Login.css";

const Login = () => {
    return ( 
        <div className="wrapperLogin flex">
            <div className="login flex">
                <label>
                    <b>Username</b>
                </label>
                <input type="text" placeholder="Enter Username" name="username" required></input>
                <label>
                    <b>Password</b>
                </label>
                <input type="text" placeholder="Enter Password" name="password" required></input>
                <button className="loginbutton" type="submit">Login</button>
            </div>
        </div>
    );
}
 
export default Login;