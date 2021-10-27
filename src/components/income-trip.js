import Navbar from "./navbar"
import data from '../data.json';
import './income-trip.css';
import {useHistory} from 'react-router-dom';

function IncomeTrip (){
    const history = useHistory();

    const toRupiah = (num) => {
        return new Intl.NumberFormat("en-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(num);
    }
    return(
        <>
            <Navbar/>
            <div className="incoming-trip-title">
                <h1>Incoming Trip</h1>
                <button onClick={() => {history.push(`/add-trip`)}}>Add Trip</button>
            </div>
            <div className="content">
            <div className="row">
                {
                    data.map((dataElm) => {
                        return(                      
                        <div onClick={() => {history.push(`/detail/${dataElm.id}`)}} className="card" key={dataElm.id}>
                            <img src={require(`../assets/images/figma/${dataElm.image}`).default} alt="Avatar" style={{width: '22em'}}/>
                            <div className="container">
                                <h2><b>{dataElm.name}</b></h2>
                                <div>
                                    <p className="price"><b>{toRupiah(dataElm.price)}</b></p>
                                    <p>{dataElm.country}</p>
                                </div>
                            </div>
                        </div>                      
                        )
                    })
                }

            </div>
            <div className="footer">
                <p>Copyright @ 2021 Dewe Tour - Fadhil - All Rights Reserved</p>
            </div>
        </div>
        </>
    )
}

export default IncomeTrip;