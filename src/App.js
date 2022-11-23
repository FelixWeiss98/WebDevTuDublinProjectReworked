import Footer from "./footer/Footer";
import Header from "./header/Header";
import Home from "./home/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./login/Login";
import Register from "./register/Register";


function App(){
    return(
        <BrowserRouter>
            <div className="App">
                <Header />
                    <Routes>
                        <Route path="/" element={ <Home /> } />
                        <Route path="/login" element={ <Login /> } />
                        <Route path="/register" element={ <Register /> } />
                    </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;