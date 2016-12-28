import axios from 'axios';

export function getPhotos(year) {

    return (dispatch) => {
        dispatch({
            type: 'PHOTOS_REQUEST',
            payload: year
        })

        axios.get('https://portal.moskvorechie.ru/portal.api?l=autodz&p=X95YNNdbOVZXHInSxitDTeWqYLLvotq0iMCfbsUjZqDVcsyJ5eRhtUcoLGBPcJEd&act=price_by_nr_firm&nr=kl2&alt')
            .then(response => {
                dispatch({
                    type: 'PHOTOS_SUCCESS',
                    payload: response.data.result
                })
            })

    }
}
