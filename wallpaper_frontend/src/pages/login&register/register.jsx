import Navbar from "../components/navbar.jsx";
import "../login&register/register.css"

const Register = ()=> {
    return(
        <>
            <Navbar/>
            <div className={"register-overlay"}>
                <div className={"register-modal-content"}>
                    <h2>Sign Up</h2>
                    <form>
                        <input className="username" type="text" placeholder="Username"></input>
                        {/*<input className="lname" type="text" placeholder="Last name"></input>*/}
                        <input className="email" type="text" placeholder="Email"></input>
                        <input className="password" type="password" placeholder="Password"></input>
                        <input className="confirm_password" type="password" placeholder="Confirm Password"></input>
                        <input className="security-question" type="text" placeholder="Security Question"></input>
                        <button className="sign-in">Sign in</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Register