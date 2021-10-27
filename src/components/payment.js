import icon from '../assets/images/figma/Icon.png';
import { useHistory, useParams } from 'react-router';
import Navbar from "./navbar";
import './payment.css';

function Payment (){
    const dataUser = JSON.parse(localStorage.getItem('user'));
    const data = JSON.parse(localStorage.getItem('trip'));
    const history = useHistory();
    const params = useParams();
    const userCont = dataUser.filter(e => e.email === localStorage.getItem('currentUser'));
    const dataCont = data.filter(e => e.id === params.id);
    const props = JSON.parse(params.props);

    const trQty = props.qty;
    const trProof = 'bni.png';
    const trStatus = 'pending'; 
    const trName = userCont[0].fullName;
    const trPhone = userCont[0].phone;
    const trEmail = userCont[0].email;
    const trPrice = dataCont[0].price;
    const trNameTrip = dataCont[0].name;
    const trDateTrip = dataCont[0].date;
    const trTotalPrice = props.totalPrice;
    const trCountry = dataCont[0].country;
    const trDuration = dataCont[0].duration;
    const trTransport = dataCont[0].transportation;
    const trAccomodation = dataCont[0].accomodation;

    const toRupiah = (num) => {
        return new Intl.NumberFormat("en-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(num);
    }

    return(
        <>
            <Navbar/>
            <div className="payment-container">
                <div className="payment-content">
                    <div className="payment-content-header">
                        <img src={icon} alt="dewe tour"></img>
                        <div className="header-child">
                            <h1 className="booking">Booking</h1>
                            <p><b>Saturday</b>, 26 October 2021</p>
                        </div>
                    </div>
                    <div className="payment-content-body">
                        <div className="child1">
                            <h1>{dataCont[0].name}</h1>
                            <p>{dataCont[0].country}</p>
                            <div className="status-payment-div">
                                <p className="status-payment">waiting payment</p>
                            </div>
                        </div>
                        <div className="child2">
                            <div>
                                <h3>Date Trip</h3>
                                <p>{dataCont[0].date}</p>
                            </div>
                            <div>
                                <h3>Accomodation</h3>
                                <p>Hotel {dataCont[0].duration[1]} Nights</p>
                            </div>
                        </div>
                        <div className="child3">
                            <div>
                                <h3>Duration</h3>
                                <p>{dataCont[0].duration[0]} Days {dataCont[0].duration[1]} Nights</p>
                            </div>
                            <div>
                                <h3>Transportaion</h3>
                                <p>{dataCont[0].transportation}</p>
                            </div>
                        </div>
                        <div className="child4">
                            <img src={require(`../assets/images/payment.jpeg`).default} alt="payment"></img>
                            <p>upload payment proof</p>
                        </div>
                    </div>
                    <div className="transaction-table">
                        <table>
                            <thead>
                                <tr className="table-head">
                                    <th>No</th>
                                    <th>Full Name</th>
                                    <th>Gender</th>
                                    <th>Phone</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>{userCont[0].fullName}</td>
                                    <td>Male</td>
                                    <td>{userCont[0].phone}</td>
                                    <td><b>Qty</b></td>
                                    <td><b>:  {props.qty}</b></td>
                                </tr>
                                <tr className="last-child-table">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><b>Total</b></td>
                                    <td><b style={{color : "red"}}>:  {toRupiah(props.totalPrice)}</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="payment-content-button">
                    <button onClick={() =>{
                        const prevEntry = JSON.parse(localStorage.getItem('list-transaction'));
                        prevEntry.push({trName, trPhone, trEmail, trProof, trStatus, trNameTrip, trDateTrip, trCountry, trDuration, trTransport, trAccomodation, trQty, trPrice, trTotalPrice});
                        localStorage.setItem('list-transaction', JSON.stringify(prevEntry));
                        history.push(`/payment-pending/${params.id}/${JSON.stringify({"qty" : props.qty, "totalPrice" : props.totalPrice})}`);
                    }}>PAY</button>
                </div>
            </div>
            <div className="footer">
                <p>Copyright @ 2021 Dewe Tour - Fadhil - All Rights Reserved</p>
            </div>
        </>
    )
}

export default Payment;