import Navbar from "./navbar";
import './list-transaction.css';
import { useHistory } from 'react-router';

function ListTransaction () {
    const history = useHistory();
    const dataTransaction = JSON.parse(localStorage.getItem('list-transaction'));
    let no = 0;
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
                            {dataTransaction.map(e => {
                                const statuStyling = `${e.trStatus}-admin`;
                                no++;
                                
                                return(
                                    <tr>
                                        <td>{no}</td>
                                        <td>{e.trName}</td>
                                        <td>{e.trNameTrip}</td>
                                        <td>{e.trProof}</td>
                                        <td><p className={statuStyling}>{e.trStatus}</p></td>
                                        <td onClick={() => history.push(`/admin-approve/${e.trEmail}`)}><img src={require(`../assets/images/mag-glasses.png`).default} alt="img" style={{width : "40px"}}></img></td>
                                    </tr>
                                )
                            })}
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