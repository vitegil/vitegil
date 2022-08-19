import http from '@/dao/http.config'

export const login = () => {
  return http.get('/login')
}
