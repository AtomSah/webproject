import Navbar from "../components/navbar.jsx";
import "../login&register/login.css"


const Login = () => {
    return(
        <>
            <Navbar/>

            <div className={"login-modal-content"}>
                <h2>Login</h2>
                <form>
                    <input className="email" type="text" placeholder="Email"></input>
                    <input className="password" type="password" placeholder="Password"></input>
                    <button className="Login">Login</button>
                </form>
            </div>
        </>
    )
}
export default Login