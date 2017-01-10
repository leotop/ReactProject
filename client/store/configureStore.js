import { createStore, applyMiddleware } from 'redux';
import combineReducers from '../reducers/index';
import Thunk from 'redux-thunk';
import devToolsEnhancer from 'remote-redux-devtools';


export default function configureStore(initialState) {
    const store = createStore(combineReducers, initialState, applyMiddleware(Thunk), devToolsEnhancer());
    return store
}
