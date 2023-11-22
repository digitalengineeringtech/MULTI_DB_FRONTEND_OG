import  {useReducer } from 'react';
import instance from '../../../axios';

const initialState = {
  data_p_1: [],
  loading_p_1: false,
  error_p_1: null,
  };

const reducer = (state, action) => {
  switch (action.type) {
    case 'api-request':
      return { ...state, loading_p_1: true, error_p_1: null };
    case 'fetch-data':
      return { ...state, loading_p_1: false, data_p_1: action.payload };
    case 'error':
      return { ...state, loading_p_1: false, error_p_1: action.payload };
    default:
      return state;
  }
};

function UsePatch_1() {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const patchIt_1 = (url,payload, token) => {
     dispatch({ type: 'api-request' });
    instance
      .patch(url,payload, {
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

  return [state,patchIt_1];
};

export default UsePatch_1;
