import { FETCH_CLIENTS_SUCCESS } from "./types"; 

export const fetchClients = url => {
  return dispatch => {
    fetch(url).then(res => {
      res.json().then(data => {
        dispatch({ type: FETCH_CLIENTS_SUCCESS, payload: data }); 
      });
    });
  };
};
