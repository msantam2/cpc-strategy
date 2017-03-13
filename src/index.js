import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux"; 
import { Provider } from "react-redux"; 
import ReduxThunk from "redux-thunk"; 
import injectTapEventPlugin from "react-tap-event-plugin"; // for material-ui
import masterReducer from "./reducers"; 
import AppRouter from "./components/App/AppRouter";

injectTapEventPlugin(); 

const store = createStore(
  masterReducer, 
  {}, 
  applyMiddleware(ReduxThunk)
); 

ReactDOM.render(
  <Provider store={store}><AppRouter /></Provider>,
  document.getElementById("root")
);
