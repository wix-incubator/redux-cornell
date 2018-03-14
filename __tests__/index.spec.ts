import reduxCornell, { IConstructorOpts } from '../src/index';

const initialState = {
  initialState: {
    episodes: {
      data: [],
    },
  },
};

describe('Redux Cornell', () => {
  it('should throw an error if initialState is not provided', () => {
    expect(() => {
      const cornell = reduxCornell(<IConstructorOpts> { initialState: null });
    }).toThrow('Missing initialState in opts');
  });

  describe('with state', () => {
    let cornell;

    beforeEach(() => {
      cornell = reduxCornell(initialState);
    });

    it('should have selectors', () => {
      expect(cornell.selectors.getEpisodesData).toBeDefined();
    });

    it('should have actions', () => {
      expect(cornell.actions.concatEpisodesData).toBeDefined();
    });

    it('should have the superReducer', () => {
      expect(cornell.superReducer).toBeDefined();
    });
  });
});
