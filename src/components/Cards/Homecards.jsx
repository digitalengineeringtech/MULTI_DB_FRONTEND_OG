import React from "react";
import { Link } from "react-router-dom";

function Homecards({ img, title, buttontext, link }) {
  return (
    <div
      id="HomeCard"
      className=" border-black bg-white rounded-md relative  hover:-translate-y-5 bg  !duration-1000 h-[250px]  group  mx-auto     w-full  drop-shadow-2xl  overflow-hidden  p-5 flex justify-center items-center"
    >
      <Link className="w-full" to={link}>
        <div className=" relative mb-5  !duration-200 flex flex-col justify-center items-center">
          <img
            className="w-[40px] animate-image-pop-up !duration-1000  h-[40px] lg:w-[100px] lg:h-[100px]  md:w-[70px] md:h-[70px]"
            src={img}
            alt="Cart"
          />
          <h5 className="text-black animate-manger-pop-up text-md mt-5  mx-auto text-center font-medium ">
            {title}
          </h5>
        </div>
      </Link>
      <button className=" border-t-[1px]  !bg-primary flex h-[50px] home_button  w-full  text-white items-center justify-center   absolute bottom-0 right-0 left-0">
        <div className="w-full  flex items-center justify-center">
          <p className="text-sm">{buttontext}</p>
        </div>
      </button>
    </div>
  );
}

export default Homecards;
