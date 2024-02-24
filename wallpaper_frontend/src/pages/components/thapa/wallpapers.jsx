import React, {useState} from "react";
import "./wallpaper.css"
import WallpaperMenu from "./wallpaperApi.jsx";
import WallpaperCard from "./wallpaperCard.jsx";
import Navbas from "./Navbas.jsx";

const uniqueList = [
    ...new Set(
        WallpaperMenu.map((curElem) => {
            return curElem.category;
        })
    ),
    "All",
];

console.log(uniqueList);
const Wallpaper = () => {

    const [menuData, setMenuData] = useState(WallpaperMenu);
    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {
        if (category === "All") {
            setMenuData(WallpaperMenu);
            return;
        }

        const updatedList = WallpaperMenu.filter((curElem) => {
            return curElem.category === category;
        });

        setMenuData(updatedList);
    };

    return (
        <>
            <Navbas filterItem={filterItem} menuList={menuList} />

            <WallpaperCard menuData={menuData} />
        </>
    )
}

export default Wallpaper;
