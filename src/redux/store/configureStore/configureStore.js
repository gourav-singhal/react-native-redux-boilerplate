import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../../reducers';

const logger = createLogger();

const createRNReduxStore = applyMiddleware(logger)(createStore);

const store = createRNReduxStore(rootReducer);

export default store;





