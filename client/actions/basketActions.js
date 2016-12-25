export function addBasket(text) {
    return {
        type: 'ADD_BASKET',
        payload: text
    }
}

export function inputChange(event) {
    return {
        type: 'INPUT_CHANGE',
        payload: event.target.value,
    }
}

export function sendParams(text) {
    return {
        type: 'SEND_PARAMS',
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
