import './homepage.css'
import Navbar from "../components/navbar.jsx";
import Carasol from "../components/carasol.jsx";
import { FaSearch } from "react-icons/fa";
import Wallpaper from "../components/thapa/wallpapers.jsx";
import React, {useState} from "react";
import PopularPage from "./popularPage.jsx";
import Footer from "../components/Footer1.jsx";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";


const HomePage = () => {
    const [search,setSearch] = useState(null);

    const { data: wallpaper } = useQuery({
        queryKey: ["GET_ITEMMENU_DATA"],
        queryFn() {
            return axios.get("http://localhost:8084/item/findAll");
        }
    });

    const filteredItemData = wallpaper?.data.filter((item) =>
        item?.itemName?.toLowerCase().includes(search?.toLowerCase())
    );


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
            <Footer/>
        </>
    )
}

export default HomePage