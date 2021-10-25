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
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        const fullName = document.getElementById('registFullName').value;
                        const email = document.getElementById('registEmail').value;
                        const password = document.getElementById('registPassword').value;
                        const phone = document.getElementById('registPhone').value;
                        const address = document.getElementById('registAddress').value;
                        const isAdmin = document.getElementById('registIsAdmin').value;

                        const prevEntry = JSON.parse(localStorage.getItem('user'));
                        prevEntry.push({fullName, email, password, phone, address, isAdmin});
                        localStorage.setItem('user', JSON.stringify(prevEntry));

                    }}>
                         <div className="registName">
                            <div><label>Full Name</label></div>
                            <input type="text" id="registFullName"></input>
                        </div>
                        <div className="registEmail">
                            <div><label>Email</label></div>
                            <input type="email" id="registEmail"></input>
                        </div>
                        <div className="registPassword">
                            <div><label>Password</label></div>
                            <input type="password" id="registPassword"></input>
                        </div>
                        <div className="registPhone">
                            <div><label>Phone</label></div>
                            <input type="number" id="registPhone"></input>
                        </div>
                        <div className="registAddress">
                            <div><label>Address</label></div>
                            <textarea type="text" id="registAddress"></textarea>
                        </div>
                        <input type="hidden" value={false} id="registIsAdmin"></input>
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