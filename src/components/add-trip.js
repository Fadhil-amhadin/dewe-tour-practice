import { useState } from "react";
import Navbar from "./navbar";
import './add-trip.css';

function AddTrip(){
    const [eat, setEat] = useState('');
    const [day, setDay] = useState('');
    const [date, setDate] = useState('');
    const [price, setPrice] = useState('');
    const [quota, setQuota] = useState('');
    const [night, setNight] = useState('');
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [country, setCountry] = useState('');
    const [description, setDescription] = useState('');
    const [accomodation, setAccomodation] = useState('');
    const [transportation, setTransportation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const addContainer = {
            "id" : new Date().valueOf(),
            "name" : title,
            "price" : price,
            "country" : country,
            "accomodation" : accomodation,
            "transportation" : transportation,
            "eat" : eat,
            "duration" : [day, night],
            "date" : date,
            "quota" : quota,
            "description" : description,
            "image" : image
        }
        const prevEntry = JSON.parse(localStorage.getItem('trip'));
        prevEntry.push(addContainer);
        localStorage.setItem('trip', JSON.stringify(prevEntry));
    }
    return (
        <>
        <div className="add-trip-background">
            <Navbar/>
            <h1 className="add-title">Add Trip</h1>
            <div className="add-trip-container">
                <form onSubmit={handleSubmit}>
                        <div className="add-child">
                            <p>Title Trip</p>
                            <input type="text" onChange={(e) => setTitle(e.target.value)}></input>
                        </div>
                        <div className="add-child">
                            <p>Country</p>
                            <input type="text" onChange={(e) => setCountry(e.target.value)}></input>
                        </div>
                        <div className="add-child">
                            <p>Accomodation</p>
                            <input type="text" onChange={(e) => setAccomodation(e.target.value)}></input>
                        </div>
                        <div className="add-child">
                            <p>Transportation</p>
                            <input type="text" onChange={(e) => setTransportation(e.target.value)}></input>
                        </div>
                        <div className="add-child">
                            <p>Eat</p>
                            <input type="text" onChange={(e) => setEat(e.target.value)}></input>
                        </div>
                        <div className="add-child">
                            <p>Duration</p>
                            <div className="duration-child">
                                <span>
                                    <input type="text" onChange={(e) => setDay(e.target.value)}></input>
                                    <p>day</p>
                                </span>
                                <span>
                                    <input type="text" onChange={(e) => setNight(e.target.value)}></input>
                                    <p>night</p>
                                </span>
                            </div>
                        </div>
                        <div className="add-child">
                            <p>Date Trip</p>
                            <input type="text" onChange={(e) => setDate(e.target.value)}></input>
                        </div>
                        <div className="add-child">
                            <p>Price</p>
                            <input type="text" onChange={(e) => setPrice(e.target.value)}></input>
                        </div>
                        <div className="add-child">
                            <p>Quota</p>
                            <input type="number" onChange={(e) => setQuota(e.target.value)}></input>
                        </div>
                        <div className="add-child">
                            <p>Description</p>
                            <textarea onChange={(e) => setDescription(e.target.value)}></textarea>
                        </div>
                        <div className="add-child">
                            <p>Upload Image</p>
                            <input type="file" onChange={(e) => setImage(e.target.files[0].name)}/> 
                        </div>
                        <div className="add-child-button">
                            <input type="submit" className="button-add" value="Add Trip"></input>
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