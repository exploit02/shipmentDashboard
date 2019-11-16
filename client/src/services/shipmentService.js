var axios = require('axios')
var ES6Promise = require('es6-promise')
ES6Promise.polyfill()

const ApiService = {

    post( apiurl,bodyFormData) {
        var config = {
            headers: {'Authorization': "Bearer tTU3gFVUdP"}
        };
        return axios.post(apiurl,bodyFormData, config)
        .then(response => {
            return response
          })
        .catch(err => {
          const res = {
              message : err.response.data.message,
              status : err.response.status
          }
          return res;
        
        })
    }
}

export const shipmentService = {

  shipmentData(userCredentials) {
    return ApiService.post( 'https://93870v1pgk.execute-api.ap-south-1.amazonaws.com/latest/shipments/mayank', userCredentials)
  }

}