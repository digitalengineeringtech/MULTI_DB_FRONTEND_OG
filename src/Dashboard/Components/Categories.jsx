import React, { useEffect, useState } from "react";
import Category from "./Categories/Category";
import { MdAttachMoney } from "react-icons/md";
import useCategoriesHook from "../hooks/Categories.hook";
import { useSelector } from "react-redux";

let start = new Date();
start.setHours(0);
start.setMinutes(0);
start = new Date(start);

let end = new Date();
end.setHours(23);
end.setMinutes(0);
end = new Date(end);

function Categories() {
  // eslint-disable-next-line no-unused-vars
  const [endDate, setEndDate] = useState(end);
  // eslint-disable-next-line no-unused-vars
  const [startDate, setStartDate] = useState(start);
  const [aggregatedData, setAggregatedData] = useState([
    {
      price92: null,
      totalLiter: 0,
      totalSale: 0,
    },
    {
      price95: 0,
      totalLiter95: 0,
      totalSale95: 0,
    },
    {
      priceDiesel: 0,
      totalLiterDiesel: 0,
      totalSaleDiesel: 0,
    },
    {
      pricePDiesel: 0,
      totalLiterPDiesel: 0,
      totalSalePDiesel: 0,
    },
  ]);
  const user = useSelector((state) => state.login);
  const token = user.token;
  const stationId = user.stationId;

  const promise = useCategoriesHook(startDate, endDate, stationId, token);

  useEffect(() => {
    promise
      .then((data) => {
        if (data.length > 1) {
          setAggregatedData(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching aggregated data:", error);
      });
  }, [promise]);

  return (
    <div>
      <h3 className="mb-3 text-[20px] font-bold">Manager Dashboard</h3>
      <div className="flex gap-[20px]">
        <Category
          loading={aggregatedData[0].price92 === null ? true : false}
          todayPrice={Number(aggregatedData[0].price92?.toFixed(3))}
          todayTotal={Number(aggregatedData[0].totalSale?.toFixed(3))}
          todayLiter={Number(aggregatedData[0].totalLiter?.toFixed(3))}
          color="border-yellow-500"
          title="001-Octane Ron(92)"
          icon={<MdAttachMoney className="scale-[1.2] text-gray-700" />}
        />
        <Category
          loading={aggregatedData[0].price92 === null ? true : false}
          todayPrice={Number(aggregatedData[1].price95?.toFixed(3))}
          todayTotal={Number(aggregatedData[1].totalSale95?.toFixed(3))}
          todayLiter={Number(aggregatedData[1].totalLiter95?.toFixed(3))}
          color="border-green-500"
          title="002-Octane Ron(95)"
          icon={<MdAttachMoney className="scale-[1.2] text-gray-700" />}
        />
        <Category
          loading={aggregatedData[0].price92 === null ? true : false}
          todayPrice={Number(aggregatedData[2].priceDiesel?.toFixed(3))}
          todayTotal={Number(aggregatedData[2].totalSaleDiesel?.toFixed(3))}
          todayLiter={Number(aggregatedData[2].totalLiterDiesel?.toFixed(3))}
          color="border-purple-500"
          title="004-Diesel"
          icon={<MdAttachMoney className="scale-[1.2] text-gray-700" />}
        />
        <Category
          loading={aggregatedData[0].price92 === null ? true : false}
          todayPrice={Number(aggregatedData[3].pricePDiesel?.toFixed(3))}
          todayTotal={Number(aggregatedData[3].totalSalePDiesel?.toFixed(3))}
          todayLiter={Number(aggregatedData[3].totalLiterPDiesel?.toFixed(3))}
          color="border-blue-500"
          title="005-Premium Diesel"
          icon={<MdAttachMoney className="scale-[1.2] text-gray-700" />}
        />
      </div>
    </div>
  );
}

export default Categories;
