import { describe, expect, it } from 'vitest';

import { one, two } from '../src/index';

describe('pixdown', () => {
  it('exports starter values', () => {
    expect(one + two).toBe(3);
  });
});
