import axios from 'axios';

const initialState = {
    text: '',
    array: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state
            }
        case 'INPUT_CHANGE':
            return {
                ...state, text: action.payload
            }
        case 'PENDING_PARAMS':
            console.log('pending')
            return {
                ...state
            }
        case 'SEND_PARAMS':
            return {
                ...state, array: action.payload
            }
            // .then(response => {
            //     let Jstring = JSON.stringify(response.data.result.filter((item) => {
        	// 		if(item.delivery !== 'не известно' && item.stock !== '-') {
        	// 			return item
        	// 		}
        	// 	}))
            //     sessionStorage.setItem('products', Jstring );
            // })
            // axios({
            //     method: 'get',
            //     url: `http://www.part-kom.ru/engine/api/v2/search/parts?number=${state.text}`,
            //     headers: {
            //         'Authorization': 'Basic ' + new Buffer('demin' + ':' + 'demin12345').toString('base64'),
            //     }
            // })
            // .then(response => {
            //     console.log(Session.set('products2', response.data));
            // })
            // return {
            //     ...state
            // }

        case 'ONLY_ORIGINAL':
            // axios({
            //     method: 'get',
            //     url: `https://portal.moskvorechie.ru/portal.api?l=autodz&p=X95YNNdbOVZXHInSxitDTeWqYLLvotq0iMCfbsUjZqDVcsyJ5eRhtUcoLGBPcJEd&act=price_by_nr_firm&nr=${state.text}&alt`
            // })
            // .then(response => {
            //     // Session.set('products', response.data.result.filter((item) => {
            //     //     if(item.nr === state.text.toUpperCase()) {
            //     //         return item
            //     //     }
            //     // }))
            // })
        case 'DELETE':
            console.log('delete')
            return {
                ...state
            }
        default:
            return state
    }
    return state
}


// axios({
//     method: 'post',
//     url: `http://ws.armtek.ru/api/ws_order/createTestOrder?format=json`,
//     headers: {
//         'Authorization': 'Basic ' + new Buffer('web@autodz.ru' + ':' + '142536').toString('base64')
//     }
// })
// .then(response => {
//     console.log(response);
// })
