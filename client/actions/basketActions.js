import axios from 'axios';

export function addBasket(text) {
    localStorage.setItem('basket');

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
