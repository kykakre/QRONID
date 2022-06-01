import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunkMiddleware from "redux-thunk";
import accountReducer from "./account-reducer";
import payReducer from "./pay-reducer";
import messageReducer from "./mesage-reducer";
let reducers = combineReducers({
  accountPage: accountReducer,
  payPage: payReducer,
  message: messageReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
window.store = store;
export default store;
