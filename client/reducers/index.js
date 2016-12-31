import { combineReducers } from 'redux';
import handlerapi from './handlerapi';
import product from './product';
import registrations from './registrations';
import authorization from './authorizations';

export default combineReducers({
    handlerapi,
    product,
    registrations,
    authorization
})
