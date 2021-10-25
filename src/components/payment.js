import { useHistory, useParams } from 'react-router';
import Navbar from "./navbar";
import './payment.css';

function Payment (){
    const history = useHistory();
    const params = useParams();
    return(
        <>
            <Navbar/>
            <div className="payment-container">
                <div className="payment-content">
                    <div className="payment-content-header">
                        <h1 className="logo">Dewe Tour</h1>
                        <div className="header-child">
                            <h1 className="booking">Booking</h1>
                            <p><b>Saturday</b>, 22 July 2020</p>
                        </div>
                    </div>
                    <div className="payment-content-body">
                        <div className="child1">
                            <h1>The Title</h1>
                            <p>country</p>
                            <p className="status-payment">waiting payment</p>
                        </div>
                        <div className="child2">
                            <div>
                                <h3>Date Trip</h3>
                                <p>25 August 2020</p>
                            </div>
                            <div>
                                <h3>Accomodation</h3>
                                <p>Hotel 4 nights</p>
                            </div>
                        </div>
                        <div className="child3">
                            <div>
                                <h3>Duration</h3>
                                <p>6 Days 4 Nights</p>
                            </div>
                            <div>
                                <h3>Transportaion</h3>
                                <p>Qatar Airline</p>
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
                                    <td>Fadhil Amhadin</td>
                                    <td>Male</td>
                                    <td>082233419336</td>
                                    <td><b>Qty</b></td>
                                    <td><b>:  1</b></td>
                                </tr>
                                <tr className="last-child-table">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><b>Total</b></td>
                                    <td><b style={{color : "red"}}>:  IDR 200.000</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="payment-content-button">
                    <button onClick={() => history.push(`/payment-pending/2`)}>PAY</button>
                </div>
            </div>
            <div className="footer">
                <p>Copyright @ 2021 Dewe Tour - Fadhil - All Rights Reserved</p>
            </div>
        </>
    )
}

export default Payment;