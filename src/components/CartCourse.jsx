import React from "react";
import { Link } from "react-router-dom";

function Cart({ img, courseName, courseContent, route }) {
  return (
    <div className="">
      <div className="w-72 border-2 hover:border-yellow-600 hover:shadow-gray-500 hover:shadow-lg ">
        <Link to={route} >
        <div className=" cursor-pointer w-full">
          <img src={img} className="h-52 w-full " />
        </div>
        </Link>
        <div className="p-5">
          <h6 className="">
            <span className="font-semibold text-lg">Course Name: </span>
            {courseName}
          </h6>
          <p className="mt-4">
            <span className="font-medium">Course contents:</span>{" "}
            {courseContent.slice(0,25)}...
          </p>
          <Link to={route}>
          <h6 className="mt-4 font-medium cursor-pointer text-yellow-500 hover:text-yellow-600">
            Explore More...
          </h6>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
