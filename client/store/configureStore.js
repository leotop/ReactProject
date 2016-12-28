import { createStore, applyMiddleware } from 'redux';
import combineReducers from '../reducers/index';
import Thunk from 'redux-thunk';



export default function configureStore(initialState) {
    const store = createStore(combineReducers, initialState, applyMiddleware(Thunk));
    return store
}
