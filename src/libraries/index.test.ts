
import { expect, test } from 'vitest';
import * as libFuncs from "./index";

test('Test exported utils', () => {
  const { makeFileName } = libFuncs;
  expect(typeof makeFileName).toBe("function");
})