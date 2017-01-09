import axios from 'axios';
import xml2js from 'xml2js';



export function addTask(text) {
    return {
        type: 'ADD',
        payload: 1
    }
}

export function deleteTask(text) {
    return {
        type: 'DELETE',
        payload: text
    }
}

export function count(text) {
    return {
        type: 'ADD',
        payload: text
    }
}


// axios({
//     method: 'get',
//     url: `http://DOMAIN.rossko.ru/service/v1/GetSearch?wsdl`,
//     headers: {
//         KEY1: 'e65ea8905d03bf9e3d9c5a4c20fbe7b3',
//         KEY2: '022cba4dc62c0d01895f5138659ae72e',
//         TEXT: '333114'
//     }
//
// })
// .then(function (response) {
//     console.log(response.data);
// })
// var xml;
// axios({
//     method: 'post',
//     url: `http://ptkavto.ru/xmlprice.php?login=europautodz&password=DLi3lj&code=kl2`
// })
// .then(function (response) {
//     xml = response.data;
//     xml2js(xml, function (err, result) {
//         console.dir(result);
//     })
// })
