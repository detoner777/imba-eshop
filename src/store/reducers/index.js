import toastReducer from "./toastReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import productDetailsReducer from "./productDetailsReducer";
import headerReducer from "./headerReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  toastReducer,
  productsReducer,
  productDetailsReducer,
  cartReducer,
  headerReducer,
});

export default rootReducer;
