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