import axios from 'axios';

let DataRow = '';

export function inputChange(event) {
    DataRow = event.target.value;
    return {
        type: 'INPUT_CHANGE',
        payload: event.target.value,
    }
}

export function SendRequest(text) {
    return dispatch => {
        // dispatch({
        //     type: 'PENDING_PARAMS',
        //     payload: text
        // })
        axios.get(`https://portal.moskvorechie.ru/portal.api?l=autodz&p=X95YNNdbOVZXHInSxitDTeWqYLLvotq0iMCfbsUjZqDVcsyJ5eRhtUcoLGBPcJEd&act=price_by_nr_firm&nr=${DataRow}&alt`)
            .then(response => {
                dispatch({
                    type: 'SEND_PARAMS',
                    payload: response.data.result
                })
            })
    }
}

export function addBasket(text) {
    return {
        type: 'ADD_BASKET',
        payload: text
    }
}

export function deleteProduct(id) {
    return {
        type: 'DELETE_PRODUCT',
        payload: id
    }
}

export function onlyOriginal(text) {
    return {
        type: 'ONLY_ORIGINAL',
        payload: text
    }
}
