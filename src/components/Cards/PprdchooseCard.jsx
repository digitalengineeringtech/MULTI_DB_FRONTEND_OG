import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LoginUser } from "../../redux/slices/LoginSlice";

export const PprdchooseCard = ({ img, title, route, collectionName }) => {
  const user = useSelector((state) => state.login);

  const dispatch = useDispatch();

  const handleClick = () => {
    let saver = {
      name: user.name,
      token: user.token,
      stationId: null,
      accessDb: collectionName,
    };

    console.log(collectionName);

    dispatch(LoginUser(saver));
  };

  return (
    <Link
      to={route}
      onClick={handleClick}
      className="hover:scale-105 duration-200"
    >
      <div onClick={handleClick} className="mt-20">
        <div className="bg-[#40a3fb95]  shadow-md  w-[240px] over rounded-2xl relative h-[150px]">
          <div className="bg-white overflow-hidden w-[170px] rounded-2xl absolute top-[-73px] z-30 border-8 border-[#40a3fb95] h-[170px] left-0 right-0 mx-auto ">
            <img className="h-full" src={img} alt="kd" />
          </div>
          <div className="absolute bottom-0 flex justify-center items-center border-[10px] border-[#40a3fb95] bg-white w-full h-[80px] rounded-[20px] ">
            <div className="mx-auto text-xl text-[#40a3fb] font-bold mt-4">
              {collectionName}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
