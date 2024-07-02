import React from "react";
import { Link } from "react-router-dom";

function Cart({ img, courseName, courseContent, route }) {
  return (
    <>
      {/* <div className="">
        <div className="w-72 border-2 ">
          <Link to={route}>
            <div className=" cursor-pointer">
              <img src={img} className="h-52" />
            </div>
          </Link>
          <div className="p-5">
            <h6 className="">
              <span className="font-semibold text-lg">Course Name: </span>
              {courseName}
            </h6>
            <p className="mt-4">
              <span className="font-medium">Course contents:</span>{" "}
              {courseContent.slice(0, 25)}...
            </p>
            <Link to={route}>
              <h6 className="mt-4 font-medium cursor-pointer text-yellow-500 hover:text-yellow-600">
                Explore More...
              </h6>
            </Link>
          </div>
        </div>
      </div> */}

      <div class="bg-white shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] flex flex-col  justify-between w-full max-w-sm h-[400px] rounded-lg overflow-hidden mx-auto font-[sans-serif]">
        <div class="">
          <img src={img} class="w-full h-[150px]" />
        </div>

        <div class="p-6">
          <h3 class="text-gray-800 text-xl font-bold">{courseName}</h3>
          <p class="mt-4 text-sm text-gray-500 leading-relaxed">
            {courseContent}
          </p>
          <button
            type="button"
            class="mt-6 px-5 py-2.5 rounded-lg text-white text-sm tracking-wider border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
          >
            View
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
