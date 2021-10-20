function Register ({setRegist}){
    return(
        <div className="registBackground">
            <div className="registContainer">
                <div className="exitBtn">
                    <button onClick={() => {setRegist(false)}}>x</button>
                </div>
                <div className="registTitle">
                    <h1>Register</h1>
                </div>
                <div className="registBody">
                    <form>
                         <div className="registName">
                            <div><label>Full Name</label></div>
                            <input type="text"></input>
                        </div>
                        <div className="registEmail">
                            <div><label>Email</label></div>
                            <input type="email"></input>
                        </div>
                        <div className="registPassword">
                            <div><label>Password</label></div>
                            <input type="password"></input>
                        </div>
                        <div className="registPhone">
                            <div><label>Phone</label></div>
                            <input type="number"></input>
                        </div>
                        <input className="registSubmit" type="submit"></input>
                    </form>
                </div>
                <div className="registFooter">
                    <button><p>Already have an account? login here!</p></button>
                </div>
            </div>
        </div>
    )
}

export default Register;