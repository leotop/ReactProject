import express from 'express';
import soap from 'soap';
import axios from 'axios';

const router = express.Router();

// soap.createClient('http://ixora-auto.ru/TestService?wsdl', function(err, client) {
//     console.log(err)
//     if(err) console.log(err)
//     else {
//         console.log(err)
//     }
// });

router.post('/', (req, res) => {
    // soap.createClient('http://DOMAIN.rossko.ru/service/v1/GetCheckoutDetails?wsdl', function(err, client) {
    //     console.log(err)
    //     if(err) res.send(err)
    //     else {
    //         res.send(client)
    //     }
    // });

})


export default router;




// axios({
//     method: 'post',
//     url: `http://ptkavto.ru/xmlprice.php?login=mylogin&password=mypassword&code=30292`,
//     headers: {
//         'Authorization': 'Basic ' + new Buffer('demin' + ':' + 'demin12345').toString('base64'),
//         'Accept': 'application/json',
//         'Content-type': 'application/json'
//     }
// })
// .then(function (response) {
//     console.log(response);
// })

// axios({
//     method: 'get',
//     url: `http://spb.part-kom.ru/engine/api/v3/search/parts`,
//     headers: {
//         'Authorization': 'Basic ' + new Buffer('demin' + ':' + 'demin12345').toString('base64'),
//         'Accept': 'application/json',
//         'Content-type': 'application/json'
//     }
// })
// .then(function (response) {
//     console.log(response);
// })
// .catch(function (error) {
//     console.log(error);
// });
// axios.post('`http://adeo.pro/pricedetals2.php', {
//     login: 'europautodz@mail.ru',
//     password: 'europautodz@mail.ru'
// })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (response) {
//     console.log(response);
//   })
