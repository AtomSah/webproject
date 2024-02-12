import './homepage.css'
import Navbar from "../components/navbar.jsx";
import Carasol from "../components/carasol.jsx";
// import React from "react";
import { FaSearch } from "react-icons/fa";

const HomePage = () => {

    return(
        <>
            <Navbar/>
           <div className={"pt-16"}>
               <Carasol/>
           </div>
            <div className={"search-header"}>
                <div className={"bg-color"}>
                    <div className={"search-input-container"}>
                        <div className={"search-input-with-dropdown"}>
                            <div className={"left-side-wrapper"}>
                                <div className={"search-icon"}><FaSearch/></div>
                                <input type={"search"} placeholder={"SEARCH"}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/*<input type={"search"} placeholder={"SEARCH"}/>*/}
        </>
    )
}

export default HomePage