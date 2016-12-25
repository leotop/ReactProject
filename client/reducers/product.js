import axios from 'axios';

const initialState = {
    text: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BASKET':
            Meteor.call('addTasks', {
                cost: parseInt(action.payload.price),
                brand: action.payload.brand,
                nr: action.payload.nr.replace(/\s/g,""),
                name: action.payload.name,
                delivery: action.payload.delivery.replace('на складе','1 день'),
                upd: action.payload.upd,
                stock: action.payload.stock,
                stateText: state.text,
                userName: Meteor.userId()
            })
            return {
                ...state
            }
        case 'DELETE_PRODUCT':
            Meteor.call('delete', action.payload)
            return state
        default:
            return state
    }
    return state
}
