import "./Profil.css";
import { useState } from 'react';
import axios from "axios";

const Profil = () => {

    const [userData, setUserData] = useState({
        email: '',
        password: '',
        validatePassword: ''
    });

    const handler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserData(u => ({...u, [name]:value}))
    }

    const handleModify = () => {
        const modifyRequest = async () => {
            if(userData.password === userData.validatePassword) {
                try {
                    axios.defaults.headers.common['userData'] = `${localStorage.getItem('userData')}`
                    let results = await axios.put('http://localhost:3003/user', {
                        email: userData.email,
                        password: userData.password
                    })
                    console.log(results);
                    setTimeout(() => {
                        setUserData({
                            email: '',
                            password: '',
                            validatePassword: ''
                        });
                        alert(results.data.message);
                    }, 800);
                } catch (error) {
                    console.log(error.response.data.message); 
                }
            } else {
                alert("Passwords does not match");
            }
        }
        modifyRequest();
    }

    const handleDeletion = () => {
        const deleteRequest = async ()=> {
            try {
                axios.defaults.headers.common['userData'] = `${localStorage.getItem('userData')}`
                let results = await axios.delete('http://localhost:3003/user')
                console.log(results);
                setTimeout(() => {
                    setUserData({
                        email: '',
                        password: '',
                        validatePassword: ''
                    });
                    alert(results.data.message);
                    localStorage.removeItem('userData');
                }, 800);
            } catch (error) {
                console.log(error.response.data.message);
            }
        }
        deleteRequest();
    };

    return ( 
        <div className="wrapperLogin flex">
            <div className="login flex">
                <label>
                    <b>Email</b>
                </label>
                <input type="text" placeholder="Enter Email to Change" name="email" value={userData.email} onChange={handler} required></input>
                <label>
                    <b>Password</b>
                </label>
                <input type="password" placeholder="Enter Password to Change" name="password" value={userData.password} onChange={handler} required></input>
                <label>
                    <b>Validate Password</b>
                </label>
                <input type="password" placeholder="Enter Password to Change" name="validatePassword" value={userData.validatePassword} onChange={handler} required></input>
                <button className="loginbutton" type="submit" onClick={handleModify}>Edit Profil</button>
                <button className="loginbutton" type="submit" onClick={handleDeletion}>Delete Account</button>
            </div>
        </div>
    );
}
 
export default Profil;