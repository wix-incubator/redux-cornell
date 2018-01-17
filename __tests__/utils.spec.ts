import { cameleize, capitalize } from '../src/utils';

describe('Utils', () => {
  it('should capitalize a string', () => {
    expect(capitalize('something')).toBe('Something');
  });

  it('should cameleize an array of strings', () => {
    expect(cameleize(['episodes', 'data'])).toBe('EpisodesData');
  });
});
