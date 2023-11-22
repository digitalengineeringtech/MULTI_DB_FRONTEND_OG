import  {useReducer } from 'react';
import instance from '../../../axios';

const initialState = {
  data_g: [],
  loading_g: false,
  error_g: null,
  };

const reducer = (state, action) => {
  switch (action.type) {
    case 'api-request':
      return { ...state, loading_g: true, error_g: null };
    case 'fetch-data':
      return { ...state, loading_g: false, data_g: action.payload };
    case 'error':
      return { ...state, loading_g: false, error_g: action.payload };
    default:
      return state;
  }
};

function UsePost() {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const fetchIt = (url, token) => {
        
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

  return [state,fetchIt];
};

export default UsePost;
