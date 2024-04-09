
import { expect, test } from 'vitest';
import * as components from "./index";

test('Test exported components', () => {
  const { Movies } = components;
  expect(typeof Movies).toBe("function");
})