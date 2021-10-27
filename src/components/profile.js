import icon from '../assets/images/figma/Icon.png';
import Navbar from "./navbar"
// import Payment from "./payment";
import './profile.css';

function Profile () {
    const dataUser = JSON.parse(localStorage.getItem('user'));
    const userCont = dataUser.filter(e => e.email === localStorage.getItem('currentUser'));

    const dataTransaction = JSON.parse(localStorage.getItem('list-transaction'));
    const transactionCont = dataTransaction.filter(e => e.trEmail === localStorage.getItem('currentUser'));

    const toRupiah = (num) => {
        return new Intl.NumberFormat("en-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(num);
    }
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
                            <h6>{userCont[0].fullName}</h6>
                            <p>Full Name</p>
                        </span>
                    </div>
                    <div  className="info">
                        <span className="info-img">
                            <img src={require(`../assets/images/profile/email.png`).default} alt="img"></img>
                        </span>
                        <span>
                            <h6>{userCont[0].email}</h6>
                            <p>Email</p>
                        </span>
                    </div>
                    <div  className="info">
                        <span className="info-img">
                            <img src={require(`../assets/images/profile/phone.png`).default} alt="img"></img>
                        </span>
                        <span>
                            <h6>{userCont[0].phone}</h6>
                            <p>Mobile Phone</p>
                        </span>
                    </div>
                    <div className="info">
                        <span className="info-img">
                            <img src={require(`../assets/images/profile/address.png`).default} alt="img"></img>
                        </span>
                        <span>
                            <h6>{userCont[0].address}</h6>
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
            {transactionCont.map(e => {
                const paymentStyle = `${e.trStatus}-payment`;
                return (
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
                                <h1>{e.trNameTrip}</h1>
                                <p>{e.trCountry}</p>
                                <div className="approved-payment-div">
                                    <p className={paymentStyle}>{e.trStatus} payment</p>
                                </div>
                            </div>
                            <div className="child2">
                                <div>
                                    <h3>Date Trip</h3>
                                    <p>{e.trDateTrip}</p>
                                </div>
                                <div>
                                    <h3>Accomodation</h3>
                                    <p>Hotel {e.trDuration[1]} nights</p>
                                </div>
                            </div>
                            <div className="child3">
                                <div>
                                    <h3>Duration</h3>
                                    <p>{e.trDuration[0]} Days {e.trDuration[1]} Nights</p>
                                </div>
                                <div>
                                    <h3>Transportaion</h3>
                                    <p>{e.trTransportation}</p>
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
                                        <td>{e.trName}</td>
                                        <td>Male</td>
                                        <td>{e.trPhone}</td>
                                        <td><b>Qty</b></td>
                                        <td><b>:  {e.trQty}</b></td>
                                    </tr>
                                    <tr className="last-child-table">
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><b>Total</b></td>
                                        <td><b style={{color : "red"}}>:  {toRupiah(e.trTotalPrice)}</b></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                )
            })}

            <div className="footer" style={{marginTop : "6em"}}>
                <p>Copyright @ 2021 Dewe Tour - Fadhil - All Rights Reserved</p>
            </div>
        </>
    )
}

export default Profile;