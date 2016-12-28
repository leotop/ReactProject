import axios from 'axios';


export function SendRequest(year) {

  return (dispatch) => {
    dispatch({
      type: 'PHOTOS_REQUEST',
      payload: year
    })

    setTimeout(() => {
      dispatch({
        type: 'PHOTOS_SUCCESS',
        payload: [1,2,3,4,5]
      })
    }, 1000)
  }
}

// export function SendRequest(year) {
//
//     return (dispatch) => {
//         dispatch({
//             type: 'PHOTOS_REQUEST',
//             payload: year
//         })
//
//         axios.get('https://portal.moskvorechie.ru/portal.api?l=autodz&p=X95YNNdbOVZXHInSxitDTeWqYLLvotq0iMCfbsUjZqDVcsyJ5eRhtUcoLGBPcJEd&act=price_by_nr_firm&nr=kl2&alt')
//             .then(response => {
//                 dispatch({
//                     type: 'PHOTOS_SUCCESS',
//                     payload: response.data.result
//                 })
//             })
//
//     }
// }

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
