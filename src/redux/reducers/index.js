import { combineReducers } from "@reduxjs/toolkit";
import catalog from "./catalog_slice";
import reciepe from "./reciepe_slice";
import meal from "./meal_slice";

export default combineReducers({
  catalog,
  reciepe,
  meal,
});
