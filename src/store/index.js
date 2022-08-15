import { combineReducers, createStore as createReduxStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducer as app } from './app/reducer';
import appSagas from './app/sagas';

const reducers = combineReducers({
    app,
});

function* rootSagaWatch() {
    yield* appSagas();
}

export const createStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const enhancer = applyMiddleware(sagaMiddleware);
    const store = createReduxStore(reducers, composeWithDevTools(enhancer));
    sagaMiddleware.run(rootSagaWatch);
    return store;
};