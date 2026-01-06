import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

function LoginRegister({ open, setOpen }) {
    const [loginState, setLoginState] = useState(1);

    useEffect(() => {
        if (open) {
            setLoginState(1);
        }
    }, [open]);
    return (
        <div
            className={`
        fixed inset-0 z-[9998] bg-black/50
        transition-opacity duration-300
        ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
            onClick={() => setOpen(false)}
        >
            <div
                className={`
          fixed top-0 right-0 h-full w-[340px] bg-white z-[9999]
          transform transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : 'translate-x-full'}
        `}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="pt-[15px] pr-[10px] pb-[15px] pl-[20px] border-b border-gray flex justify-between text-[15px] font-[100]">
                    <span>TÀI KHOẢN</span>
                    <FontAwesomeIcon
                        icon={faXmark}
                        className="text-[20px] cursor-pointer"
                        onClick={() => setOpen(false)}
                    />
                </div>
                <div className="p-[15px]">
                    {loginState === 1 && (
                        <form>
                            <div className="mb-[15px]">
                                <h2 className="relative ml-10px leading-[40px] text-[24px] font-medium w-full flex justify-center items-center">
                                    <span>ĐĂNG NHẬP</span>
                                </h2>
                            </div>
                            <div className="mb-[1rem]">
                                <lable className="mb-[8px] inline-block">Email</lable>
                                <input
                                    placeholder="Email"
                                    type="email"
                                    className="h-[38px] leading-[38px] px-[15px] text-[14px] w-full 
                                border border-gray-300 transition-[border-color,box-shadow] 
                                duration-150 ease-in-out focus:border-[#80bdff] focus:outline-none focus:shadow-[0_0_0_.2rem_rgba(0,123,255,0.25)]"
                                />
                            </div>
                            <div className="mb-[16px]">
                                <lable className="mb-[8px] inline-block">Password</lable>
                                <input
                                    placeholder="Password"
                                    type="password"
                                    className="h-[38px] leading-[38px] px-[15px] text-[14px] w-full 
                                border border-gray-300 transition-[border-color,box-shadow] 
                                duration-150 ease-in-out focus:border-[#80bdff] focus:outline-none focus:shadow-[0_0_0_.2rem_rgba(0,123,255,0.25)]"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full h-[46px] mb-[10px] bg-black text-white transition-all duration-300 ease-in-out hover:bg-black/50"
                                >
                                    Đăng Nhập
                                </button>
                            </div>
                            <div className="text-[#4e4f4f] flex items-start">
                                <a
                                    className="text-[12px] mb-[2px] border-b cursor-pointer focus:text-[#fc8339] hover:text-[#fc8339]"
                                    onClick={() => {
                                        setLoginState(2);
                                    }}
                                >
                                    Chưa có mật khẩu - Đăng ký
                                </a>
                            </div>
                        </form>
                    )}
                    {loginState === 2 && (
                        <form>
                            <div className="mb-[15px]">
                                <h2 className="relative ml-10px leading-[40px] text-[24px] font-medium w-full flex justify-center items-center">
                                    <span>ĐĂNG KÝ</span>
                                </h2>
                            </div>
                            <div className="mb-[1rem]">
                                <lable className="mb-[8px] inline-block">First name</lable>
                                <input
                                    placeholder="First name"
                                    type="text"
                                    className="h-[38px] leading-[38px] px-[15px] text-[14px] w-full 
                                border border-gray-300 transition-[border-color,box-shadow] 
                                duration-150 ease-in-out focus:border-[#80bdff] focus:outline-none focus:shadow-[0_0_0_.2rem_rgba(0,123,255,0.25)]"
                                />
                            </div>
                            <div className="mb-[1rem]">
                                <lable className="mb-[8px] inline-block">Last name</lable>
                                <input
                                    placeholder="Last name"
                                    type="text"
                                    className="h-[38px] leading-[38px] px-[15px] text-[14px] w-full 
                                border border-gray-300 transition-[border-color,box-shadow] 
                                duration-150 ease-in-out focus:border-[#80bdff] focus:outline-none focus:shadow-[0_0_0_.2rem_rgba(0,123,255,0.25)]"
                                />
                            </div>
                            <div className="mb-[1rem]">
                                <lable className="mb-[8px] inline-block">Email</lable>
                                <input
                                    placeholder="Email"
                                    type="email"
                                    className="h-[38px] leading-[38px] px-[15px] text-[14px] w-full 
                                border border-gray-300 transition-[border-color,box-shadow] 
                                duration-150 ease-in-out focus:border-[#80bdff] focus:outline-none focus:shadow-[0_0_0_.2rem_rgba(0,123,255,0.25)]"
                                />
                            </div>
                            <div className="mb-[16px]">
                                <lable className="mb-[8px] inline-block">Password</lable>
                                <input
                                    placeholder="Password"
                                    type="password"
                                    className="h-[38px] leading-[38px] px-[15px] text-[14px] w-full 
                                border border-gray-300 transition-[border-color,box-shadow] 
                                duration-150 ease-in-out focus:border-[#80bdff] focus:outline-none focus:shadow-[0_0_0_.2rem_rgba(0,123,255,0.25)]"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full h-[46px] mb-[10px] bg-black text-white transition-all duration-300 ease-in-out hover:bg-black/50"
                                >
                                    Đăng Ký
                                </button>
                            </div>
                            <div className="text-[#4e4f4f] flex items-start">
                                <a
                                    className="text-[12px] mb-[2px] border-b cursor-pointer focus:text-[#fc8339] hover:text-[#fc8339]"
                                    onClick={() => {
                                        setLoginState(1);
                                    }}
                                >
                                    Trở về
                                </a>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LoginRegister;
