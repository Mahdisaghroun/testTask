import {applyMiddleware, createStore, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';

import appReducer from './reducers/appReducer';
import rootSaga from './sagas/saga';

const bindMiddleware = middleware => {
  return applyMiddleware(...middleware);
};

const rootReducer = combineReducers({
  app: appReducer,
});
function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware]),
    {trace: true},
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
