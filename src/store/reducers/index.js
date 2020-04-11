import { combineReducers } from "redux";

import toastReducer from "./toastReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import productDetailsReducer from "./productDetailsReducer";

const rootReducer = combineReducers({
  toastReducer,
  productsReducer,
  productDetailsReducer,
  cartReducer,
});

export default rootReducer;
