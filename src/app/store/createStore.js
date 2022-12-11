import { combineReducers, configureStore } from "@reduxjs/toolkit";
import navigateMenuReducer from "./slices/navigateMenu";
import categoryReducer from "./slices/category";
import collectionCategoryReducer from "./slices/collectionCategory";
import productReducer from "./slices/product";

const rootReducer = combineReducers({
  navigateMenu: navigateMenuReducer,
  category: categoryReducer,
  collectionCategory: collectionCategoryReducer,
  product: productReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
