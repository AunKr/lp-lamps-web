import { httpservice } from '../../services/httpService'

export function login(data) {
  return httpservice()
    .post('/auth/login',data)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return error.response.data
    })
}

export function register(data) {
  return httpservice()
    .post('/auth/register',data)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return error.response.data
    })
}

export async function sendMail(data) {
  return await httpservice()
    .post('/auth/enquiry', data)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return error.response.data
    })
}