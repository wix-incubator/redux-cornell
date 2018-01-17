import { capitalize } from '../src/utils';

describe('Utils', () => {
  it('should capitalize a string', () => {
    expect(capitalize('something')).toBe('Something');
  });
});
