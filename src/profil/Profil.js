import "./Profil.css";

const Profil = () => {
    return ( 
        <div className="wrapperLogin flex">
            <div className="login flex">
                <label>
                    <b>Email</b>
                </label>
                <input type="text" placeholder="Enter Email to Change" name="email" required></input>
                <label>
                    <b>Password</b>
                </label>
                <input type="text" placeholder="Enter Password to Change" name="password" required></input>
                <button className="loginbutton" type="submit">Edit Profil</button>
            </div>
        </div>
    );
}
 
export default Profil;