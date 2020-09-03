import { applyMiddleware, compose, createStore } from 'redux';
import { createImmutableStateInvariantMiddleware } from '@reduxjs/toolkit';
import { createMigrate, persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import migrations from './migrations';
import rootReducer from './reducers/rootReducer';

const composeEnhancers =
  // eslint-disable-next-line no-underscore-dangle
  (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const logger = (store) => (next) => (action) => {
  // eslint-disable-next-line no-console
  console.log('dispatching', action);
  const result = next(action);
  // eslint-disable-next-line no-console
  console.log('next state', store.getState());
  return result;
};

const enhancers = composeEnhancers(
  applyMiddleware(createImmutableStateInvariantMiddleware(), logger)
);

export const STORE_VERSION = 0;
const persistConfig = {
  // add keys of reducers to ignore:
  blacklist: [],
  key: 'root',
  migrate: createMigrate(migrations),
  storage: AsyncStorage,
  version: STORE_VERSION,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const createPersistedStore = () => {
  const store = createStore(persistedReducer, {}, enhancers);
  const persistor = persistStore(store);
  return { persistor, store };
};

export default createPersistedStore;
