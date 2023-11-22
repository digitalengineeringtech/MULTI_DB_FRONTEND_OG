import  {useReducer } from 'react';
import instance from '../../../axios';

const initialState = {
  data_p_11: [],
  loading_p_11: false,
  error_p_11: null,
  };

const reducer = (state, action) => {
  switch (action.type) {
    case 'api-request':
      return { ...state, loading_p_11: true, error_p_11: null };
    case 'fetch-data':
      return { ...state, loading_p_11: false, data_p_11: action.payload };
    case 'error':
      return { ...state, loading_p_11: false, error_p_11: action.payload };
    default:
      return state;
  }
};

function UsePost_11() {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const fetchIt_11 = (url,body, token) => {
     dispatch({ type: 'api-request' });
    instance
      .post(url,body, {
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

  return [state,fetchIt_11];
};

export default UsePost_11;
