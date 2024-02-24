
// import React from 'react'
// import Login from "../login&register/login.jsx";
import {Link, NavLink} from "react-router-dom"
import logo from "../../../src/assets/Screenshot_2024-02-11_181501-removebg-preview.png"
import {Component} from "react";
import "./../../pages/components/navbar.css"


class Navbar extends Component{

    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className={"NavbarItems"}>
                <h1 className={"navbar-logo"}>
                    <img src={logo} alt={"ComicNook"} width={"140px"}/>
                </h1>

                <div className={"menu-icons"} onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"} style={{fontSize:"25px"}}></i>
                </div>
                <div> </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    <div className={"nav-menu-list"}>
                        <li>
                            <NavLink to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/GenrePage"}>Genre</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/NewPage"}>New</NavLink>
                        </li>
                        <div className={"navbar-search-wrapper"}>
                            <input type={"search"} placeholder={"SEARCH"}/>
                        </div>
                    </div>

                <div className={"flex gap-4"}>
                    <div className={"btn-login  w-28 h-11 flex items-center justify-center"} >
                        <Link to={'/login'}><h3 onClick={console.log("login")}><a>Sign-In</a></h3></Link>
                    </div>

                    <div className={" btn-login   w-28 h-11 flex items-center justify-center "} >
                        <Link to={'/register'}><h3><a>Sign-Up</a></h3></Link>
                    </div>
                </div>
                </ul>

            </nav>
        )
    }
}
export default Navbar