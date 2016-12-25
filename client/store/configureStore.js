import { createStore, applyMiddleware } from 'redux';
import combineReducers from '../reducers/index';



export default function configureStore(initialState) {
    const store = createStore(combineReducers, initialState);
    return store
}
