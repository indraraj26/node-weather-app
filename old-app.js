const request = require('request');

// const url = 'https://api.darksky.net/forecast/5e71f789076648191b13139528f9cb81/37.8267,-122.4233?lang=en';

// request({url:url}, (error, response) => {
//     const data = JSON.parse(response.body);
//    console.log(data.currently);
// })


const googleMapAPi = 'https://maps.googleapis.com/maps/api/geocode/json?address=spain&key=AIzaSyCSIFuXPQXel1splGkx5ElXoU1bL60Jn-I';

request({url: googleMapAPi, json: true}, (err, response) => {
    if(response) {
        const lat = response.body.results[0].geometry.location.lat;
        const lng = response.body.results[0].geometry.location.lng;
        console.log(lat, lng)
        const url = `https://api.darksky.net/forecast/5e71f789076648191b13139528f9cb81/${lat}, ${lng}`;
        request({url:url, json:true}, (error, response) => {
            //  console.log(response.body.currently)
            if(error) {
               console.log('Unable to connect weather web service, try again later', error)
            } else {
                console.log(response.body.daily.data[0].summary+ " It is currently " + response.body.currently.temperature  +  " degrees out. There is "+ response.body.currently.precipProbability + "% chance of rain")
            }
    })
    
    } else {
        console.log("unable to get lat long", err)
    }

  // console.log(response.body.results[0].geometry.location)
})