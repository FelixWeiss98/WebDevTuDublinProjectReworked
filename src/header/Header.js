import "./Header.css";
import { useEffect, useState } from 'react'

const Header = ( { filter } ) => {
    
    const [loggedIn, setLoggedIn] = useState(false);
    const [userNameView, setUserNameView] = useState('');
    const logOut = () => {
        localStorage.removeItem('userData');
        setTimeout(() => {
            setLoggedIn(false);
        }, 500)
    };

    useEffect(() => {
        try {
            let auth = JSON.parse(localStorage.getItem('userData'));
            if(auth.uname && auth.token) {
                setUserNameView(auth.uname)
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        } catch (error) {
            
        }
    }, [])


    const title = 'Gerhard and Felix Restaurants';
    return(
        <div className="wrapperHeader flex">
            <div className="header flex">
                <div className="logo flex">
                    <a href="/">
                        <img className ="icon" alt="logo" src={require("./Icon.png")} />
                    </a>
                </div>
                <div className="name flex">
                    <h1>{ title }</h1>
                </div>
                <nav className="navbar flex">
                    {!loggedIn 
                    ? <div className="navbar flex">
                        <a href="/login">Login</a>
                        <a href="/register">Register</a>
                    </div>
                    : <div className="navbar flex">
                        {"Welcome " + `${userNameView}`}
                        <button onClick={() => logOut()}>Log Out</button>
                    </div>}
                </nav>
                <div className="searchbar flex">
                <input type="text" placeholder="Type here to search" onChange={ e => filter(e.target.value)}></input>
                </div>
            </div>
        </div>
    );
};

export default Header;