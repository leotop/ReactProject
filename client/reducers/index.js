import { combineReducers } from 'redux';
import handlerapi from './handlerapi';
import product from './product';

export default combineReducers({
    handlerapi,
    product
})
