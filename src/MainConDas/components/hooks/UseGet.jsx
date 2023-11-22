import { useReducer } from "react";
import instance from "../../../axios";

const initialState = {
    data_get: [],
    loading_get: false,
    error_get: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'api-request':
            return { ...state, loading_get: true, error_get: null };
        case 'fetch-data':
            return { ...state, loading_get: false, data_get: action.payload };
        case 'error':
            return {
                ...state, loading_get: false,
                error_get: action.payload
            };
        default:
            return state;
    }
};

function UseGet() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getIt = (url, token) => {
        dispatch({ type: 'api-request' });
        instance.get(url, {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                dispatch({
                    type: 'fetch-data',
                    payload: res.data
                })
            })
            .catch((e) => {
                dispatch({ type: 'error', payload: e });
            });

    };
    return [state, getIt];
};

export default UseGet;