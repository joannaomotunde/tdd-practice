import { describe, test, expect } from 'vitest'
import { subtract } from './subtract'

describe('subtract function', () => {
  test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3)
  })

  test('subtracts 2 - 5 to equal -3', () => {
    expect(subtract(2, 5)).toBe(-3)
  })
})
