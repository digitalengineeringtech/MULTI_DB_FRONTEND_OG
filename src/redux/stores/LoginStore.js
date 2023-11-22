import { configureStore } from "@reduxjs/toolkit";
import LoginSliceReducer from '../slices/LoginSlice'
import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist';
import { combineReducers } from "@reduxjs/toolkit";
import kyawSan027DailySaleReports from '../slices/KyawSan027Slice';


const persistConfig = {
    key: 'root',
    version: 1,
    storage
};

const reducer = combineReducers({
    login: LoginSliceReducer,
    kyawSan027DailySaleReports:kyawSan027DailySaleReports
});

const persistedReducer = persistReducer(persistConfig, reducer);

export default configureStore({
    reducer: persistedReducer
})