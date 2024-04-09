import { expect, test } from 'vitest'
import { makeFileName } from './index'

test('helloNpm', () => {
  expect(makeFileName()).toBe("")
})