import Footer from "./footer/Footer";
import Header from "./header/Header";
import Home from "./home/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./login/Login";
import Register from "./register/Register";
import Profil from "./profil/Profil";

function App(){
    return(
        <BrowserRouter>
            <div className="App">
                <Header />
                    <Routes>
                        <Route path="/" element={ <Home /> } />
                        <Route path="/login" element={ <Login /> } />
                        <Route path="/register" element={ <Register /> } />
                        <Route path="/profil" element={ <Profil /> } />
                    </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;