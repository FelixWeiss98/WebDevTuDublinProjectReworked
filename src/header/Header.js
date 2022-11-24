import "./Header.css";

const Header = ( { filter } ) => {
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
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </nav>
                <div className="searchbar flex">
                <input type="text" placeholder="Type here to search" onChange={ e => filter(e.target.value)}></input>
                </div>
            </div>
        </div>
    );
};

export default Header;