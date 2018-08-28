const locationsJSON = require('./locations.json');
const axios = require('axios');

console.log(`Your locations array:\n\n${JSON.stringify(locationsJSON, null, 4)}\n\n`);

const headers = {
    'Host': 'api.traveltimeapp.com',
    'Content-type': 'application/json',
    'Accept': 'application/json',
    'X-Application-Id': '5b87c2d0',
    'X-Api-Key': 'c8d0dea14307481e1bc2baac40e16939'
}

const headersString = JSON.stringify(headers);

const body = JSON.stringify(locationsJSON);

const travelTimeURL = "https://api.traveltimeapp.com/v4/routes";

const options = {
    method: 'POST',
    headers: headers,
    data: body,
    url: travelTimeURL    
}


axios(options)
    .then((response) => console.log(`\n*** Response ***\n ${response}`))
    .catch((error) => console.log(`\n*** Error ***\n ${error}`))