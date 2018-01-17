import { buildName, generateSelectors } from '../src/selectors';

const state = {
  episodes: {
    data: [],
  },
  movies: {
    info: null,
  },
};

describe('Selectors', () => {
  it('should generate selectors for each reducer', () => {
    expect(Object.keys(generateSelectors(state))).toEqual(['getEpisodesData', 'getMoviesInfo']);
  });

  it('should get the data from the selector', () => {
    const { getEpisodesData } = generateSelectors(state);
    expect(getEpisodesData({ superReducer: state })).toEqual([]);
  });

  it('should ignore reducers without keys', () => {
    expect(generateSelectors({ actors: {} })).toEqual({});
  });
});
