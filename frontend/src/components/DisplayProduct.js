import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useRef, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function DisplayProduct({ title, icon, link }) {
    const nextRef = useRef(null);
    const prevRef = useRef(null);
    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    return (
        <div className="relative pt-[15px] m-0 w-full h-fit overflow-hidden">
            <div className="ml-[80px] mb-[25px] uppercase flex items-center">
                <i className="mr-[14px] text-[34px] text-[#ffd800] ">
                    <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
                </i>
                <h2 className="text-[31px] text-[#192e58] ">{title}</h2>
            </div>
            <button ref={prevRef} className="custom-prev absolute left-[70px] top-1/2 z-10">
                <FontAwesomeIcon
                    icon={faAngleLeft}
                    className="text-5xl text-gray-200 transition-all duration-300 hover:text-gray-400"
                />
            </button>
            <button ref={nextRef} className="custom-next absolute right-[70px] top-1/2 z-10">
                <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-5xl  text-gray-200 transition-all duration-300 hover:text-gray-400"
                />
            </button>
            <Swiper
                data-aos="fade-up"
                speed={1400}
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={3}
                spaceBetween={30}
                loop
                autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.autoplay.start();
                }}
                pagination={{ clickable: true }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                className="w-[80%] banner-swiper"
            >
                <SwiperSlide className="h-[486px] flex items-center justify-center">
                    <div>
                        <div class="relative group overflow-hidden">
                            <a href="#">
                                <img
                                    src="product1.jpg"
                                    class="w-full transition-opacity duration-[800ms] group-hover:opacity-0"
                                />
                                <img
                                    src="product3.png"
                                    class="w-full absolute inset-0 opacity-0 transition-opacity duration-[800ms] group-hover:opacity-100"
                                />
                            </a>
                        </div>
                        <div className="mt-[7px] pt-[9px] pr-[0px] pb-[23px] pl-[0px] text-[#192e58]">
                            <h3 className="text-[28px]">
                                <a className="text-[16px] mb-[10px] ">Dây Chuỗi Đá Mã Não Magical - Vàng</a>
                            </h3>
                            <div className="">
                                <span>350.000 VNĐ</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-[486px] flex items-center justify-center">
                    <div>
                        <div className="relative group overflow-hidden">
                            <a href="#">
                                <img
                                    src="product1.jpg"
                                    className="w-full transition-opacity duration-[800ms] group-hover:opacity-0"
                                />
                                <img
                                    src="product3.png"
                                    className="w-full absolute inset-0 opacity-0 transition-opacity duration-[800ms] group-hover:opacity-100"
                                />
                            </a>
                        </div>
                        <div className="mt-[7px] pt-[9px] pr-[0px] pb-[23px] pl-[0px] text-[#192e58]">
                            <h3 className="text-[28px]">
                                <a className="text-[16px] mb-[10px] ">Dây Chuỗi Đá Mã Não Magical - Vàng</a>
                            </h3>
                            <div className="">
                                <span>350.000 VNĐ</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-[486px] flex items-center justify-center">
                    <div>
                        <div className="relative group overflow-hidden">
                            <a href="#">
                                <img
                                    src="product1.jpg"
                                    className="w-full transition-opacity duration-[800ms] group-hover:opacity-0"
                                />
                                <img
                                    src="product3.png"
                                    className="w-full absolute inset-0 opacity-0 transition-opacity duration-[800ms] group-hover:opacity-100"
                                />
                            </a>
                        </div>
                        <div className="mt-[7px] pt-[9px] pr-[0px] pb-[23px] pl-[0px] text-[#192e58]">
                            <h3 className="text-[28px]">
                                <a className="text-[16px] mb-[10px] ">Dây Chuỗi Đá Mã Não Magical - Vàng</a>
                            </h3>
                            <div className="">
                                <span>350.000 VNĐ</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="h-[486px] flex items-center justify-center">
                    <div>
                        <div className="relative group overflow-hidden">
                            <a href="#">
                                <img
                                    src="product1.jpg"
                                    className="w-full transition-opacity duration-[800ms] group-hover:opacity-0"
                                />
                                <img
                                    src="product3.png"
                                    className="w-full absolute inset-0 opacity-0 transition-opacity duration-[800ms] group-hover:opacity-100"
                                />
                            </a>
                        </div>
                        <div className="mt-[7px] pt-[9px] pr-[0px] pb-[23px] pl-[0px] text-[#192e58]">
                            <h3 className="text-[28px]">
                                <a className="text-[16px] mb-[10px] ">Dây Chuỗi Đá Mã Não Magical - Vàng</a>
                            </h3>
                            <div className="">
                                <span>350.000 VNĐ</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="text-center mt-[2%]">
                <a
                    href={link}
                    className="uppercase border-b border-[#192e58] text-[#192e58] text-[18px] tracking-[5px] transition-all duration-300 pt-[3px] cursor-pointer hover:tracking-[8px] hover:text-[#ad0000]"
                >
                    Xem Thêm
                </a>
            </div>
        </div>
    );
}

export default DisplayProduct;
