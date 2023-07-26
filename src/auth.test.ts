import { describe, expect, it } from 'vitest'
import { login } from './auth'

describe('authApi', () => {
  it('登录接口', async () => {
    const response = await login({ username: 'axq_admin', passwd: '123456' })
    expect(response.status).toBe(200)
    expect(response.data.errCode, response.data.errMsg).toBe(0)
    expect(response.data.data, '获取token失败').not.toBeNull()
  })
})

