import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const configureStore = (state = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer(),
    state,
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
