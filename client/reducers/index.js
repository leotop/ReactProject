import { combineReducers } from 'redux';
import handlerapi from './handlerapi';
import product from './product';
import registrations from './registrations';

export default combineReducers({
    handlerapi,
    product,
    registrations
})
