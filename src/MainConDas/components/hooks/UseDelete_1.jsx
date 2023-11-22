import { useReducer } from "react";
import instance from "../../../axios";

const initialState = {
    data_de_1: [],
    loading_de_1: false,
    error_de_1: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'api-request':
            return { ...state, loading_de_1: true, error_de_1: null };
        case 'fetch-data':
            return { ...state, loading_de_1: false, data_de_1: action.payload };
        case 'error':
            return {
                ...state, loading_de_1: false,
                error_de_1: action.payload
            };
        default:
            return state;
    }
};

function UseDelete_1() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const detIt_1 = (url, token) => {
        dispatch({ type: 'api-request' });
        instance.delete(url, {
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
    return [state, detIt_1];
};

export default UseDelete_1;