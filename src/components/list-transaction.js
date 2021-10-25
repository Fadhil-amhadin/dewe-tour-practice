import Navbar from "./navbar";
import './list-transaction.css';
import { useHistory } from 'react-router';

function ListTransaction () {
    const history = useHistory();
    return(
        <>
            <Navbar/>
            <div className="list-container">
                <h1>Incoming Transaction</h1>
                <div className="list-content">
                    <table className="list-table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>User</th>
                                <th>Trip</th>
                                <th>Transfer Proof</th>
                                <th>Payment Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Fadhil</td>
                                <td>Pyramid Giza Egypt</td>
                                <td>bri.png</td>
                                <td><p className="approved-admin">Approved</p></td>
                                <td onClick={() => history.push('/admin-approve')}><img src={require(`../assets/images/mag-glasses.png`).default} alt="img" style={{width : "40px"}}></img></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Dhio</td>
                                <td>Lady Liberty USA</td>
                                <td>bni.png</td>
                                <td><p className="pending-admin">Pending</p></td>
                                <td onClick={() => history.push('/admin-approve')}><img src={require(`../assets/images/mag-glasses.png`).default} alt="img" style={{width : "40px"}}></img></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Farnidah</td>
                                <td>Qom Province Iran</td>
                                <td>bca.png</td>
                                <td><p className="cancel-admin">Cancel</p></td>
                                <td onClick={() => history.push('/admin-approve')}><img src={require(`../assets/images/mag-glasses.png`).default} alt="img" style={{width : "40px"}}></img></td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Nurul Mawaddah</td>
                                <td>Niagara Falls Canada</td>
                                <td>mandiri.png</td>
                                <td><p className="approved-admin">Approved</p></td>
                                <td onClick={() => history.push('/admin-approve')}><img src={require(`../assets/images/mag-glasses.png`).default} alt="img" style={{width : "40px"}}></img></td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Alwin</td>
                                <td>Bromo Mountain Indonesia</td>
                                <td>bri.png</td>
                                <td><p className="pending-admin">Pending</p></td>
                                <td onClick={() => history.push('/admin-approve')}><img src={require(`../assets/images/mag-glasses.png`).default} alt="img" style={{width : "36px"}}></img></td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Harfendi</td>
                                <td>Pyramid Giza Egypt</td>
                                <td>bri.png</td>
                                <td><p className="approved-admin">Approved</p></td>
                                <td onClick={() => history.push('/admin-approve')}><img src={require(`../assets/images/mag-glasses.png`).default} alt="img" style={{width : "40px"}}></img></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="footer" style={{marginTop : "6em"}}>
                <p>Copyright @ 2021 Dewe Tour - Fadhil - All Rights Reserved</p>
            </div>
        </>
    )
}

export default ListTransaction;