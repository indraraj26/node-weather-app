
// const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if(!address) {
    console.log('Please provide address to find the weather condition')
} else {
    geocode(process.argv[2], (error, data) => {
        if(error) {
           return console.log(error);
        } 
         forecast(data.lat, data.lng, (error, data) => {
                if(error) {
                  return console.log(error);
                } else {
                    console.log(data);
                }
              })
    })
}

