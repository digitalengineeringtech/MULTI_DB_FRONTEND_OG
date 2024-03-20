import React, { useEffect } from "react";
import MainConDasHeader from "../Header/MainConDasHeader";
import RightTwo from "./RightTwo";
import MainBoard from "./SemiDivisions/MainBoard";
import OneOfStations from "./SemiDivisions/OneOfStations";
import UsersOne from "./UsersOne";
import MainConStation from "./MainConStation";
import SelectStation from "./SemiDivisions/SelectStation";
import MainConTables from "./MainConTables";
import AdjustMainCon from "./SemiDivisions/AdjustMainCon";

function Right({ setCondition, condition, navigation, setNavigation }) {
  useEffect(() => {}, [navigation]);
  // <MainConTables title={"Kyawsan_031"} />

  return (
    <div
      className={`w-[100%] duration-500  ${
        condition ? "ml-[70px]" : " ml-[200px]"
      }`}
    >
      <MainConDasHeader condition={condition} setCondition={setCondition} />
      <div className="flex  mt-[60px]">
        {(() => {
          switch (navigation) {
            case 0:
              return <MainBoard />;
            case 1:
              return (
                <SelectStation
                  navigation={navigation}
                  setNavigation={setNavigation}
                />
              );
            case 2:
              return (
                <OneOfStations
                  navigation={navigation}
                  setNavigation={setNavigation}
                  title={"Kyawsan_027"}
                />
              );
            case 3:
              return (
                <MainConTables
                  navigation={navigation}
                  setNavigation={setNavigation}
                  title={"Kyawsan_027"}
                />
              );
            case 4:
              return <UsersOne />;
            case 5:
              return <MainConStation />;
            case 6:
              return <OneOfStations title={"Kyawsan_016"} />;
            case 7:
              return <AdjustMainCon setNavigation={setNavigation} />;
            default:
              return null;
          }
        })()}
        {/* <RightTwo navigation={navigation} setNavigation={setNavigation} /> */}
      </div>
    </div>
  );
}

export default Right;
