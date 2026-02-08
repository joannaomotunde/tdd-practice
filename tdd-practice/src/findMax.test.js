import { describe, test, expect } from 'vitest'
import { findMax } from './findMax'

describe('findMax function', () => {
  test('finds max in [1, 5, 3]', () => {
    expect(findMax([1, 5, 3])).toBe(5)
  })

  test('finds max in [-10, -3, -7]', () => {
    expect(findMax([-10, -3, -7])).toBe(-3)
  })
})
