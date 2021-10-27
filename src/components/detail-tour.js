import './detail-tour.css';
import Login from './login';
import Navbar from './navbar';
import {useState} from 'react';
// import data from '../data.json';
import {useParams, useHistory} from 'react-router-dom';


function DetailTour (){
    const authValue = JSON.parse(localStorage.getItem('authValue'));
    const data = JSON.parse(localStorage.getItem('trip'));
    const [login, setLogin] = useState(false);
    const {isLogin, isAdmin} = authValue;
    const history = useHistory();

    const toRupiah = (num) => {
        return new Intl.NumberFormat("en-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(num);
    }
    const params = useParams();
    const dataCont = data.filter(e => e.id === params.id);
    let price = dataCont[0].price;
    let [totalPrice, setTotalPrice] = useState(price);
    let [qty, setQty] = useState(1);

    return(
        <>
            {login && <Login setLogin={setLogin}/>}
            <Navbar/>
            <div className="detail-tour">
                <div className="content">
                    <h1 className="title">{dataCont[0].name}</h1>
                    <p>{dataCont[0].country}</p>
                    <img className="main-img" src={require(`../assets/images/figma/hd-${dataCont[0].image}`).default} alt="tour"/>
                    <div className="small-img">
                        <img className="img-1" src={require(`../assets/images/figma/detail/detail-1.jpg`).default} alt="tour"/>
                        <img className="img-2" src={require(`../assets/images/figma/detail/detail-2.jpg`).default} alt="tour"/>
                        <img className="img-3" src={require(`../assets/images/figma/detail/detail-3.jpg`).default} alt="tour"/>
                    </div>
                    <div>
                        <h2>Information Trip</h2>
                        <div className="tour-info">
                            <div>
                                <p>Accomodation</p>
                                <span>
                                    <div>
                                    <img src={require(`../assets/images/detail-tour/accomodation.png`).default} alt="tour"/>
                                    </div>
                                    <h3>{dataCont[0].accomodation}</h3>
                                </span>
                            </div>
                            <div>
                                <p>Transportation</p>
                                <span>
                                    <div>
                                    <img src={require(`../assets/images/detail-tour/transportation.png`).default} alt="tour"/>
                                    </div>
                                    <h3>{dataCont[0].transportation}</h3>
                                </span>
                            </div>
                            <div>
                                <p>Eat</p>
                                <span>
                                    <div>
                                    <img src={require(`../assets/images/detail-tour/eat.png`).default} alt="tour"/>
                                    </div>
                                    <h3>{dataCont[0].eat}</h3>
                                </span>
                            </div>
                            <div>
                                <p>Duration</p>
                                <span>
                                    <div>
                                    <img src={require(`../assets/images/detail-tour/duration.png`).default} alt="tour"/>
                                    </div>
                                    <h3>{dataCont[0].duration[0]} Days {dataCont[0].duration[1]} Nights</h3>
                                </span>
                            </div>
                            <div>
                                <p>Date Trip</p>
                                <span>
                                    <div>
                                    <img src={require(`../assets/images/detail-tour/date.png`).default} alt="tour"/>
                                    </div>
                                    <h3>{dataCont[0].date}</h3>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="description-title">Description</h2>
                        <p className="description-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                    <div className="detail-price">
                        <span>
                            <p className="nominal">{toRupiah(dataCont[0].price)}</p>
                            <p>/ Person</p>
                        </span>
                        <span>
                            <button onClick={() => {
                                setQty(qty += 1);
                                setTotalPrice(price * qty);
                            }}>+</button>
                            <p className="quantity">{qty}</p>
                            <button onClick={() => {
                                if(qty > 1) setQty(qty -= 1);
                                setTotalPrice(price * qty)
                            }}>-</button>
                        </span>
                    </div>
                    <hr></hr>
                    <div className="total-price">
                        <p>Total:</p>
                        <p className="nominal">{toRupiah(totalPrice)}</p>
                    </div>
                    <hr></hr>
                    <div className="booking-btn">
                        <button onClick={() => {
                            if(isLogin === false){
                                setLogin(true);
                            }else{
                                history.push(`/payment/${params.id}/${JSON.stringify({"qty" : qty, "totalPrice" :totalPrice})}`);
                            }
                        }} >BOOK NOW</button>
                    </div>
                </div>
            </div>
            <div className="footer">
                <p>Copyright @ 2021 Dewe Tour - Fadhil - All Rights Reserved</p>
            </div>
        </>
    )
}

export default DetailTour;