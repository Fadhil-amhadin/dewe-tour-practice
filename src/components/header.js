import './header.css';
import Login from './login';
import Register from './register';
import { useState } from 'react';
import icon from '../assets/images/figma/Icon.png';
import image1 from '../assets/images/best-price.png';
import image2 from '../assets/images/traveller-love.png';
import image3 from '../assets/images/best-agent.png';
import image4 from '../assets/images/dedicated-support.png';
import {AdminIsLogin, UserIsLogin, UserNotLogin} from './avatar';

function Header (){
    const [login, setLogin] = useState(false);
    const [regist, setRegist] = useState(false);
    const authValue = JSON.parse(localStorage.getItem('authValue'));
    const {isLogin, isAdmin} = authValue;


    return(
        <>  
            {login && <Login setLogin={setLogin}/>}
            {regist && <Register setRegist={setRegist}/>}

            <nav className="nav">
                <div className="transparent-layer">
                    <div className="nav-header">
                        <img src={icon} alt="dewe tour"></img>
                        <div>
                            {isLogin && !isAdmin ? <UserIsLogin/> : isLogin && isAdmin ? <AdminIsLogin/> : <UserNotLogin/>}
                        </div>
                    </div>
                    <div>
                        <div className="nav-title">
                            <h1>Explore</h1>
                            <p>your amazing city together</p>
                        </div>
                        <div>
                            <form>
                                <p className="search-label">find great places for holiday</p>
                                <div className="search-field">
                                    <input type="text"></input>
                                    <button type="submit">search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="offer">
                <div className="card">
                    <img src={image1} alt="Avatar" style={{width: '14em'}}/>
                    <div className="container">
                        <h4><b>Best Price Guarantee</b></h4>
                        <p>A small river named Duren flows by their place and supplies</p>
                    </div>
                </div>
                <div className="card">
                    <img src={image2} alt="Avatar" style={{width: '14em'}}/>
                    <div className="container">
                        <h4><b>Travellers Love Us</b></h4>
                        <p>A small river named Duren flows by their place and supplies</p>
                    </div>
                </div>
                <div className="card">
                    <img src={image3} alt="Avatar" style={{width: '14em'}}/>
                    <div className="container">
                        <h4><b>Best Travel Agent</b></h4>
                        <p>A small river named Duren flows by their place and supplies</p>
                    </div>
                </div>
                <div className="card">
                    <img src={image4} alt="Avatar" style={{width: '14em'}}/>
                    <div className="container">
                        <h4><b>Our Dedicated Support</b></h4>
                        <p>A small river named Duren flows by their place and supplies</p>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Header;