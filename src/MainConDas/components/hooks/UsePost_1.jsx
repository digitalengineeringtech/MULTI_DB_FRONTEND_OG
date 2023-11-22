import  {useReducer } from 'react';
import instance from '../../../axios';

const initialState = {
  data_g_1: [],
  loading_g_1: false,
  error_g_1: null,
  };

const reducer = (state, action) => {
  switch (action.type) {
    case 'api-request':
      return { ...state, loading_g_1: true, error_g_1: null };
    case 'fetch-data':
      return { ...state, loading_g_1: false, data_g_1: action.payload };
    case 'error':
      return { ...state, loading_g_1: false, error_g_1: action.payload };
    default:
      return state;
  }
};

function UsePost_1() {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const fetchIt_1 = (url, token) => {
     dispatch({ type: 'api-request' });
    instance
      .get(url, {
       headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'multipart/form-data'
    }
      })
      .then((res) => {
        dispatch({ type: 'fetch-data', payload: res.data });
      })
      .catch((e) => {
        dispatch({ type: 'error', payload: e });
      });
  };

  return [state,fetchIt_1];
};

export default UsePost_1;
