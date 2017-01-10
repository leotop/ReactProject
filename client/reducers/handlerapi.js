import axios from 'axios';

const initialState = {
    text: '',
    arrayMoskvorechie: [],
    arrayPartKom: []
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
                ...state,
                    arrayMoskvorechie: action.payload,
                    arrayPartKom: action.partKom
            }
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


// let body = `<?xml version="1.0" encoding="UTF-8" ?>
//             <message>
//                 <param>
//                     <action>price</action>
//                     <login>europautodz</login>
//                     <password>u32CgV</password>
//                     <code>351974070000</code>
//                     <brand>MAGNETI MARELLI</brand>
//                     <crosses>disallow</crosses>
//                 </param>
//             </message>`;

// axios({
//     method: 'post',
//     url: `http://adeo.pro/pricedetals2.php?login=europautodz?password=u32CgV`,
//     headers: {
//         'Content-type': 'text/xml',
//
//     }
// })
// .then(response => {
//     console.log(response.data);
// })

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
