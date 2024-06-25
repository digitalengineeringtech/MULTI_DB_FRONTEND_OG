import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios";

export const fetchDailySaleReports = createAsyncThunk(
  "dailySaleReports/kyawSan027",
  async (bomb) => {
    const token = bomb[0];
    const purposeofuse = bomb[1];
    const fuelType = bomb[2];
    const nozzleNo = bomb[3];
    const startDate = bomb[4];
    const endDate = bomb[5];
    const stationSelection = bomb[6];
    const accessDb = bomb[7];
    const cahserCode = bomb[8];

    // .toISOString().split('T')[0] + 'T00:00:00.000Z'
    // .toISOString().split('T')[0] + 'T23:59:59.999Z'

    let isoStartDate = startDate;
    let isoEndDate = endDate;

    const purposeofUseRoute =
      purposeofuse === "Please" ? "" : `&vehicleType=${purposeofuse}`;

    const fuelTypeRoute = fuelType === "Please" ? "" : `&fuelType=${fuelType}`;

    const nozzleNoRoute = nozzleNo === "Please" ? "" : `&nozzleNo=${nozzleNo}`;
    const casherRoute = cahserCode === null ? "" : `&casherCode=${cahserCode}`;

    const response = await instance.get(
      `/detail-sale/pagi/by-date/1?sDate=${isoStartDate}&eDate=${isoEndDate}${purposeofUseRoute}${fuelTypeRoute}${casherRoute}${nozzleNoRoute}&stationDetailId=${stationSelection.code}&accessDb=${accessDb}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      }
    );

    return response.data;
  }
);

export const fetchDailySaleReportPagination = createAsyncThunk(
  "dailySaleReportsPagination/kyawSan027",
  async (infos) => {
    const paginationNo = infos[0];
    const token = infos[1];
    const startDate = infos[2];
    const endDate = infos[3];
    const purposeofuse = infos[4];
    const fuelType = infos[5];
    const nozzleNo = infos[6];
    const stationSelection = infos[7];
    const accessDb = infos[8];

    let isoStartDate = startDate;
    let isoEndDate = endDate;

    const purposeofUseRoute =
      purposeofuse === "Please" ? "" : `&vehicleType=${purposeofuse}`;

    const fuelTypeRoute = fuelType === "Please" ? "" : `&fuelType=${fuelType}`;

    const nozzleNoRoute = nozzleNo === "Please" ? "" : `&nozzleNo=${nozzleNo}`;
    const accessDbRoute = accessDb ? `&accessDb=${accessDb}` : "";

    const response = await instance.get(
      `/detail-sale/pagi/by-date/${paginationNo}?sDate=${isoStartDate}&eDate=${isoEndDate}${purposeofUseRoute}${fuelTypeRoute}${nozzleNoRoute}&stationDetailId=${stationSelection.code}${accessDbRoute}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      }
    );

    return response.data;
  }
);

// export const fetchCus = createAsyncThunk(
//   "dailySaleReportsPagination/kyawSan027",
//   async (bomb) => {
//     const token = bomb[1];
//     const response = await instance.get(`/detail-sale`, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//         Authorization: "Bearer " + token,
//       },
//     });

//     return response.data;
//   }
// );

export const fetchDailySaleReportByTimeRange = createAsyncThunk(
  "dailySaleReportByTimeRange/kyawSan027",
  async (bomb) => {
    const token = bomb[0];
    const startDate = bomb[1];
    const endDate = bomb[2];
    const stationSelection = bomb[3];
    const accessDb = bomb[4];

    let isoStartDate = startDate;
    let isoEndDate = endDate;

    const response = await instance.get(
      `/detail-sale/by-date/?sDate=${isoStartDate}&eDate=${isoEndDate}&stationDetailId=${stationSelection.code}&accessDb=${accessDb}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      }
    );
    return response.data;
  }
);

export const fetchFuelBalanceByTimeRange = createAsyncThunk(
  "fuelBalanceByTimeRange/kyawSan027",
  async (bomb) => {
    const token = bomb[0];
    const startDate = bomb[1];
    const endDate = bomb[6];
    const stationSelection = bomb[2];
    const fuelType = bomb[3];
    const tankNo = bomb[4];
    const accessDb = bomb[5];

    const fuelTypeRoute =
      fuelType.code === "Please" ? "" : `&fuelType=${fuelType.code}`;
    const tankNoRoute =
      tankNo.code === "Please" ? "" : `&tankNo=${tankNo.code}`;
    const accessDbRoute = accessDb ? `&accessDb=${accessDb}` : ``;
    console.log("====================================");
    console.log(startDate, endDate);
    console.log("====================================");
    let isoStartDate = startDate.toLocaleDateString("fr-CA");
    let isoEndDate = endDate.toLocaleDateString("fr-CA");
    console.log(typeof isoStartDate, "this is iso date");
    const response = await instance.get(
      `/fuel-balance/pagi/1?sDate=${isoStartDate}&stationId=${stationSelection.code}${fuelTypeRoute}${tankNoRoute}${accessDbRoute}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      }
    );
    const { data } = await instance.get(
      `/fuel-balance/by-date?sDate=${startDate}&eDate=${endDate}&stationId=${stationSelection.code}${fuelTypeRoute}${tankNoRoute}${accessDbRoute}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(data);
    return data;
  }
);

export const fetchFuelInFilterData = createAsyncThunk(
  "fuelInReports/kyawSan027",
  async (bomb) => {
    const token = bomb[0];
    const startDate = bomb[1];
    const endDate = bomb[2];
    const tankNo = bomb[3];
    const fuelType = bomb[4];
    const stationSelection = bomb[5];
    const accessDb = bomb[6];

    let isoStartDate = startDate;
    let isoEndDate = endDate;

    const tankNoRoute =
      tankNo.code === "Please" ? "" : `&tankNo=${tankNo.code}`;
    const fuelTypeRoute =
      fuelType.code === "Please" ? "" : `&fuel_type=${fuelType.code}`;
    const accessDbRoute = accessDb ? `&accessDb=${accessDb}` : "";

    const response = await instance.get(
      `/fuelIn/pagi/by-date/1?sDate=${isoStartDate}&eDate=${isoEndDate}${tankNoRoute}${fuelTypeRoute}&stationId=${stationSelection.code}${accessDbRoute}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      }
    );

    return response.data;
  }
);

export const fetchFuelInFilterDataPagination = createAsyncThunk(
  "fuelInRepots/kyasSan027",
  async (bomb) => {
    const token = bomb[0];
    const startDate = bomb[1];
    const endDate = bomb[2];
    const tankNo = bomb[3];
    const fuelType = bomb[4];
    const stationSelection = bomb[5];
    const pageNo = bomb[6];
    const accessDb = bomb[7];

    let isoStartDate = startDate;
    let isoEndDate = endDate;

    const tankNoRoute =
      tankNo.code === "Please" ? "" : `&tankNo=${tankNo.code}`;
    const fuelTypeRoute =
      fuelType.code === "Please" ? "" : `&fuel_type=${fuelType.code}`;

    const accessDbRoute = accessDb ? `&accessDb=${accessDb}` : "";

    const response = await instance.get(
      `/fuelIn/pagi/by-date/1?sDate=${isoStartDate}&eDate=${isoEndDate}${tankNoRoute}${fuelTypeRoute}${accessDbRoute}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      }
    );

    return response.data;
  }
);

export const fetchDynamicNozzles = createAsyncThunk(
  "fuelNozzles/kyawSan027",
  async (bomb) => {
    const token = bomb[0];
    const startDate = bomb[1];
    const endDate = bomb[2];
    const selectedStation = bomb[3];
    const accessDb = bomb[4];
    const stationDetailId = selectedStation.code;

    let isoStartDate = startDate;
    let isoEndDate = endDate;

    console.log(isoEndDate, isoStartDate, "this is iso date");
    console.log(
      `/detail-sale/statement-report?sDate=${isoStartDate}&eDate=${isoEndDate}&stationDetailId=${stationDetailId}&accessDb=${accessDb}`
    );

    const response = await instance.get(
      `/detail-sale/statement-report?sDate=${isoStartDate}&eDate=${isoEndDate}&stationDetailId=${stationDetailId}&accessDb=${accessDb}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      }
    );

    return response.data;
  }
);

export const fetchATGTanks = createAsyncThunk(
  "atgTanks/kyawSan027",
  async (bomb) => {
    const token = bomb[0];
    const startDate = bomb[1];
    const selectedStation = bomb[3];

    const fuelType = bomb[4];
    const tankName = bomb[5];
    const stationDetailId = selectedStation.code;
    const accessDb = bomb[6];

    let dateObject = new Date(startDate);
    dateObject.setHours(23);
    dateObject.setMinutes(0);

    // Convert the date to the desired format "YYYY-MM-DD"
    const formattedDate = dateObject.toISOString().split("T")[0];

    const fuelTypeRoute = fuelType === "Please" ? "" : `&fuelType=${fuelType}`;
    const tankNoRoute = tankName === "Please" ? "" : `&tankNo=${tankName}`;
    const accessDbRoute = accessDb ? `&accessDb=${accessDb}` : "";

    const response = await instance.get(
      `/tank-data/by-date/1?dailyReportDate=${formattedDate}&stationDetailId=${stationDetailId}${accessDbRoute}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      }
    );

    return response.data;
  }
);

export const fetchStockBalance = createAsyncThunk(
  "stockBalance/kyawSan027",
  async (bomb) => {
    const token = bomb[0];
    const startDate = bomb[1];
    const endDate = bomb[2];
    const selectedStation = bomb[3];
    const fuelType = bomb[4];
    const pageNo = bomb[5];
    const accessDb = bomb[6];

    const stationDetailId = selectedStation.code;

    let isoStartDate = startDate;
    let isoEndDate = endDate;

    const fuelTypeRoute = fuelType === "Please" ? "" : `&tank=${fuelType}`;
    const accessDbRoute = accessDb ? `&accessDb=${accessDb}` : "";

    const response = await instance.get(
      `stock-balance/bydate/pagi/${pageNo}?sDate=${isoStartDate}&eDate=${isoEndDate}&stationId=${stationDetailId}${fuelTypeRoute}${accessDbRoute}`,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
        },
      }
    );
    return response.data;
  }
);

const initialState = {
  kyawSan027DailySaleReports: {},
};

const moviesSlice = createSlice({
  name: "kyawSan027DailySaleReports",
  initialState,
  reducers: {
    addDailySaleDatas: (state, { payload }) => {
      return (state.kyawsan027.daily_sale_report = payload);
    },
    removeOldDats: (state) => {
      state.kyawSan027DailySaleReports = {};
    },
  },
  extraReducers: {
    [fetchDailySaleReports.pending]: () => {},
    [fetchDailySaleReports.fulfilled]: (state, { payload }) => {
      return { ...state, kyawSan027DailySaleReports: payload };
    },
    [fetchDailySaleReports.rejected]: (state) => {
      return { ...state, kyawSan027DailySaleReports: "error" };
    },
    [fetchDailySaleReportPagination.pending]: () => {},
    [fetchDailySaleReportPagination.fulfilled]: (state, { payload }) => {
      return { ...state, kyawSan027DailySaleReports: payload };
    },
    [fetchDailySaleReportPagination.rejected]: (state, { payload }) => {
      return { ...state, kyawSan027DailySaleReports: payload };
    },
    [fetchDailySaleReportByTimeRange.pending]: () => {},
    [fetchDailySaleReportByTimeRange.fulfilled]: (state, { payload }) => {
      return { ...state, kyawSan027DailySaleReports: payload };
    },
    [fetchDailySaleReportByTimeRange.rejected]: (state, { payload }) => {
      return { ...state, kyawSan027DailySaleReports: payload };
    },
    [fetchFuelBalanceByTimeRange.pending]: () => {},
    [fetchFuelBalanceByTimeRange.fulfilled]: (state, { payload }) => {
      return { ...state, kyawSan027DailySaleReports: payload };
    },
    [fetchFuelBalanceByTimeRange.rejected]: (state, { payload }) => {
      return { ...state, kyawSan027DailySaleReports: payload };
    },
    [fetchFuelInFilterData.pending]: () => {},
    [fetchFuelInFilterData.fulfilled]: (state, { payload }) => {
      return { ...state, kyawSan027DailySaleReports: payload };
    },
    [fetchFuelInFilterData.rejected]: (state, { payload }) => {
      return { ...state, kyawSan027DailySaleReports: payload };
    },
    [fetchFuelInFilterDataPagination.pending]: () => {},
    [fetchFuelInFilterDataPagination.fulfilled]: (state, { payload }) => {
      return { ...state, kyawSan027DailySaleReports: payload };
    },
    [fetchFuelInFilterDataPagination.rejected]: (state, { payload }) => {
      return { ...state, kyawSan027DailySaleReports: payload };
    },
    [fetchDynamicNozzles.fulfilled]: (state, { payload }) => {
      return { ...state, kyawSan027DailySaleReports: payload };
    },
    [fetchDynamicNozzles.rejected]: (state, { payload }) => {
      return { ...state, kyawSan027DailySaleReports: payload };
    },
    [fetchATGTanks.pending]: () => {},
    [fetchATGTanks.fulfilled]: (state, { payload }) => {
      return { ...state, kyawSan027DailySaleReports: payload };
    },
    [fetchATGTanks.fulfilled]: (state, { payload }) => {
      return { ...state, kyawSan027DailySaleReports: payload };
    },
    [fetchStockBalance.pending]: () => {},
    [fetchStockBalance.fulfilled]: (state, { payload }) => {
      return { ...state, kyawSan027DailySaleReports: payload };
    },
  },
});

export const { addMovies, removeOldDats } = moviesSlice.actions;

export const getAllKyawSan027DailySaleReports = (state) =>
  state.kyawSan027DailySaleReports.kyawSan027DailySaleReports;
export const getAllDynamicNozzles = (state) =>
  state.kyawSan027DailySaleReports.fetchDynamicNozzles;

export default moviesSlice.reducer;
