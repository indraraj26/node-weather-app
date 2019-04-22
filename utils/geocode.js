
const request = require('request');

const geocode = (address, callback) => {
    const googleMapAPi = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCSIFuXPQXel1splGkx5ElXoU1bL60Jn-I`;
        // console.log(googleMapAPi);
    
        request({url: googleMapAPi, json:true}, (err, response) => {
            if(err) {
               callback('unable to do request', undefined);
            } else {
                const lat = response.body.results[0].geometry.location.lat;
                const lng = response.body.results[0].geometry.location.lng;
                callback(undefined,{
                    lat: lat,
                    lng: lng,
                    address: address
                });
            }
        })
    }

    module.exports = geocode;
