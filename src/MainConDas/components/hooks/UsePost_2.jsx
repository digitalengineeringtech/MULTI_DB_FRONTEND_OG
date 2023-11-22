import  {useReducer } from 'react';
import instance from '../../../axios';

const initialState = {
  data_g_2: [],
  loading_g_2: false,
  error_g_2: null,
  };

const reducer = (state, action) => {
  switch (action.type) {
    case 'api-request':
      return { ...state, loading_g_2: true, error_g_2: null };
    case 'fetch-data':
      return { ...state, loading_g_2: false, data_g_2: action.payload };
    case 'error':
      return { ...state, loading_g_2: false, error_g_2: action.payload };
    default:
      return state;
  }
};

function UsePost_2() {
    const [state, dispatch] = useReducer(reducer, initialState);
  
  console.log("hello")
  
    const fetchIt_2 = (url, token) => {
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

  return [state,fetchIt_2];
};

export default UsePost_2;
