export const Interseptor = {
    requestHandler (request) {
      return request
    },
    errorHandler (error) {
      if (error && error.response.status === 401) {
        localStorage.removeItem('userData')
        return Promise.reject({ ...error })
      } else {
        return Promise.reject({ ...error })
      }
    },
    successHandler (response) {
      if (response && response.status === 401) {
        //unauthorized code. logout and move to login.
        localStorage.removeItem('userData')
        return response
      } else {
        return response
      }
    }
  }