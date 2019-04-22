const request = require('request')
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (lat, lng, callback) => {
    const url = `https://api.darksky.net/forecast/5e71f789076648191b13139528f9cb81/${lat}, ${lng}`;
   request({url, json:true}, (error, {body}) => {
       if(error) {
           callback("unable to connect forecast web api", undefined);
       } else {
           callback(undefined,body.daily.data[0].summary+ " It is currently " + body.currently.temperature  +  " degrees out. There is "+ body.currently.precipProbability + "% chance of rain")
       }
   })
}

module.exports = forecast;