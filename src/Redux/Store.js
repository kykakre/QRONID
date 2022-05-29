import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunkMiddleware from "redux-thunk";
import accountReducer from "./account-reducer";
import payReducer from "./pay-reducer";
let reducers = combineReducers({
  accountPage: accountReducer,
  payPage: payReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
window.store = store;
export default store;
