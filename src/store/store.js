import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./sidebarSlice";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";
import searchReducer from "./searchSlice";

// persist store
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from "@reduxjs/toolkit";
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { encryptTransform } from 'redux-persist-transform-encrypt';

const persistConfig = {
  key: 'root',
  version : 1,
  storage,
  stateReconciler : autoMergeLevel2,
  transforms: [
    encryptTransform({
      secretKey: 'Arfin@050308',
      onError: function (error) {
        // Handle the error.
      },
    }),
  ],
}

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  category: categoryReducer,
  product: productReducer,
  cart: cartReducer,
  search: searchReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//   reducer: persistedReducer,
// });

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
