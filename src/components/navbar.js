import './navbar.css';
import Login from './login';
import { useState } from 'react';
import Register from './register';
import {AdminIsLogin, UserIsLogin, UserNotLogin} from './avatar';

function Navbar () {
    const authValue = JSON.parse(localStorage.getItem('authValue'));
    const {isLogin, isAdmin} = authValue;
    const [login, setLogin] = useState(false);
    const [regist, setRegist] = useState(false);

    return (
        <>
            {login && <Login setLogin={setLogin}/>}
            {regist && <Register setRegist={setRegist}/>}

            <nav className="navbar">
                <div className="navbar-header">
                    <h1 className="navbar-logo" >Dewe Tour</h1>
                    {isLogin && !isAdmin ? <UserIsLogin/> : isLogin && isAdmin ? <AdminIsLogin/> : <UserNotLogin/>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;