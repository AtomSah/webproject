import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import slider1 from '../../assets/bg1.png';
import slider2 from '../../assets/bg2.png';
import slider3 from '../../assets/bg3.png';
import slider4 from '../../assets/bg4.png';
import slider5 from '../../assets/bg5.png';
import {FaSearch} from "react-icons/fa";

function Carousel() {
    const slideStyles = {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '400px',

    };
    return (
        <div className="swiper-container">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{delay: 4000}}
                navigation
                pagination={{clickable: true}}
                scrollbar={{draggable: true}}


            >
                <SwiperSlide style={{...slideStyles, backgroundImage: `url(${slider1})`, height: '100%'}}>
                    <div className="hero min-h-52 flex items-center m-10 ">
                        <div className="text-white text-left">
                            <h1 className="text-3xl	 font-bold">Abroad Dreams</h1>
                            <p className="py-6 text-2xl">Start your journey in the world of abroad studies. Browse and Discover with Ease.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{...slideStyles, backgroundImage: `url(${slider2})`, height: '100%'}}>
                    <div className="hero min-h-52 flex items-center m-10 ">
                        <div className="text-white text-left">
                            <h1 className="text-3xl	 font-bold">Abroad Dreams</h1>
                            <p className="py-6 text-2xl">Your One-Stop Solution for Managing Profiles Online.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{...slideStyles, backgroundImage: `url(${slider3})`, height: '100%'}}>
                    <div className="hero min-h-52 flex items-center m-10 ">
                        <div className="text-white text-left">
                            <h1 className="text-3xl	 font-bold">Abroad Dreams</h1>
                            <p className="py-6 text-2xl">Experience Modern Application Management.</p>
                        </div>
                    </div>
                </SwiperSlide>  <SwiperSlide style={{...slideStyles, backgroundImage: `url(${slider4})`, height: '100%'}}>
                <div className="hero min-h-52 flex items-center m-10 ">
                    <div className="text-white text-left">
                        <h1 className="text-3xl	 font-bold">Abroad Dreams</h1>
                        <p className="py-6 text-2xl">Experience Modern Application Management.</p>
                    </div>
                </div>
            </SwiperSlide>  <SwiperSlide style={{...slideStyles, backgroundImage: `url(${slider5})`, height: '100%'}}>
                <div className="hero min-h-52 flex items-center m-10 ">
                    <div className="text-white text-left">
                        <h1 className="text-3xl	 font-bold">Abroad Dreams</h1>
                        <p className="py-6 text-2xl">Experience Modern Application Management.</p>
                    </div>
                </div>
            </SwiperSlide>
            </Swiper>
            <div>
            </div>
        </div>
    );
}

export default Carousel