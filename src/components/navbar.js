import './navbar.css';
import Login from './login';
import { useState } from 'react';
import Register from './register';

function Navbar () {
    const [login, setLogin] = useState(false);
    const [regist, setRegist] = useState(false);
    return (
        <>
            {login && <Login setLogin={setLogin}/>}
            {regist && <Register setRegist={setRegist}/>}

            <nav className="navbar">
                <div className="navbar-header">
                    <h1 className="navbar-logo" >Dewe Tour</h1>
                    <div>
                        <button className="btn-login" onClick={() => {setLogin(true)}} >Login</button>
                        <button className="btn-regist" onClick={() => {setRegist(true)}} >Register</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;