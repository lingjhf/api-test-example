import { describe, expect, it } from 'vitest'
import { sum } from './api'

describe('userApi', () => {
  it('add1', () => {
    expect(sum(1, 1)).toBe(2)
  })
  it('add2', () => {
    expect(sum(1, 2)).toBe(3)
  })
})

