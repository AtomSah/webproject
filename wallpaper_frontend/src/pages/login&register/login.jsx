import Navbar from "../components/navbar.jsx";
import "../login&register/login.css"


const Login = () => {
    return(
        <>
            <Navbar/>

            <div className="w-10/12" style={{ backgroundImage: "url('https://images.pexels.com/photos/624544/pexels-photo-624544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", borderRadius: "15%" }}>
                <div className={"login-modal-content"}>
                    <h2>Login</h2>
                    <form>
                        <input className="email" type="text" placeholder="Email"></input>
                        <input className="password" type="password" placeholder="Password"></input>
                        <button className="btn-login">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login