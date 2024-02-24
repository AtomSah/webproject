import "./wallpaper.css"
import {TiStar} from "react-icons/ti";
import PropTypes from "prop-types";

const WallpaperCard = ({ menuData }) => {
    //   console.log(menuData);

    return (
        <>
            <div className={"card-container  "}>
                {menuData.map((item) => (
                    <div key={item.id} className={"card "}>
                        <div className={"card-body"}>
                            <span className={"card-number card-circle"}>{item.id}</span>
                            <span className={"card-author subtitle"}>{item.name}</span>
                            <h2 className={"card-title"}>{item.category}</h2>
                        </div>
                        <img src={item.image} alt={item.name} className={"card-media"} />
                        <span className={"card-tag "}><TiStar style={{width:"50px"}}/></span>
                        <span>
                            <button className={"download"}>
                                Download
                            </button>
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
};
WallpaperCard.propTypes = {
    menuData: PropTypes.array.isRequired
};
export default WallpaperCard;




































// import WallpaperMenu from "./wallpaperApi.jsx";
// import {TiStar} from "react-icons/ti";
// import React from "react";
//
// const wallpaperCard = () => {
//     return(
//         <>
//             <div className={"card-container  "}>
//                 {WallpaperMenu.map((item) => (
//                     <div key={item.id} className={"card "}>
//                         <div className={"card-body"}>
//                             <span className={"card-number card-circle"}>{item.id}</span>
//                             <span className={"card-author subtitle"}>{item.name}</span>
//                             <h2 className={"card-title"}>{item.category}</h2>
//                         </div>
//                         <img src={item.image} alt={item.name} className={"card-media"} />
//                         <span className={"card-tag subtle"}><TiStar /></span>
//                         <span>
//                                 <button className={"download"}>
//                                     {/*<FaDownload />*/}
//                                     Download
//                                 </button>
//                             </span>
//                     </div>
//                 ))}
//             </div>
//
//         </>
//     // <>
//     //     <section className="main-card--cointainer">
//     //         {WallpaperMenu.map((curElem) => {
//     //             const { id, name, category, image } = curElem;
//     //
//     //             return (
//     //                 <>
//     //                     <div className="card-container" key={id}>
//     //                         <div className="card ">
//     //                             <div className="card-body">
//     //                                 <span className="card-number card-circle subtle">{id}</span>
//     //                                 <span className="card-author subtle"> {category}</span>
//     //                                 <h2 className="card-title"> {name} </h2>
//     //
//     //                                 <div className="card-read">Read</div>
//     //                             </div>
//     //                             <img src={image} alt="images" className="card-media" />
//     //
//     //                             <span className={"card-tag subtle"}><TiStar /></span>
//     //                             <span>
//     //                                 <button className={"download"}>
//     //                                 {/*<FaDownload />*/}
//     //                                 Download
//     //                                 </button>
//     //                             </span>
//     //                         </div>
//     //                     </div>
//     //                 </>
//     //             );
//     //         })}
//     //     </section>
//     // </>
//     )
// }
//
// export  default wallpaperCard;






