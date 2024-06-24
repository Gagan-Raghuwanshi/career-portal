import React from "react";
import Header from "../components/Header";
import ReactSwiper from "../components/ReactSwiper";
import Cart from "../components/CartCourse";
import { FcManager } from "react-icons/fc";
import { MdOutlineMenuBook } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";

const img1 =
  "https://th.bing.com/th/id/OIP.EoJvVpBnjpiJr1JjS1P8jAHaE7?rs=1&pid=ImgDetMain";

function Home() {
  return (
    <div>
      <ReactSwiper />
      <div className="flex flex-col  items-center justify-center">
        <div className="bg-whit mt-4 gap-9 flex ">
          <Cart img={img1} />
          <Cart img={img1} />
          <Cart img={img1} />
          <Cart img={img1} />
        </div>
        <div className="bg-white mt-4 gap-9 flex ">
          <Cart img={img1} />
          <Cart img={img1} />
          <Cart img={img1} />
          <Cart img={img1} />
        </div>
      </div>
      <div className="w-full bg-slate-400 h-[550px] flex flex-col ">
        <div className=" px-40 mt-10 ">
          <h6 className="text-4xl font-normal">Why to join Webgurukul</h6>
          <p className="text-lg leading-10">
            Learn from step-by-step instructions combined.
          </p>
        </div>
        <div className="bg-slate-200 px-40 mt-10 flex justify-between">
          <div className=" flex flex-col gap-2">
            <div className="flex gap-4 text-xl">
              <FcManager size={28} />
              <p>Expert Profesional Trainers.</p>
            </div>
            <div className="flex gap-4 text-xl">
              <FcManager size={28} />
              <p> Company Training Certification.</p>
            </div>
            <div className="flex gap-4 text-xl">
              <FcManager size={28} />
              <p> 1 Year of Membership.</p>
            </div>
            <div className="flex gap-4 text-xl">
              <FcManager size={28} />
              <p> Live and Practical Projects.</p>
            </div>
            <div className="flex gap-4 text-xl">
              <FcManager size={28} />
              <p> Daily doubt Solving Session.</p>
            </div>
            <div className="flex gap-4 text-xl">
              <FcManager size={28} />
              <p> Interview Preparation.</p>
            </div>
            <div className="flex gap-4 text-xl">
              <FcManager size={28} />
              <p>Personal Attention.</p>
            </div>
          </div>
          <div className="flex gap-20">
            <div className="flex flex-col gap-6">
              <div className="flex justify-evenly gap-8 py-4 px-5 rounded-full border-2 border-black hover:text-yellow-500 ">
                <MdOutlineMenuBook size={30} />
                <button className="">Practice session</button>
                <FaAngleRight size={30} />
              </div>
              <div className="flex justify-evenly gap-8 py-4 px-5 rounded-full border-2 border-black hover:text-yellow-500 ">
                <MdOutlineMenuBook size={30} />
                <button className="">Live Project Work</button>
                <FaAngleRight size={30} />
              </div>
              <div className="flex justify-evenly gap-8 py-4 px-5 rounded-full border-2 border-black hover:text-yellow-500 ">
                <MdOutlineMenuBook size={30} />
                <button className="">Placement Assistence</button>
                <FaAngleRight size={30} />
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex justify-evenly gap-8 py-4 px-5 rounded-full border-2 border-black hover:text-yellow-500 ">
                <MdOutlineMenuBook size={30} />
                <button className="">Exprience Trainer </button>
                <FaAngleRight size={30} />
              </div>
              <div className="flex justify-evenly gap-8 py-4 px-5 rounded-full border-2 border-black hover:text-yellow-500 ">
                <MdOutlineMenuBook size={30} />
                <button className="">IT Corporate Training </button>
                <FaAngleRight size={30} />
              </div>
              <div className="flex justify-evenly gap-8 py-4 px-5 rounded-full border-2 border-black hover:text-yellow-500 ">
                <MdOutlineMenuBook size={30} />
                <button className="">Free Study Material </button>
                <FaAngleRight size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
