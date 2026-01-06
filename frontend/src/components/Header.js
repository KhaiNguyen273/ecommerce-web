import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import BannerSlider from './BannerSlider';
import LoginRegister from './LoginRegister';
import { useState } from 'react';
function Header() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <header className=" sticky font-sans w-full h-[94px] flex-col justify-around  ">
                <div className="font-sans w-full h-[94px] flex justify-around p-4 ">
                    <div className="w-1/5 h-full flex justify-center items-center">
                        <div className="flex justify-center items-center">
                            <a href="/" className="w-fit">
                                <img src="/LogoVongtay.png" className="h-[60px] object-contain"></img>
                            </a>
                        </div>
                    </div>
                    <div className="w-3/5 h-full flex justify-start items-center ">
                        <ul className="flex justify-start items-center gap-10 tracking-[0.15em] ">
                            <li className="w-fit px-4 py-2 h-full hover:text-[#f37628] cursor-pointer transition duration-300 ">
                                <a href="/" className="text-3xl">
                                    Trang chủ
                                </a>
                            </li>
                            <li className="relative w-fit px-4 py-2 h-full group cursor-pointer z-20">
                                <a
                                    href="/Product"
                                    className=" text-3xl flex items-center gap-1 transition-colors duration-300 text-black group-hover:text-[#f37628]"
                                >
                                    Sản phẩm
                                    <FontAwesomeIcon
                                        icon={faCaretUp}
                                        className="transition-transform duration-300 group-hover:rotate-180 ml-2"
                                    />
                                </a>

                                {/* Dropdown con */}
                                <ul className=" absolute top-full left-0 w-[150px] bg-white  rounded  opacity-0 translate-y-[-10px] invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-in-out">
                                    <li>
                                        <a
                                            href="/Product/bracelets"
                                            className=" block px-4 py-3 transition-colors duration-300 hover:text-[#f37628] hover:bg-gray-100"
                                        >
                                            Vòng tay
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/Product/necklaces"
                                            className="block px-4 py-3 transition-colors duration-300 hover:text-[#f37628] hover:bg-gray-100"
                                        >
                                            Dây chuyền
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/Product/rings"
                                            className="block px-4 py-3 transition-colors duration-300 hover:text-[#f37628] hover:bg-gray-100"
                                        >
                                            Nhẫn
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li className="w-fit px-4 py-2 h-full hover:text-[#f37628] cursor-pointer transition duration-300">
                                <a href="/Sale" className="text-3xl">
                                    Khuyến mãi
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-1/5 h-full flex justify-around items-center ">
                        <div className=" flex justify-around items-center ">
                            <div className="relative flex justify-center items-center ">
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm ..."
                                    className="absolute right-[35px] w-[350px] h-[30px] border border-gray-300 rounded-[24px] focus:outline-none focus:ring-0 m-2 p-[20px]"
                                ></input>
                                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-4xl  ml-5 cursor-pointer" />
                            </div>
                            <FontAwesomeIcon
                                icon={faUser}
                                className="text-4xl ml-10 cursor-pointer"
                                onClick={() => setOpen(true)}
                            />
                            <FontAwesomeIcon icon={faCartShopping} className="text-4xl ml-10 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <BannerSlider />
            </header>
            <LoginRegister open={open} setOpen={setOpen} />
        </>
    );
}

export default Header;
