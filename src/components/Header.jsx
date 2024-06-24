import React, { useState } from "react";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaPython } from "react-icons/fa6";
import { FaAngular } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { Link, Outlet, useLocation } from "react-router-dom";
import QuickEnquiryModel from "./QuickEnquiryModel";

function Header() {
  const [li1, setLi1] = useState(true);
  const [li2, setLi2] = useState(false);
  const [li3, setLi3] = useState(false);
  const [li4, setLi4] = useState(false);
  const [li5, setLi5] = useState(false);

  const handleOnMouseEnterLi1 = () => {
    setLi1(true);
    setLi2(false);
    setLi3(false);
    setLi4(false);
    setLi5(false);
  };
  const handleOnMouseEnterLi2 = () => {
    setLi1(false);
    setLi2(true);
    setLi3(false);
    setLi4(false);
    setLi5(false);
  };

  const handleOnMouseEnterLi3 = () => {
    setLi1(false);
    setLi2(false);
    setLi3(true);
    setLi4(false);
    setLi5(false);
  };
  const handleOnMouseEnterLi4 = () => {
    setLi1(false);
    setLi2(false);
    setLi3(false);
    setLi4(true);
    setLi5(false);
  };
  const handleOnMouseEnterLi5 = () => {
    setLi1(false);
    setLi2(false);
    setLi3(false);
    setLi4(false);
    setLi5(true);
  };

  const location = useLocation();

  // Model functionality
  const [openModel, setOpenModel] = useState(false);

  return (
    <div>
      <header className="flex border-b bg-white font-sans min-h-[70px] w-full top-0 tracking-wide fixed z-50">
        {openModel &&
        <QuickEnquiryModel openModel={()=>setOpenModel(false)} />
      }

        <div className="flex flex-wrap items-center justify-center px-10 py-3 w-full gap-4 lg:gap-56">
          <Link to={"/"}>
            <img src="" alt=" Brand logo" className="w-36" />
          </Link>
          <div
            id="collapseMenu"
            className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
          >
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <ul className="lg:flex lg:items-center lg:justify-center lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="mb-6 hidden max-lg:block">
                <a href="javascript:void(0)">
                  <img
                    src="https://readymadeui.com/readymadeui.svg"
                    alt="logo"
                    className="w-36"
                  />
                </a>
              </li>
              <li className="group max-lg:border-b max-lg:py-3 relative">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block"
                >
                  Courses
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    className="ml-1 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </a>
                <ul className="absolute shadow-lg mt-5  bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6  z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                  <div className="flex mt-2 gap-4 ">
                    <div className="w-36 h-36 hover:rounded-md hover:bg-slate-100 flex items-center justify-center flex-col">
                      <HiMiniComputerDesktop size={50} />
                      Web
                    </div>
                    <div className="w-36 h-36 hover:rounded-md hover:bg-slate-100 flex items-center justify-center flex-col">
                      <FaPython size={50} />
                      Python
                    </div>
                    <div className="w-36 h-36 hover:rounded-md hover:bg-slate-100 flex items-center justify-center flex-col">
                      <FaAngular size={50} />
                      Angular
                    </div>
                    <div className="w-36 h-36 hover:rounded-md hover:bg-slate-100 flex items-center justify-center flex-col">
                      <FaReact color="blue" size={50} />
                      React
                    </div>
                    <div className="w-36 h-36 hover:rounded-md hover:bg-slate-100 flex items-center justify-center flex-col">
                      <FaJava size={50} />
                      Java
                    </div>
                    <div className="w-36 h-36 hover:rounded-md hover:bg-slate-100 flex items-center justify-center flex-col">
                      <IoLogoJavascript size={50} />
                      Java Script
                    </div>
                  </div>
                  <div className="flex gap-4 ">
                    <div className="w-36 h-36 hover:rounded-md hover:bg-slate-100 flex items-center justify-center flex-col">
                      <HiMiniComputerDesktop size={50} />
                      Web
                    </div>
                    <div className="w-36 h-36 hover:rounded-md hover:bg-slate-100 flex items-center justify-center flex-col">
                      <HiMiniComputerDesktop size={50} />
                      Web
                    </div>
                    <div className="w-36 h-36 hover:rounded-md hover:bg-slate-100 flex items-center justify-center flex-col">
                      <HiMiniComputerDesktop size={50} />
                      Web
                    </div>
                    <div className="w-36 h-36 hover:rounded-md hover:bg-slate-100 flex items-center justify-center flex-col">
                      <HiMiniComputerDesktop size={50} />
                      Web
                    </div>
                    <div className="w-36 h-36 hover:rounded-md hover:bg-slate-100 flex items-center justify-center flex-col">
                      <HiMiniComputerDesktop size={50} />
                      Web
                    </div>
                    <div className="w-36 h-36 hover:rounded-md hover:bg-slate-100 flex items-center justify-center flex-col">
                      <HiMiniComputerDesktop size={50} />
                      Web
                    </div>
                  </div>
                </ul>
              </li>
              <li className="group max-lg:border-b max-lg:py-3 relative">
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block"
                >
                  Programs
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    className="ml-1 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                      data-name="16"
                      data-original="#000000"
                    />
                  </svg>
                </a>
                <ul className="absolute shadow-lg -ml-48 mt-5 bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                  {li1 && (
                    <div className="w-[900px] flex gap-4">
                      <div className="flex flex-col w-[25%] border-r-2 ">
                        <ul className="">
                          <li
                            onMouseEnter={handleOnMouseEnterLi1}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold py-2 px-4 border-b-[1px] border-gray-300"
                          >
                            java
                          </li>
                          <li
                            onMouseEnter={handleOnMouseEnterLi2}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold py-2 px-4 border-b-[1px] border-gray-300"
                          >
                            javascript
                          </li>
                          <li
                            onMouseEnter={handleOnMouseEnterLi3}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold py-2 px-4 border-b-[1px] border-gray-200"
                          >
                            C++
                          </li>
                          <li
                            onMouseEnter={handleOnMouseEnterLi4}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold py-2 px-4 border-b-[1px] border-gray-200"
                          >
                            .net
                          </li>
                          <li
                            onMouseEnter={handleOnMouseEnterLi5}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold  py-2 px-4 border-b-[1px] border-gray-100"
                          >
                            Python
                          </li>
                        </ul>
                      </div>
                      <div className=" flex items-center justify-center w-[70%]">
                        <img
                          src="https://th.bing.com/th/id/OIP.ftBR31POQfQeUyf42CU9TwHaEK?rs=1&pid=ImgDetMain"
                          className="w-[50%] rounded-md h-36"
                        />
                      </div>
                    </div>
                  )}
                  {li2 && (
                    <div className="w-[900px] flex gap-4">
                      <div className="flex flex-col w-[25%] border-r-2 ">
                        <ul className="">
                          <li
                            onMouseEnter={handleOnMouseEnterLi1}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold py-2 px-4 border-b-[1px] border-gray-300"
                          >
                            java
                          </li>
                          <li
                            onMouseEnter={handleOnMouseEnterLi2}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold py-2 px-4 border-b-[1px] border-gray-300"
                          >
                            javascript
                          </li>
                          <li
                            onMouseEnter={handleOnMouseEnterLi3}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold py-2 px-4 border-b-[1px] border-gray-200"
                          >
                            C++
                          </li>
                          <li
                            onMouseEnter={handleOnMouseEnterLi4}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold py-2 px-4 border-b-[1px] border-gray-200"
                          >
                            .net
                          </li>
                          <li
                            onMouseEnter={handleOnMouseEnterLi5}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold  py-2 px-4 border-b-[1px] border-gray-100"
                          >
                            Python
                          </li>
                        </ul>
                      </div>
                      <div className=" flex items-center justify-center gap-7 ml-2 w-[70%]">
                        <img
                          src="https://th.bing.com/th/id/R.0ba191798fb0c39cb36b36e614a1f4ab?rik=gTYo%2f8MsH4C5%2fw&riu=http%3a%2f%2fregion1.nirsa.net%2fwp-content%2fuploads%2f2017%2f01%2fER_webinar_graphic_colour.jpg&ehk=LOOvVwxgo0djh%2b7MvGzTGfU%2fo3TjQ53TACtmPRlU1cE%3d&risl=&pid=ImgRaw&r=0"
                          className="w-[70%] rounded-md h-36"
                        />
                        <img
                          src="https://th.bing.com/th/id/R.0ba191798fb0c39cb36b36e614a1f4ab?rik=gTYo%2f8MsH4C5%2fw&riu=http%3a%2f%2fregion1.nirsa.net%2fwp-content%2fuploads%2f2017%2f01%2fER_webinar_graphic_colour.jpg&ehk=LOOvVwxgo0djh%2b7MvGzTGfU%2fo3TjQ53TACtmPRlU1cE%3d&risl=&pid=ImgRaw&r=0"
                          className="w-[70%] rounded-md h-36"
                        />
                      </div>
                    </div>
                  )}{" "}
                  {li3 && (
                    <div className="w-[900px] flex gap-4">
                      <div className="flex flex-col w-[25%] border-r-2 ">
                        <ul className="">
                          <li
                            onMouseEnter={handleOnMouseEnterLi1}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold py-2 px-4 border-b-[1px] border-gray-300"
                          >
                            java
                          </li>
                          <li
                            onMouseEnter={handleOnMouseEnterLi2}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold py-2 px-4 border-b-[1px] border-gray-300"
                          >
                            javascript
                          </li>
                          <li
                            onMouseEnter={handleOnMouseEnterLi3}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold py-2 px-4 border-b-[1px] border-gray-200"
                          >
                            C++
                          </li>
                          <li
                            onMouseEnter={handleOnMouseEnterLi4}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold py-2 px-4 border-b-[1px] border-gray-200"
                          >
                            .net
                          </li>
                          <li
                            onMouseEnter={handleOnMouseEnterLi5}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold  py-2 px-4 border-b-[1px] border-gray-100"
                          >
                            Python
                          </li>
                        </ul>
                      </div>
                      <div className=" flex items-center justify-center w-[70%]">
                        <img
                          src="https://trustedchain.it/wp-content/uploads/2021/02/webinar.jpg"
                          className="w-[50%] rounded-md h-36"
                        />
                      </div>
                    </div>
                  )}{" "}
                  {li4 && (
                    <div className="w-[900px] flex gap-4">
                      <div className="flex flex-col w-[25%] border-r-2 ">
                        <ul className="">
                          <li
                            onMouseEnter={handleOnMouseEnterLi1}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold py-2 px-4 border-b-[1px] border-gray-300"
                          >
                            java
                          </li>
                          <li
                            onMouseEnter={handleOnMouseEnterLi2}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold py-2 px-4 border-b-[1px] border-gray-300"
                          >
                            javascript
                          </li>
                          <li
                            onMouseEnter={handleOnMouseEnterLi3}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold py-2 px-4 border-b-[1px] border-gray-200"
                          >
                            C++
                          </li>
                          <li
                            onMouseEnter={handleOnMouseEnterLi4}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold py-2 px-4 border-b-[1px] border-gray-200"
                          >
                            .net
                          </li>
                          <li
                            onMouseEnter={handleOnMouseEnterLi5}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold  py-2 px-4 border-b-[1px] border-gray-100"
                          >
                            Python
                          </li>
                        </ul>
                      </div>
                      <div className=" flex items-center justify-center w-[70%]">
                        <img
                          src="https://law.asia/wp-content/uploads/2020/09/webinar-digital-conference.jpg"
                          className="w-[50%] rounded-md h-36"
                        />
                      </div>
                    </div>
                  )}{" "}
                  {li5 && (
                    <div className="w-[900px] flex gap-4">
                      <div className="flex flex-col w-[25%] border-r-2 ">
                        <ul className="">
                          <li
                            onMouseEnter={handleOnMouseEnterLi1}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold py-2 px-4 border-b-[1px] border-gray-300"
                          >
                            java
                          </li>
                          <li
                            onMouseEnter={handleOnMouseEnterLi2}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold py-2 px-4 border-b-[1px] border-gray-300"
                          >
                            javascript
                          </li>
                          <li
                            onMouseEnter={handleOnMouseEnterLi3}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold py-2 px-4 border-b-[1px] border-gray-200"
                          >
                            C++
                          </li>
                          <li
                            onMouseEnter={handleOnMouseEnterLi4}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold py-2 px-4 border-b-[1px] border-gray-200"
                          >
                            .net
                          </li>
                          <li
                            onMouseEnter={handleOnMouseEnterLi5}
                            className="hover:bg-gray-100 hover:text-yellow-500 hover:font-bold  py-2 px-4 border-b-[1px] border-gray-100"
                          >
                            Python
                          </li>
                        </ul>
                      </div>
                      <div className=" flex items-center justify-center w-[70%]">
                        <img
                          src="https://isg-one.com/images/default-source/default-album/webinar.jpg?sfvrsn=aac4fd31_0"
                          className="w-[50%] rounded-md h-36"
                        />
                      </div>
                    </div>
                  )}
                </ul>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  to={"/placement"}
                  className={` ${
                    location.pathname === "/placement"
                      ? "text-[#007bff]"
                      : "text-gray-600"
                  } hover:text-[#007bff]  text-[15px] font-bold block`}
                >
                  Placements
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  to={"/event"}
                  className={` ${
                    location.pathname === "/event"
                      ? "text-[#007bff]"
                      : "text-gray-600"
                  } hover:text-[#007bff]  text-[15px] font-bold block`}
                >
                  Events
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <Link
                  to={"/contactus"}
                  className={` ${
                    location.pathname === "/contactus"
                      ? "text-[#007bff]"
                      : "text-gray-600"
                  } hover:text-[#007bff]  text-[15px] font-bold block`}
                >
                  Contact Us
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3">
                <button
                  className="bg-yellow-500 text-white font-bold px-4 py-2  hover:bg-yellow-600 rounded-full"
                  onClick={()=>setOpenModel(true)}
                >
                  Quick Enquiry
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default Header;
