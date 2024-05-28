import { configureStore, Tuple, combineReducers  } from "@reduxjs/toolkit";
import counterSlice from "../reducerSlices/boxSlice";
import boxSlice from "../reducerSlices/boxSlice";
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
const persistConfig = {
    key: 'root',
    storage,
  }
  const rootReducer = combineReducers({ 
    counter: counterSlice,
    box: boxSlice,
  })
  const persistedReducer = persistReducer(persistConfig, rootReducer)  

export const store = configureStore ({
    reducer: persistedReducer
    middleware: () => new Tuple( logger),

})
export const persistor = persistStore(store)