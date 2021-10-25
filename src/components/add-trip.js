import Navbar from "./navbar";
import './add-trip.css';

function AddTrip(){
    return (
        <>
        <div className="add-trip-background">
            <Navbar/>
            <h1 className="add-title">Add Trip</h1>
            <div className="add-trip-container">
                <form>
                        <div className="add-child">
                            <p>Title Trip</p>
                            <input type="text"></input>
                        </div>
                        <div className="add-child">
                            <p>Country</p>
                            <input type="text"></input>
                        </div>
                        <div className="add-child">
                            <p>Accomodation</p>
                            <input type="text"></input>
                        </div>
                        <div className="add-child">
                            <p>Transportation</p>
                            <input type="text"></input>
                        </div>
                        <div className="add-child">
                            <p>Eat</p>
                            <input type="text"></input>
                        </div>
                        <div className="add-child">
                            <p>Duration</p>
                            <div className="duration-child">
                                <span>
                                    <input type="text"></input>
                                    <p>day</p>
                                </span>
                                <span>
                                    <input type="text"></input>
                                    <p>night</p>
                                </span>
                            </div>
                        </div>
                        <div className="add-child">
                            <p>Date Trip</p>
                            <input type="text"></input>
                        </div>
                        <div className="add-child">
                            <p>Price</p>
                            <input type="text"></input>
                        </div>
                        <div className="add-child">
                            <p>Quota</p>
                            <input type="number"></input>
                        </div>
                        <div className="add-child">
                            <p>Description</p>
                            <textarea></textarea>
                        </div>
                        <div className="add-child-button">
                            <button>Add Trip</button>
                        </div>
                </form>
            </div>
        </div>
        <div className="footer" style={{marginTop : "0"}}>
            <p>Copyright @ 2021 Dewe Tour - Fadhil - All Rights Reserved</p>
        </div>
        </>
    )
}

export default AddTrip;