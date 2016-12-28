import axios from 'axios';

const initialState = {
    text: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'REG_ACTIONS':
            alert(123)
            return {
                ...state
            }
        default:
            return state
    }
    return state
}
