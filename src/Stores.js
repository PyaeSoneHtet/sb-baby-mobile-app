import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import rootReducer from "./ducks";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["cart"],
};

const pReducer = persistReducer(persistConfig, combineReducers(rootReducer));

const store = createStore(pReducer);
const persistor = persistStore(store);
export { persistor, store };
