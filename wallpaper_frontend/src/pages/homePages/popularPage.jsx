import React from "react";
import WallpaperMenu from "../components/thapa/wallpaperApi.jsx";
import {IoMdDownload} from "react-icons/io";

const PopularPage = () => {

    return (
        <>
            <div className="md:h-96 h-auto md:p-10 p-5 md:mb-52  ">
                <h1 className="md:text-4xl text-3xl gilroy-bold">Popular this week.</h1>
                <div className="pt-6 md:flex  gap-20 flex-wrap  ">
                    {WallpaperMenu.map((i) => (
                        <div key={i.id} className="md:w-[26rem] md:mb-0 mb-8 rounded-xl cursor-pointer shadow-xl ">
                            <div className="overflow-hidden rounded-t-xl">
                                <img src={i.image} className="bg-cover h-[15rem] transform-gpu scale-100 hover:scale-110 transition-transform duration-500" alt={i.itemName} />
                            </div>
                            <div className="px-2 pt-2 pb-3 flex justify-between items-center">
                                <h1 className="gilroy-bold md:text-3xl text-2xl">{i.name}</h1>
                                <button className={"text-3xl"}><IoMdDownload /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PopularPage;
