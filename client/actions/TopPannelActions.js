import axios from 'axios';



let DataRow = '';


function moskvorechie() {
    return axios.get(`https://portal.moskvorechie.ru/portal.api?l=autodz&p=X95YNNdbOVZXHInSxitDTeWqYLLvotq0iMCfbsUjZqDVcsyJ5eRhtUcoLGBPcJEd&act=price_by_nr_firm&nr=${DataRow}&alt`)
}

function PartKom() {
    return axios({
        method: 'get',
        url: `http://www.part-kom.ru/engine/api/v1/search/parts?number=${DataRow}?`,
            headers: {
                'Authorization': 'Basic ' + new Buffer('demin' + ':' + 'demin12345').toString('base64'),
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }

    })
}

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
        axios.all([
            moskvorechie(),
            PartKom()
        ])
        .then(axios.spread(function (acct, perms) {
            dispatch({
                type: 'SEND_PARAMS',
                payload: acct.data.result.filter((item) => {
                    if(item.delivery !== 'не известно' && item.stock !== '-') {
                        return item
                    }
                }),
                partKom: perms.data
            })
        }))

    }
}

export function onlyOriginal(text) {
    return {
        type: 'ONLY_ORIGINAL',
        payload: text
    }
}

export function logoutHandler(text) {
    return {
        type: 'LOGOUT_HANDLER',
        payload: text
    }
}
