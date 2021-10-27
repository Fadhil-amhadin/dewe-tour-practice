import {useState} from 'react';
import {useContext} from 'react';
import {useHistory} from 'react-router';
import {AuthContext} from '../contexts/authContext';

function Login ({setLogin}){
    const history = useHistory();
    const [messageLog, setMessageLog] = useState(false);
    const {dispatch} = useContext(AuthContext);
    return(
        <div className="loginBackground">
            <div className="loginContainer">
                <div className="exitBtn">
                    <button onClick={() => {setLogin(false);
                                            setMessageLog(false);
                                            }}>x</button>
                </div>
                {messageLog ? <LoginMessage/> : null}
                <div className="loginTitle">
                    <h1>Login</h1>
                </div>
                <div className="loginBody">
                    <form onSubmit={(e) => {
                         e.preventDefault();
                         const email = document.getElementById('email').value;
                         const password = document.getElementById('password').value;
                         const isAdmin = document.getElementById('isAdmin').value;
                         const authValue = JSON.parse(localStorage.getItem('user'));
                         const cont = authValue.filter((elm) => (elm.email === email && elm.password === password))
                         console.log(email);
                         if(cont.length < 1)(setMessageLog(true))
                         else if(email === cont[0].email && password === cont[0].password && isAdmin === cont[0].isAdmin){
                             dispatch({isLogin : true, isAdmin : false})
                             localStorage.setItem('currentUser', cont[0].email);
                             setLogin(false);
                             window.location.reload();
                         }else if(email === cont[0].email && password === cont[0].password && isAdmin !== cont[0].isAdmin){
                             dispatch({isLogin : true, isAdmin : true})
                             localStorage.setItem('currentUser', cont[0].email);
                             setLogin(false);
                             history.push('/list-transaction');
                         }
                    }}>
                        <div className="loginEmail">
                            <div><label>Email</label></div>
                            <input type="email" id="email"></input>
                        </div>
                        <div className="loginPassword">
                            <div><label>Password</label></div>
                            <input type="password" id="password"></input>
                        </div>
                        <input type="hidden" value={false} id="isAdmin"></input>
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

function LoginMessage(){
    return(
        <div className="loginMessage">
            <p>your email or password is incorrect!</p>
        </div>
    )
}

export default Login;