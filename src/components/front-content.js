import './front-content.css';
import data from '../data.json';

function Content (){
    const toRupiah = (num) => {
        return new Intl.NumberFormat("en-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(num);
    }
    return(
        <div className="content">
            <h1 style={{textAlign: 'center'}}>Group Tour</h1>
            <div className="row">
                {
                    data.map((dataElm) => {
                        return(
                        <div className="card" key={dataElm.id}>
                            <img src={require(`../assets/images/${dataElm.image}`).default} alt="Avatar" style={{width: '17em'}}/>
                            <div className="container">
                                <h2><b>{dataElm.name}</b></h2>
                                <div>
                                    <p className="price"><b>{toRupiah(dataElm.price)}</b></p>
                                    <p>{dataElm.country}</p>
                                </div>
                            </div>
                        </div>)
                    })
                }

            </div>
            <div className="footer">
                <p>Copyright @ 2021 Dewe Tour - Fadhil - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Content;