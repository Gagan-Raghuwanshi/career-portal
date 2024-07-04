import React from "react";
import { Link } from "react-router-dom";

function Cart({ img, courseName, courseContent, route }) {
  return (


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
  
  );
}

export default Cart;
