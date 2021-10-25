import Navbar from "./navbar"
import Payment from "./payment";
import './profile.css';

function Profile () {
    return (
        <>
            <Navbar/>
            <div className="profile-container">
                <div className="personal-info">
                    <div className="info">
                        <h1>Personal Info</h1>
                    </div>
                    <div  className="info">
                        <span className="info-img">
                            <img src={require(`../assets/images/profile/name.png`).default} alt="img"></img>
                        </span>
                        <span>
                            <h6>Fadhil Amhadin</h6>
                            <p>Full Name</p>
                        </span>
                    </div>
                    <div  className="info">
                        <span className="info-img">
                            <img src={require(`../assets/images/profile/email.png`).default} alt="img"></img>
                        </span>
                        <span>
                            <h6>fadhilamhadin@gmail.com</h6>
                            <p>Email</p>
                        </span>
                    </div>
                    <div  className="info">
                        <span className="info-img">
                            <img src={require(`../assets/images/profile/phone.png`).default} alt="img"></img>
                        </span>
                        <span>
                            <h6>082233419336</h6>
                            <p>Mobile Phone</p>
                        </span>
                    </div>
                    <div className="info">
                        <span className="info-img">
                            <img src={require(`../assets/images/profile/address.png`).default} alt="img"></img>
                        </span>
                        <span>
                            <h6>Jalan Poros Makassar-Palopo</h6>
                            <p>Address</p>
                        </span>
                    </div>
                </div>
                <div className="profile-photo">
                    <img src={require(`../assets/images/avatar/Foto.jpg`).default} alt="img"></img>
                    <div>
                        <button>Change Photo Profile</button>
                    </div>
                </div>
            </div>
            {/* ===================================== Payment ===================================== */}
            <div className="history-trip">
                <h1>History Trip</h1>
            </div>
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
                            <p className="approved-payment">approved payment</p>
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
                            <img src={require(`../assets/images/profile/qr-code.png`).default} alt="payment" style={{border : "none"}} alt="qr-img"></img>
                            <h2 style={{marginTop : "10px"}}>TCK0101</h2>
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
            </div>
            <div className="footer" style={{marginTop : "6em"}}>
                <p>Copyright @ 2021 Dewe Tour - Fadhil - All Rights Reserved</p>
            </div>
        </>
    )
}

export default Profile;