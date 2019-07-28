
const request = require('request');

const geocode = (address, callback) => {
    const googleMapAPi = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=api key`;
        // console.log(googleMapAPi);
    
        request({url: googleMapAPi, json:true}, (err, {body}) => {
            if(err) {
               callback('unable to do request', undefined);
            } else {
                const lat = body.results[0].geometry.location.lat;
                const lng = body.results[0].geometry.location.lng;
                callback(undefined,{
                    lat: lat,
                    lng: lng,
                    address: address
                });
            }
        })
    }

    module.exports = geocode;
