// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import {BASE_URL} from '../Constans/Data'

// our "constructor"
const create = (baseURL = BASE_URL) => {
  // ------
  // STEP 1
  // ------
  //
  // Create and configure an apisauce-based api object.
  //
  const api = apisauce.create({
    // base URL is read from the "constructor"
    baseURL,
    // here are some default headers
    headers: {
      'Cache-Control': 'no-cache'
    },
    // 10 second timeout...
    timeout: 10000
  })
  const getPopular = param => api.get('movie/popular', param);

  return {
    // a list of the API functions from step 2
    getPopular,

  }
}

// let's return back our create method as the default.
export default {
  create
}
