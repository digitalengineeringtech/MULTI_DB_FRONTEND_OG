import  {useReducer } from 'react';
import instance from '../../../axios';

const initialState = {
  data_g_11: [],
  loading_g_11: false,
  error_g_11: null,
  };

const reducer = (state, action) => {
  switch (action.type) {
    case 'api-request':
      return { ...state, loading_g_11: true, error_g_11: null };
    case 'fetch-data':
      return { ...state, loading_g_11: false, data_g_11: action.payload };
    case 'error':
      return { ...state, loading_g_11: false, error_g_11: action.payload };
    default:
      return state;
  }
};

function UseGet_11() {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const fetchIt_G_11 = (url,name, token) => {
     dispatch({ type: 'api-request' });
    instance
      .get(url, {
       headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'multipart/form-data'
          },
      params:{accessDb:name},
      })
      .then((res) => {
        dispatch({ type: 'fetch-data', payload: res.data });
      })
      .catch((e) => {
        dispatch({ type: 'error', payload: e });
      });
  };

  return [state,fetchIt_G_11];
};

export default UseGet_11;
