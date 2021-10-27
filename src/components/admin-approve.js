import icon from '../assets/images/figma/Icon.png';
import { useParams } from 'react-router';
import Navbar from "./navbar";
import './admin-approve.css';

function AdminApprove () {
    const params = useParams();
    const data = JSON.parse(localStorage.getItem('list-transaction'));
    const dataCont = data.filter(e => e.trEmail === params.props);
    const approveStyling = `${dataCont[0].trStatus}-payment`;

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
                            <h1>{dataCont[0].trNameTrip}</h1>
                            <p>{dataCont[0].trCountry}</p>
                            <div className="status-payment-div">
                                <p className={approveStyling}>{dataCont[0].trStatus} payment</p>
                            </div>
                        </div>
                        <div className="child2">
                            <div>
                                <h3>Date Trip</h3>
                                <p>{dataCont[0].trDateTrip}</p>
                            </div>
                            <div>
                                <h3>Accomodation</h3>
                                <p>Hotel {dataCont[0].trDuration[1]} nights</p>
                            </div>
                        </div>
                        <div className="child3">
                            <div>
                                <h3>Duration</h3>
                                <p>{dataCont[0].trDuration[0]} Days {dataCont[0].trDuration[1]} Nights</p>
                            </div>
                            <div>
                                <h3>Transportation</h3>
                                <p>{dataCont[0].trTransport}</p>
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
                                    <td>{dataCont[0].trName}</td>
                                    <td>Male</td>
                                    <td>{dataCont[0].trPhone}</td>
                                    <td><b>Qty</b></td>
                                    <td><b>:  {dataCont[0].trQty}</b></td>
                                </tr>
                                <tr className="last-child-table">
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><b>Total</b></td>
                                    <td><b style={{color : "red"}}>:  {toRupiah(dataCont[0].trTotalPrice)}</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="admin-approve-button">
                    <button className="cancel-btn" onClick={() => {
                        let container = [];
                        for(let i = 0; i < data.length; i++){
                            if(data[i].trEmail === params.props){
                                data[i].trStatus = "cancel";
                            }
                            container.push(data[i]);
                        }
                        localStorage.setItem('list-transaction', JSON.stringify(container));
                        window.location.reload();
                    }}>Cancel</button>
                    <button className="approve-btn" onClick={() => {
                        let container = [];
                        for(let i = 0; i < data.length; i++){
                            if(data[i].trEmail === params.props){
                                data[i].trStatus = "approved";
                            }
                            container.push(data[i]);
                        }
                        localStorage.setItem('list-transaction', JSON.stringify(container));
                        window.location.reload();
                    }}>Approve</button>
                </div>
            </div>
            <div className="footer">
                <p>Copyright @ 2021 Dewe Tour - Fadhil - All Rights Reserved</p>
            </div>
        </>
    )
}

export default AdminApprove;