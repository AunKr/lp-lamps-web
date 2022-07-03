import { httpservice } from '../../services/httpService'

export function addProduct(data) {
    const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
  return httpservice()
    .post('/product/create',data)
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return error.response.data
    })
}

export async function getProducts() {
  return await httpservice()
    .get('/product/get')
    .then(function (response) {
      return response.data
    })
    .catch(function (error) {
      return error.response.data
    })
}