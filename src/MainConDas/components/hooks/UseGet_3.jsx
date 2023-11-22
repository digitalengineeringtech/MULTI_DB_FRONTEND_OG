import { useReducer } from "react";
import instance from "../../../axios";

const initialState = {
    data_get_3: [],
    loading_get_3: false,
    error_get_3: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'api-request':
            return { ...state, loading_get_3: true, error_get_3: null };
        case 'fetch-data':
            return { ...state, loading_get_3: false, data_get_3: action.payload };
        case 'error':
            return {
                ...state, loading_get_3: false,
                error_get_3: action.payload
            };
        default:
            return state;
    }
};

function UseGet_3() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getIt_3 = (url, token) => {
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
    return [state, getIt_3];
};

export default UseGet_3;