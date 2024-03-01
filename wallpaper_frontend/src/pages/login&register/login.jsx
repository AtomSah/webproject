import Navbar from "../components/navbar.jsx";
import "../login&register/login.css"
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";
import {doLogin} from "../service/authService";
import {Link} from "react-router-dom";



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
            <div className={"flex w-full h-screen pt-8 px-10 bg-white justify-between"}>
                <div className="md:w-8/12 h-[82%] relative bg-cover bg-center mt-14" style={{ backgroundImage: "url('https://wallpapercave.com/wp/wp12299953.jpg')", borderRadius: "15%" }}>
                </div>
                <form className={"login-modal-content w-full md:w-3/12 h-[60%] flex justify-center items-center flex-col"} onSubmit={handleLogin}>
                    <h1 className={"text-3xl font-bold mb-1 flex"}>Login</h1>
                    <div className={"w-full  mt-4 "}>
                        <h1 className={"text-xs pl-2 text-gray-500"}>Email</h1>
                        <div className={"h-12 border-solid border rounded-2xl border-gray-300 flex items-center pl-4 pr-2"}>
                            <input type="text" id="email" name="email" value={credentials.email} onChange={handleChange} required className={"w-full outline-none"}/>
                        </div>
                    </div>
                    <div className={"w-full mt-4"}>
                        <h1 className={"text-xs pl-2 text-gray-500"}>Password</h1>
                        <div className={" h-12 border-solid border rounded-2xl border-gray-300 flex items-center pl-4 pr-2"}>
                            <input type="password" id="password" name="password" value={credentials.password} onChange={handleChange} required className={"w-full outline-none"}/>
                        </div>
                    </div>
                    <div className={"md:w-6/12 w-11/12 flex justify-end pt-3 pr-1"}>
                        <Link to={"/forgetpassword"}><h3 className={"text-gray-500 cursor-pointer transition-all hover:text-black"}>Forgot password?</h3></Link>
                    </div>
                    <button className={"sign-in1 "} type={"submit"}>
                        {/*mt-8 md:w-6/12 w-11/12 rounded-2xl h-12 bg-pink-700 text-white text-lg font-normal transition duration-200 ease-in-out hover:bg-white hover:text-black hover:font-semibold border-2 border-black*/}
                        Login
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login;