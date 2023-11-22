import  {useReducer } from 'react';
import instance from '../../../axios';

const initialState = {
  data_g_3: [],
  loading_g_3: false,
  error_g_3: null,
  };

const reducer = (state, action) => {
  switch (action.type) {
    case 'api-request':
      return { ...state, loading_g_3: true, error_g_3: null };
    case 'fetch-data':
      return { ...state, loading_g_3: false, data_g_3: action.payload };
    case 'error':
      return { ...state, loading_g_3: false, error_g_3: action.payload };
    default:
      return state;
  }
};

function UsePost_3() {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const fetchIt_3 = (url, token) => {
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

  return [state,fetchIt_3];
};

export default UsePost_3;
