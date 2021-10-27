import icon from '../assets/images/figma/Icon.png';
import { useParams } from 'react-router';
import Navbar from "./navbar";
import './payment.css';

function PaymentPending (){
    const params = useParams();
    const props = JSON.parse(params.props);
    const data = JSON.parse(localStorage.getItem('trip'));
    const dataCont = data.filter(e => e.id === params.id);
    const dataUser = JSON.parse(localStorage.getItem('user'));
    const userCont = dataUser.filter(e => e.email === localStorage.getItem('currentUser'));

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
                            <div className="pending-payment-div">
                                <p className="pending-payment">pending</p>
                            </div>
                        </div>
                        <div className="child2">
                            <div>
                                <h3>Date Trip</h3>
                                <p>{dataCont[0].date}</p>
                            </div>
                            <div>
                                <h3>Accomodation</h3>
                                <p>Hotel {dataCont[0].duration[1]} nights</p>
                            </div>
                        </div>
                        <div className="child3">
                            <div>
                                <h3>Duration</h3>
                                <p>{dataCont[0].duration[0]} Days {dataCont[0].duration[1]} Nights</p>
                            </div>
                            <div>
                                <h3>Transportaion</h3>
                                <p>{dataCont[0].price}</p>
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
            </div>
            <div className="footer">
                <p>Copyright @ 2021 Dewe Tour - Fadhil - All Rights Reserved</p>
            </div>
        </>
    )
}

export default PaymentPending;