import './avatar.css';
import Login from './login';
import { useState } from 'react';
import Register from './register';

const UserDropDown = () => {
    return(
        <div className="userDropDown">
            <span>
                <div>
                    <img src={require(`../assets/images/avatar/profile.png`).default} alt="profile"></img>
                </div>
                <p>Profile</p>
            </span>
            <span>
                <div>
                    <img src={require(`../assets/images/avatar/pay.png`).default} alt="profile"></img>
                </div>
                <p>Pay</p>
            </span>
            <hr style={{color: "grey"}}></hr>
            <span>
                <div>   
                    <img src={require(`../assets/images/avatar/logout.png`).default} alt="profile"></img>
                </div>
                <p>Logout</p>
            </span>
        </div>
    )
}

const AdminDropDown = () => {
    return(
        <div className="adminDropDown">
            <span>
                <div>
                    <img src={require(`../assets/images/avatar/trip.png`).default} alt="profile"></img>
                </div>
                <p>Trip</p>
            </span>
            <hr style={{color: "grey"}}></hr>
            <span>
                <div>   
                    <img src={require(`../assets/images/avatar/logout.png`).default} alt="profile"></img>
                </div>
                <p>Logout</p>
            </span>
        </div>
    )
}

function UserIsLogin () {
    const [isDropdown, setDropdown] = useState(false);
    return(
    <div className="userLoginAvatar" onClick={() => {isDropdown ? setDropdown(false) : setDropdown(true)}}>
        <img className="userAvatar" src={require(`../assets/images/avatar/Foto.jpg`).default} alt="user-avatar"></img>
        {isDropdown ? <UserDropDown/> : null}
    </div>
    )
}

function AdminIsLogin () {
    const [isDropdown, setDropdown] = useState(false);
    return(
        <div className="adminLoginAvatar" onClick={() => {isDropdown ? setDropdown(false) : setDropdown(true)}}>
            <img className="adminAvatar" src={require(`../assets/images/avatar/Foto Hitam Putih.jpg`).default} alt="admin-avatar"></img>
            {isDropdown ? <AdminDropDown/> : null}
        </div>
    )
}

function UserNotLogin () {
    const [login, setLogin] = useState(false);
    const [regist, setRegist] = useState(false);

    return(
    <div>
        {login && <Login setLogin={setLogin}/>}
        {regist && <Register setRegist={setRegist}/>}

        <button className="btn-login" onClick={() => {setLogin(true)}} >Login</button>
        <button className="btn-regist" onClick={() => {setRegist(true)}} >Register</button>
    </div>
    )
}

export {UserIsLogin, UserNotLogin, AdminIsLogin};