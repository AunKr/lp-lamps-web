import { httpservice } from '../../services/httpService'

export function addProduct(data) {
    console.log("data", data);
  return httpservice()
    .post('/product/create',data)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return error.response.data
    })
}