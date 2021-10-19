import './header.css';

function Header (){
    return(
        <nav>
            <div className="nav-header">
                <h1 className="logo" >Dewe Tour</h1>
                <div>
                    <button className="btn-login">Login</button>
                    <button className="btn-regist" >Register</button>
                </div>
            </div>
            <div>
                <div>
                    <h1>Explore</h1>
                    <h1>your amazing city together</h1>
                </div>
                <div>
                    <form>
                        <labeel>find great place to holiday</labeel>
                        <div className="search-field">
                            <input type="text"></input>
                            <button type="submit">search</button>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Header;