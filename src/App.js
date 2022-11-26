import Footer from "./footer/Footer";
import Header from "./header/Header";
import Home from "./home/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./login/Login";
import Register from "./register/Register";
import Profil from "./profil/Profil";
import { useState } from "react";

const userData = JSON.parse(localStorage.getItem('userData')) || false;

function App(){
    let authRoute = <></>
    let [userAuth, setUserAuth] = useState(userData.token)
    if (userAuth) {
        authRoute = <Route path="/profil" element={ <Profil /> } />
    }
    console.log(userData);
    return(
        <BrowserRouter>
            <div className="App">
                {<Header />}
                    <Routes>
                        <Route path="/" element={ <Home /> } />
                        <Route path="/login" element={ <Login /> } />
                        <Route path="/register" element={ <Register /> } />
                        {authRoute}
                    </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;