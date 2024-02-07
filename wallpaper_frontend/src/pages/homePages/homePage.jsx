import './homepage.css'
import Navbar from "../components/navbar.jsx";


const HomePage = () => {
    document.addEventListener('DOMContentLoaded', function () {
    let items = document.querySelectorAll('.slider .list .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let thumbnails = document.querySelectorAll('.thumbnail .item');

    //config param
    let countItem = items.length;
    let itemActive = 0;

    //event next click
        next.addEventListener('click', function () {
            itemActive = (itemActive + 1) % countItem;
            showSlider();
        });

        prev.addEventListener('click', function () {
            itemActive = (itemActive - 1 + countItem) % countItem;
            showSlider();
        });

    function showSlider() {
        //remove item active old
        let itemActiveold = document.querySelector('.slider .list .item.active');
        let thumbnailActiveold = document.querySelector('.thumbnail .item.active');
        itemActiveold.classList.remove('active');
        thumbnailActiveold.classList.remove('active')

        //active new item
        items[itemActive].classList.add('active')
        thumbnails[itemActive].classList.add('active')

    }
});



    return(
        <>
            <Navbar/>
            <div className={"slider"}>
                <div className={"list"}>
                    <div className={"item active"}>
                        <img src={"src/assets/bg1.png"}/>
                            <div className={"content"}>
                                <p>design</p>
                                <h2>Slider 01</h2>
                                <p>lorem lorem lorem lorem lorem lorem lorem lorem</p>
                            </div>
                    </div>
                    <div className={"item"}>
                        <img src={"src/assets/bg2.png"}/>
                        <div className={"content"}>
                            <p>design</p>
                            <h2>Slider 02</h2>
                            <p>lorem lorem lorem lorem lorem lorem lorem lorem</p>
                        </div>
                    </div>
                    <div className={"item"}>
                        <img src={"src/assets/bg3.png"}/>
                        <div className={"content"}>
                            <p>design</p>
                            <h2>Slider 03</h2>
                            <p>lorem lorem lorem lorem lorem lorem lorem lorem</p>
                        </div>
                    </div>
                    <div className={"item"}>
                        <img src={"src/assets/bg4.png"}/>
                        <div className={"content"}>
                            <p>design</p>
                            <h2>Slider 04</h2>
                            <p>lorem lorem lorem lorem lorem lorem lorem lorem</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"arrows"}>
                <button id={"prev"}> P </button>
                <button id={"next"}>N </button>
            </div>
            <div className={"thumbnail"}>
                <div className={"item active"}>
                    <img src={"src/assets/bg1.png"}/>
                    <div className={"content"}>
                        Slider slider
                    </div>
                </div>
                <div className={"item"}>
                    <img src={"src/assets/bg2.png"}/>
                    <div className={"content"}>
                        Slider slider
                    </div>
                </div>
                <div className={"item"}>
                    <img src={"src/assets/bg3.png"}/>
                    <div className={"content"}>
                        Slider slider
                    </div>
                </div>
                <div className={"item"}>
                    <img src={"src/assets/bg4.png"}/>
                    <div className={"content"}>
                        Slider slider
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage