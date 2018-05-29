import { createStore, applyMiddleware, compose } from "redux";
// import promise from "redux-promise";
import thunk from "redux-thunk";
// import logger from "redux-logger";

import createHistory from "history/createBrowserHistory";
import { routerMiddleware } from "react-router-redux";

import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import rootReducer from "./reducers/rootReducer";

export const history = createHistory();

const intitialState = {};

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const middleware = applyMiddleware(
  routerMiddleware(history),
  thunk,
  // promise,
  // logger
);

const store = createStore(persistedReducer, intitialState, compose(middleware));

const persistor = persistStore(store);

// sessionService.initSessionService(store);

export default () => {
  return { store, persistor }
} 
