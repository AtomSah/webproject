import './homepage.css'
import Navbar from "../components/navbar.jsx";
import Carasol from "../components/carasol.jsx";
import { FaSearch } from "react-icons/fa";
import Category from "./Category.jsx";
import Wallpaper from "../components/thapa/wallpapers.jsx";
import React from "react";
import PopularPage from "./popularPage.jsx";
import WallpaperMenu from "../components/thapa/wallpaperApi.jsx";


const HomePage = () => {



    return(
        <>
            <Navbar/>
           <div className={"pt-16"}>
               <Carasol/>
           </div>
            <div className={"search-header"}>
                <div className={"bg-color"}>
                    <div className={"search-input-container z-50"}>
                        <div className={"search-input-with-dropdown"}>
                            <div className={"left-side-wrapper"}>
                                <div className={"search-icon"}><FaSearch/></div>
                                <input type={"search"} placeholder={"SEARCH"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Wallpaper/>
            <PopularPage/>
        </>
    )
}

export default HomePage