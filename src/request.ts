import { Axios } from 'axios'

const BASE_URL = 'http://dev.aoxqwl.com:4000'

const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxIiwic3ViIjoic3RhZmYtbG9naW4iLCJpc3MiOiJhcGktbWFuYWdlLWFkbWluIiwiZXhwIjoxNjkwNDIzODczLCJpYXQiOjE2OTAzMzc0NzN9.9hDTIwWo-4StDu8KJFp-yKQDURloU-gYwzgRERomG3s'

export function createRequest() {
  const axios = new Axios({ baseURL: BASE_URL })
  axios.interceptors.request.use((config) => {
    if (config.data) {
      config.data = JSON.stringify(config.data)
      config.headers['Content-Type'] = 'application/json'
      config.headers['Authorization'] = token
    }
    return config
  })
  axios.interceptors.response.use(
    (response) => {
      if (response.headers['content-type'] === 'application/json') {
        response.data = JSON.parse(response.data)
      }
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  return axios
}

export const request = createRequest()