import Navbar from "../components/navbar.jsx";
import "../login&register/login.css"


const Login = () => {
    return(
        <>
            <Navbar/>
            <div className={"login-overlay"}>
                <div className={"login-modal-content"}>
                    <h2>Login</h2>
                    {/*<button className="close-login-btn" >*/}
                    {/*    */}
                    {/*</button>*/}
                    <form>
                        <input className="fname" type="text" placeholder="First name"></input>
                        <input className="lname" type="text" placeholder="Last name"></input>
                        <input className="email" type="text" placeholder="Email"></input>
                        <input className="password" type="password" placeholder="Password"></input>
                        <button className="sign-in">Sign in</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login