import React, { useEffect, useState } from "react";
import CalenderComponent from "../PageComponents/CalenderComponent";
import { useLottie } from "lottie-react";
import USERGUIDE from "../../assets/images/29780-users-and-vr-loop.json";
import { RiGuideFill } from "react-icons/ri";
import Marquee from "react-fast-marquee";
import StationComponent from "../PageComponents/StationComponent";
import FuelTypeComponent from "../PageComponents/FuelTypeComponent";
import PurposeOfUseComponent from "../PageComponents/PurposeOfUseComponent";
import NozzleComponent from "../PageComponents/NozzleComponent";
import TankComponent from "../PageComponents/TankComponent";
import { GiFallDown } from "react-icons/gi";
import HeroCards from "./Components/HeroCards";
import { TbReload } from "react-icons/tb";
import MacComponent from "./Components/MacComponent";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

let start = new Date();
start.setHours(0);
start.setMinutes(0);
start.setSeconds(0);
start = new Date(start);

let end = new Date();
end.setHours(23);
end.setMinutes(59);
end.setSeconds(59);
end = new Date(end);
function UserManual() {
  const [value1, setValue1] = useState({});
  const [value2, setValue2] = useState({});
  const [value3, setValue3] = useState({});
  const [value4, setValue4] = useState({});
  const [value5, setValue5] = useState({});
  const [value6, setValue6] = useState({});
  const [demoCValue1, setDemoCValue1] = useState(start);
  const [demoCValue2, setDemoCValue2] = useState(end);
  const [demoStationValue1, setDemoStationValue2] = useState({});
  const [demoFuelTypeValue1, setDemoFuelTypeValue1] = useState({});
  const [demoPurposeOfUseValue1, setDemoPurposeOfUseValue1] = useState({});
  const [demoNozzleValue1, setDemoNozzleValue1] = useState({});

  const user = useSelector((state) => state.login);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.login) {
      navigate("/");
    }
  }, [user, navigate]);

  const options = {
    animationData: USERGUIDE,
    loop: true,
  };
  const { View } = useLottie(options);

  return (
    <div className=" mt-[20px] px-[60px] bg-blue-900">
      <div className="container py-[100px] mx-auto ">
        <div className="hero h-[83svh]  rounded-lg flex gap-[30px] items-center justify-center relative">
          <div className="w-[50%] p-3">{View}</div>
          {/* <div className='w-[50%]'>
                        <HeroCards/>
                </div> */}
          <div className="w-[50%] text-[#ececec]">
            <p className=" text-xl text-[3rem]  leading-[50px]  font-extrabold uppercase">
              <div className="text-[3rem]">If a user</div>
              <div className="text-[3rem]"> is having a problem,</div>
              <div className="text-[3rem]">
                {" "}
                it’s{" "}
                <span className="text-[3.5rem] font-extrabold">
                  {" "}
                  our problem
                </span>
                .
              </div>
            </p>
            <button className="bg-blue-900  border-2 font-Padauk border-white  text-white w-[150px] p-2 rounded-md mt-5 flex items-center justify-around">
              User Guide <RiGuideFill className="scale-[1.2]" />
            </button>
          </div>
          <div className="absolute right-[100px] bottom-[50px]">
            <GiFallDown className=" text-[#1a1919] scale-[4]" />
          </div>
        </div>
        <Marquee className=" bg-blue-900 mt-[40px]  text-[#d2d1d1] drop-shadow-2xl h-[100px] ">
          <div className=" p-3 ">
            <h3>Calender</h3>
            <CalenderComponent
              date={start}
              start={true}
              value={value1}
              setValue={setValue1}
            />
          </div>
          <div className="p-3">
            <h3>Station</h3>
            <StationComponent value={value2} setValue={setValue2} />
          </div>
          <div className="p-3">
            <FuelTypeComponent value={value3} setValue={setValue3} />
          </div>
          <div className="p-3">
            <PurposeOfUseComponent value={value4} setValue={setValue4} />
          </div>
          <div className="p-3">
            <NozzleComponent value={value5} setValue={setValue5} />
          </div>
          <div className="p-3">
            <TankComponent value={value6} setValue={setValue6} />
          </div>
        </Marquee>

        <section className="mt-[100px]">
          <h3 className="text-2xl text-[#d2d1d1]">Filter Button Guide</h3>
          <div className="mt-[80px]">
            <h3 className="mb-5 text-lg text-[#d2d1d1]">
              Calender Filter Button
            </h3>
            <div className="flex container mx-auto  items-start justify-between gap-5">
              <div className="content mt-[80px] w-[50%]  rounded-lg bg-white h-[500px]  ">
                <div className="bar bg-gray-800 drop-shadow-2xl flex h-[40px] px-3 justify-between rounded-t-lg items-center ">
                  <div className="nav  h-[20px] rounded-lg gap-2 flex">
                    <div className="bg-[#FF605C] w-[15px] h-[15px] rounded-full"></div>
                    <div className="bg-[#FFBD44] w-[15px] h-[15px] rounded-full"></div>
                    <div className="bg-[#00CA4E] w-[15px] h-[15px] rounded-full"></div>
                  </div>
                  <div className="bg-gray-400 h-[30px] px-4 flex justify-center items-center ">
                    <p className="text-xs">https://detmm-fuelstations.com</p>
                    <TbReload className="scale-[0.8] font-extrabold" />
                  </div>
                  <div></div>
                </div>
                <div className="p-5 items-center mt-[30px] flex justify-around">
                  <div className="scale-[0.9]">
                    <h3 className="text-black mb-5">Start Date</h3>
                    <CalenderComponent
                      date={start}
                      start={true}
                      value={demoCValue1}
                      setValue={setDemoCValue1}
                    />
                  </div>
                  <div className="scale-[0.9]">
                    <h3 className="text-black mb-5">End Date</h3>
                    <CalenderComponent
                      date={end}
                      value={demoCValue2}
                      setValue={setDemoCValue2}
                    />
                  </div>
                </div>
                <div className="px-5 pt-10">
                  <table>
                    <tbody>
                      <tr>
                        <td class="td-1">
                          <span></span>
                        </td>
                        <td class="td-2">
                          <span></span>
                        </td>
                        <td class="td-3">
                          <span></span>
                        </td>
                        <td class="td-4"></td>
                        <td class="td-5">
                          <span></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-1">
                          <span></span>
                        </td>
                        <td class="td-2">
                          <span></span>
                        </td>
                        <td class="td-3">
                          <span></span>
                        </td>
                        <td class="td-4"></td>
                        <td class="td-5">
                          <span></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-1">
                          <span></span>
                        </td>
                        <td class="td-2">
                          <span></span>
                        </td>
                        <td class="td-3">
                          <span></span>
                        </td>
                        <td class="td-4"></td>
                        <td class="td-5">
                          <span></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-1">
                          <span></span>
                        </td>
                        <td class="td-2">
                          <span></span>
                        </td>
                        <td class="td-3">
                          <span></span>
                        </td>
                        <td class="td-4"></td>
                        <td class="td-5">
                          <span></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-1">
                          <span></span>
                        </td>
                        <td class="td-2">
                          <span></span>
                        </td>
                        <td class="td-3">
                          <span></span>
                        </td>
                        <td class="td-4"></td>
                        <td class="td-5">
                          <span></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-1">
                          <span></span>
                        </td>
                        <td class="td-2">
                          <span></span>
                        </td>
                        <td class="td-3">
                          <span></span>
                        </td>
                        <td class="td-4"></td>
                        <td class="td-5">
                          <span></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-1">
                          <span></span>
                        </td>
                        <td class="td-2">
                          <span></span>
                        </td>
                        <td class="td-3">
                          <span></span>
                        </td>
                        <td class="td-4"></td>
                        <td class="td-5">
                          <span></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-1">
                          <span></span>
                        </td>
                        <td class="td-2">
                          <span></span>
                        </td>
                        <td class="td-3">
                          <span></span>
                        </td>
                        <td class="td-4"></td>
                        <td class="td-5">
                          <span></span>
                        </td>
                      </tr>
                      <tr>
                        <td class="td-1">
                          <span></span>
                        </td>
                        <td class="td-2">
                          <span></span>
                        </td>
                        <td class="td-3">
                          <span></span>
                        </td>
                        <td class="td-4"></td>
                        <td class="td-5">
                          <span></span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="text-start p-[50px] rounded-lg  w-[50%] drop-shadow-2xl  bg-white ">
                <h3 className="text-2xl mb-5">Calender Filter Button</h3>
                <p className="mb-5">
                  The Calendar Filter Button is a powerful tool designed to
                  assist users in selecting specific dates for filtering data.
                  This user manual guide provides detailed instructions on how
                  to effectively use the Calendar Filter Button, which includes
                  two modes: Start Date and End Date.
                </p>

                <div>
                  <h3 className="text-lg font-extrabold mb-3">1. Start Date</h3>
                  <p>
                    The Start Date mode allows users to select the starting date
                    for filtering data. By clicking the Start Date Calendar
                    Button, users can easily navigate through the calendar to
                    find their desired starting date. The mission of the Start
                    Date Calendar Button is to help users specify the beginning
                    date they want to search for.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-extrabold mt-3 mb-3">
                    2. End Date
                  </h3>
                  <p>
                    The End Date mode enables users to choose the ending date
                    for filtering data. By selecting the End Date Calendar
                    Button, users can conveniently navigate through the calendar
                    to locate their desired ending date. The mission of the End
                    Date Calendar Button is to assist users in specifying the
                    end date they want to search for.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-extrabold mt-3 mb-3">
                    3. Searching Data Between Start Date and End Date
                  </h3>
                  <p>
                    If both the Start Date and End Date have been selected,
                    users can initiate the search process by clicking the Search
                    Button. The filter will then search for data that falls
                    within the specified range, inclusive of both the start and
                    end dates. This feature allows users to narrow down their
                    search and obtain data that meets their specific time
                    criteria.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-extrabold mb-3 mt-3">
                    4. Filtering for a Single Day
                  </h3>
                  <p>
                    In cases where users only require data for a single day, the
                    Start Date value and the End Date value must be the same. By
                    selecting a single date using the Calendar Buttons for both
                    Start Date and End Date, users can ensure that only data for
                    that particular day will be filtered.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[80px] container mx-auto">
            <h3 className="mb-5 text-xl text-[#d2d1d1]">
              Station Filter Button
            </h3>
            <div className="flex   items-start justify-between gap-5">
              <div className="w-[50%]">
                <div className="text-start p-[50px] rounded-lg  drop-shadow-2xl  bg-white ">
                  <h3 className="text-2xl mb-5">Station Filter Button</h3>
                  <p className="mb-5">
                    The Station Filter Button is a useful feature designed to
                    allow users to filter division stations according to their
                    preferences. This user manual guide provides detailed
                    instructions on how to effectively use the Station Filter
                    Button, emphasizing the requirement to select a station
                    filter value.
                  </p>

                  <div>
                    <h3 className="text-lg font-extrabold mb-3">
                      1. Selecting Division Stations
                    </h3>
                    <p>
                      The Station Filter Button enables users to choose specific
                      division stations for filtering data. By clicking on the
                      Station Filter Button, users can access a list of
                      available division stations.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <MacComponent component="Station">
                <StationComponent
                  value={demoStationValue1}
                  setValue={setDemoStationValue2}
                />
              </MacComponent>
            </div>
          </div>

          <div className="mt-[80px] container mx-auto">
            <h3 className="mb-5 text-xl text-[#d2d1d1]">
              Fuel Type Filter Button
            </h3>
            <div className="flex   items-start justify-between gap-5">
              <MacComponent>
                <FuelTypeComponent
                  value={demoFuelTypeValue1}
                  setValue={setDemoFuelTypeValue1}
                />
              </MacComponent>
              <div className="w-[50%]">
                <div className="text-start p-[50px] rounded-lg  drop-shadow-2xl  bg-white ">
                  <h3 className="text-2xl mb-5">Fuel Type Filter Button</h3>
                  <p className="mb-5">
                    The Fuel Type Filter Button is a convenient feature that
                    allows users to select specific fuel types for checking data
                    values. This user manual guide provides detailed
                    instructions on how to effectively use the Fuel Type Filter
                    Button, which displays all available fuel types at the
                    station.
                  </p>

                  <div>
                    <h3 className="text-lg font-extrabold mb-3">
                      1. Selecting Fuel Types
                    </h3>
                    <p>
                      Clicking on the Fuel Type Filter Button opens a dropdown
                      menu or a list that presents all the fuel types available
                      at the station. Users can then select one or multiple fuel
                      types from the provided list. The purpose of the Fuel Type
                      Filter Button is to allow users to choose specific fuel
                      types to refine the displayed data.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[80px] container mx-auto">
            <h3 className="mb-5 text-xl text-[#d2d1d1]">
              Purpose Of Use Filter Button
            </h3>
            <div className="flex   items-start justify-between gap-5">
              <MacComponent>
                <PurposeOfUseComponent
                  value={demoPurposeOfUseValue1}
                  setValue={setDemoPurposeOfUseValue1}
                />
              </MacComponent>
              <div className="w-[50%]">
                <div className="text-start p-[50px] rounded-lg  drop-shadow-2xl  bg-white ">
                  <h3 className="text-2xl mb-5">
                    Purpose Of Filter Use Button
                  </h3>
                  <p className="mb-5">
                    The primary purpose of the Vehicle Category Filter Button is
                    to offer users the ability to select a specific vehicle
                    category to obtain data about vehicles belonging to that
                    category. This feature allows users to focus on vehicles
                    that are most relevant to their needs and interests.
                  </p>

                  <div>
                    <h3 className="text-lg font-extrabold mb-3">
                      1. Selecting Vehicle Categories
                    </h3>
                    <p>
                      Clicking on the Vehicle Category Filter Button will
                      present a dropdown menu that shows various vehicle
                      categories. Users can then select one category from the
                      provided options to filter the displayed data specifically
                      for that category.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg mt-3 font-extrabold mb-3">
                      2. Filtering Data by Vehicle Category
                    </h3>
                    <p>
                      By selecting a specific vehicle category from the dropdown
                      menu or list, users can apply the filter and update the
                      displayed data accordingly. The application or website
                      will then present data specifically related to the chosen
                      vehicle category, offering users relevant details about
                      vehicles falling under that category.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[80px] container mx-auto">
            <h3 className="mb-5 text-xl text-[#d2d1d1]">
              Nozzle No Filter Button
            </h3>
            <div className="flex   items-start justify-between gap-5">
              <div className="w-[50%]">
                <div className="text-start p-[50px] rounded-lg  drop-shadow-2xl  bg-white ">
                  <h3 className="text-2xl mb-5">Nozzle No Filter Button</h3>
                  <p className="mb-5">
                    TThe Nozzle Number Filter Button is a useful feature
                    designed to provide users with data specific to the number
                    of nozzles available at a fuel station. This user manual
                    guide provides detailed instructions on how to effectively
                    use the Nozzle Number Filter Button, allowing users to
                    select and access data related to specific nozzle numbers.
                  </p>

                  <div>
                    <h3 className="text-lg font-extrabold mb-3">
                      1. Selecting Nozzle Numbers
                    </h3>
                    <p>
                      Clicking on the Nozzle Number Filter Button will present a
                      dropdown menu or a list that displays the available nozzle
                      numbers at the fuel station. Users can then select one or
                      multiple nozzle numbers from the provided options to
                      filter the displayed data specifically for those nozzles.
                    </p>
                  </div>
                </div>
              </div>
              <MacComponent>
                <NozzleComponent
                  value={demoNozzleValue1}
                  setValue={setDemoNozzleValue1}
                />
              </MacComponent>
            </div>
          </div>
          <div className="mt-[80px] container mx-auto">
            <h3 className="mb-5 text-xl text-[#d2d1d1]">
              Tank No. Filter Button
            </h3>
            <div className="flex   items-start justify-between gap-5">
              <MacComponent>
                <TankComponent
                  value={demoNozzleValue1}
                  setValue={setDemoNozzleValue1}
                />
              </MacComponent>
              <div className="w-[50%]">
                <div className="text-start p-[50px] rounded-lg  drop-shadow-2xl  bg-white ">
                  <h3 className="text-2xl mb-5">Tank No Filter Button</h3>
                  <p className="mb-5">
                    The primary purpose of the Tank Filter Button is to enable
                    users to select a specific tank number to obtain fuel data
                    related to that particular tank. This feature helps users
                    access information such as fuel levels, refill history,
                    consumption patterns, or other relevant details specific to
                    the chosen tank.
                  </p>

                  <div>
                    <h3 className="text-lg font-extrabold mb-3">
                      1. Selecting Tank Numbers
                    </h3>
                    <p>
                      Clicking on the Tank Filter Button will present a dropdown
                      menu that displays the available tank numbers at the fuel
                      station. Users can then select one tank numbers from the
                      provided options to filter the displayed data specifically
                      for those tanks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default UserManual;
