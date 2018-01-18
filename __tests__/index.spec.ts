import ReduxCornell, { IConstructorOpts } from '../src/index';

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
      const reduxCornell = new ReduxCornell(<IConstructorOpts> { initialState: null });
    }).toThrow('Missing initialState in opts');
  });

  describe('with state', () => {
    let reduxCornell: ReduxCornell;

    beforeEach(() => {
      reduxCornell = new ReduxCornell(initialState);
    });

    it('should have selectors', () => {
      expect(reduxCornell.selectors.getEpisodesData).toBeDefined();
    });

    it('should have actions', () => {
      expect(reduxCornell.actions.concatEpisodesData).toBeDefined();
    });

    it('should have the superReducer', () => {
      expect(reduxCornell.superReducer).toBeDefined();
    });
  });
});
