import { request } from './request'

export function login(params: { username: string, passwd: string }) {
  return request.post('/axq/staffLogin', {}, { params })
}