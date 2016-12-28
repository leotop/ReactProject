import axios from 'axios';



const initialState = {
    text: '',
    fetching: false,
    product: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'PHOTOS_REQUEST':
            return {
                ...state
            }
        case 'PHOTOS_SUCCESS':
            console.log('opa')
            // state.product = action.payload
            return {
                ...state, product: action.payload
            }
        default:
            return state
    }
    return state
}
