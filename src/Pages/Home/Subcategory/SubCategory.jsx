import React from "react";
import sub1 from "../../../assets/sub.png";
import sub2 from "../../../assets/sub2.jpg";
import sub3 from "../../../assets/sub3.png";
import sub4 from "../../../assets/sub4.jpg";
import sub5 from "../../../assets/sub5.jpg";
import { FaAngleRight } from "react-icons/fa";

const SubCategory = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-5 mt-20 md:space-x-5 md:mx-6 mx-4 mb-10">
      <div className="flex items-center bg-gray-100 rounded-full space-x-4 shadow-sm hover:shadow-lg transform hover:-translate-y-1 text-gray-100 hover:text-gray-500">
        <img src={sub1} alt="" className="rounded-full w-10 ml-3" />
        <div className="grid grid-cols-2 items-center md:gap-28 gap-40">
          <h3 className="text-base text-gray-500 font-semibold">Mart</h3>
          <FaAngleRight />
        </div>
      </div>
      <div className="flex items-center bg-gray-100 rounded-full space-x-4 shadow-sm hover:shadow-lg transform hover:-translate-y-1 text-gray-100 hover:text-gray-500">
        <img src={sub2} alt="" className="rounded-full w-10 ml-3" />
        <div className="grid grid-cols-2 items-center md:gap-28 gap-40">
          <h3 className="text-base text-gray-500 font-semibold">Feshion</h3>
          <FaAngleRight />
        </div>
      </div>
      <div className="flex items-center bg-gray-100 rounded-full space-x-4 shadow-sm hover:shadow-lg transform hover:-translate-y-1 text-gray-100 hover:text-gray-500">
        <img src={sub3} alt="" className="rounded-full w-10 ml-3" />
        <div className="grid grid-cols-2 items-center md:gap-28 gap-40">
          <h3 className="text-base text-gray-500 font-semibold">Beauty</h3>
          <FaAngleRight />
        </div>
      </div>
      <div className="flex items-center bg-gray-100 rounded-full space-x-4 shadow-sm hover:shadow-lg transform hover:-translate-y-1 text-gray-100 hover:text-gray-500">
        <img src={sub4} alt="" className="rounded-full w-10 ml-3" />
        <div className="grid grid-cols-2 items-center md:gap-28 gap-40">
          <h3 className="text-base text-gray-600 font-semibold">Makeover</h3>
          <FaAngleRight />
        </div>
      </div>
      <div className="flex items-center  bg-gray-100 rounded-full space-x-4 shadow-sm hover:shadow-lg transform hover:-translate-y-1 text-gray-100 hover:text-gray-500">
        <img src={sub5} alt="" className="rounded-full w-10 ml-3" />
        <div className="flex items-center md:space-x-6 space-x-28">
          <h3 className="text-base text-gray-600 font-semibold">
            Free Delivary
          </h3>
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default SubCategory;
