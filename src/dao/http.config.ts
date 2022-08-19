import axios from 'axios'

const instance = axios.create({})

instance.interceptors.request.use(config => {
  return config
})

instance.interceptors.response.use(response => {
  return response
})

export default instance
