import { describe, test, expect } from 'vitest'
import { multiply } from './multiply'

describe('multiply function', () => {
  test('multiplies 3 * 4 to equal 12', () => {
    expect(multiply(3, 4)).toBe(12)
  })

  test('multiplies 5 * 0 to equal 0', () => {
    expect(multiply(5, 0)).toBe(0)
  })
})
