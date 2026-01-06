import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
export default function BannerSlider() {
    return (
        <div className="relative pt-[15px] m-0 w-full h-fit overflow-hidden">
            <button className="custom-prev absolute left-8 top-1/2 z-10">
                <FontAwesomeIcon icon={faAngleLeft} className="text-5xl text-white" />
            </button>
            <button className="custom-next absolute right-8 top-1/2 z-10">
                <FontAwesomeIcon icon={faAngleRight} className="text-5xl  text-white" />
            </button>
            <Swiper
                speed={1000}
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                // spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next',
                }}
                className="w-full max-h-[600px] banner-swiper"
            >
                <SwiperSlide className=" flex items-center justify-center">
                    <a>
                        <img src="/banner1.jpg" className="w-full h-full object-cover"></img>
                    </a>
                </SwiperSlide>

                <SwiperSlide className=" flex items-center justify-center">
                    <a>
                        <img src="/banner2.jpg" className="w-full h-full object-cover"></img>
                    </a>
                </SwiperSlide>

                <SwiperSlide className=" flex items-center justify-center">
                    <a>
                        <img src="/banner3.jpg" className="w-full h-full object-cover"></img>
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
