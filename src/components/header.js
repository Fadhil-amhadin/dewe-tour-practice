import './header.css';
import image1 from '../assets/images/best-price.png';
import image2 from '../assets/images/traveller-love.png';
import image3 from '../assets/images/best-agent.png';
import image4 from '../assets/images/dedicated-support.png';

function Header (){
    return(
        <>
            <nav>
                <div className="nav-header">
                    <h1 className="logo" >Dewe Tour</h1>
                    <div>
                        <button className="btn-login">Login</button>
                        <button className="btn-regist" >Register</button>
                    </div>
                </div>
                <div>
                    <div className="nav-title">
                        <h1>Explore</h1>
                        <p>your amazing city together</p>
                    </div>
                    <div>
                        <form>
                            <div className="search-field">
                                <input type="text"></input>
                                <button type="submit">search</button>
                            </div>
                        </form>
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