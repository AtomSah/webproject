import Navbar from "../components/navbar.jsx";
import "../login&register/login.css"
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import {doLogin} from "../service/authService";


const Login = () => {

    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const{formState} = useForm();
    const {errors} = formState;

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8084/authenticate', credentials);

            if (response.status === 200) {
                const { token, userId, admin, userName, userEmail}= response.data.data;

                localStorage.setItem("userId", userId);
                localStorage.setItem("userName", userName);
                localStorage.setItem("userEmail", userEmail);
                doLogin(token);
                if (admin) {
                    navigate('/AdminDashboard');
                    window.alert('Login successful');
                } else {
                    window.alert('Login successful');
                    navigate('/');
                }
            }
        } catch (err) {
            window.alert('Invalid username and password');
        }
    };

    return(
        <>
            <Navbar/>

            <div className="w-10/12" style={{ backgroundImage: "url('https://images.pexels.com/photos/624544/pexels-photo-624544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", borderRadius: "15%" }}>
                <div className={"login-modal-content"}>
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <input type={"email"} name={"email"} placeholder={"Email"} className={"email"} value={credentials.email}
                               onChange={handleChange}/>
                        <input type={"password"} name={"password"} placeholder={"Password"} className={"password"} value={credentials.password}
                               onChange={handleChange}/>
                        <button className="btn-login" type={"submit"}>Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;