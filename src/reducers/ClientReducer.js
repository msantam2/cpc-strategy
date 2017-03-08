import { FETCH_CLIENTS_SUCCESS } from "../actions/types"; 

const INITIAL_STATE = []; 

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CLIENTS_SUCCESS:
      // action.payload is array of client objects [{client1}, {client2}, ...]
      return action.payload; 
    default:
      return state;   
  }
}; 
