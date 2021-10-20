function Login ({setLogin}){
    return(
        <div className="loginBackground">
            <div className="loginContainer">
                <div className="exitBtn">
                    <button onClick={() => {setLogin(false)}}>x</button>
                </div>
                <div className="loginTitle">
                    <h1>Login</h1>
                </div>
                <div className="loginBody">
                    <form>
                        <div className="loginEmail">
                            <div><label>Email</label></div>
                            <input type="email"></input>
                        </div>
                        <div className="loginPassword">
                            <div><label>Password</label></div>
                            <input type="password"></input>
                        </div>
                        <input className="loginSubmit" type="submit"></input>
                    </form>
                </div>
                <div className="loginFooter">
                    <button><p>Don't have account? click here!</p></button>
                </div>
            </div>
        </div>
    )
}

export default Login;