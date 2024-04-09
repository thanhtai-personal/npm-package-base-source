
import { expect, test } from 'vitest';
import * as libFuncs from "./index";

test('Test exported hooks', () => {
  const { useSearch } = libFuncs;
  expect(typeof useSearch).toBe("function");
})