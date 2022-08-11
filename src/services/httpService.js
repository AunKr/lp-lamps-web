import { Interseptor } from './interseptor'
import { constants } from '../constants/constant'
import axios from 'axios'

const instanceUrl = axios.create({
  baseURL: constants.API_URL,
  transformRequest: [
    function (data, headers) {
      let userData = localStorage.getItem('userData')
      const token = JSON.parse(userData)?.token
      if (userData) {
        if (token) {
          headers.Authorization = 'Bearer ' + token
        }
      } else if (token) {
        headers.Authorization = 'Bearer ' + token
      }
      return JSON.stringify(data)
    }
  ],
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache'
  }
})

const instanceUrlWithMultipart = axios.create({
  baseURL: constants.API_URL,
  transformRequest: [
    function (data, headers) {
      const userData = JSON.parse(localStorage.getItem('userData'))
      if (userData) {
        if (userData.sessiontoken) {
          headers.Authorization = 'Bearer ' + userData.sessiontoken
        }
      }
      return data
    }
  ],
  headers: {
    'Content-Type': 'multipart/form-data',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache'
  }
})

/**
 * httpservice for get and post json formatted data
 * @returns {*}
 */
export const httpservice = () => {
  instanceUrl.interceptors.request.use(request => Interseptor.requestHandler(request))
  instanceUrl.interceptors.response.use(
    response => Interseptor.successHandler(response),
    error => Interseptor.errorHandler(error)
  )
  return instanceUrl
}

/**
 * httpserviceWithMultipart for sending form data
 * @returns {*}
 */
export const httpserviceWithMultipart = () => {
  instanceUrlWithMultipart.interceptors.request.use(request => Interseptor.requestHandler(request))
  instanceUrlWithMultipart.interceptors.response.use(
    response => Interseptor.successHandler(response),
    error => Interseptor.errorHandler(error)
  )
  return instanceUrlWithMultipart
}



