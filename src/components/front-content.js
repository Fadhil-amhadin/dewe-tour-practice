import './front-content.css';
import image from '../assets/images/landscape2.jpg';

function Content (){
    return(
        <div>
            <h1 style={{textAlign: 'center'}}>Group Tour</h1>
            <div className="row">
                <div className="card">
                    <img src={image} alt="Avatar" style={{width: '16em'}}/>
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Content;