import { generateActions } from '../src/actions';
import { generateSuperReducer } from '../src/superReducer';

const initialState = {
  episodes: {
    data: [],
    expanded: {},
  },
  showInfo: {
    isVisible: false,
    something: null,
  },
};

const actions = generateActions(initialState);

describe('Super Reducer', () => {
  let superReducer;
  beforeEach(() => {
    superReducer = generateSuperReducer(initialState);
  });

  it('should return the initialState if none is provided', () => {
    expect(
      superReducer(undefined, actions.toggleShowInfoIsVisible()).showInfo.isVisible,
    ).toBe(true);
  });

  it('should toggle the isVisible', () => {
    expect(
      superReducer(initialState, actions.toggleShowInfoIsVisible()).showInfo.isVisible,
    ).toBe(true);
  });

  it('should nullify a value', () => {
    expect(
      superReducer(initialState, actions.nullifyShowInfoIsVisible()).showInfo.isVisible,
    ).toBeNull();
  });

  it('should set a value', () => {
    expect(
      superReducer(initialState, actions.setShowInfoSomething('123')).showInfo.something,
    ).toBe('123');
  });

  it('should concat data to the array', () => {
    expect(
      superReducer(initialState, actions.concatEpisodesData([1, 2])).episodes.data,
    ).toEqual([1, 2]);
  });

  it('should extend the object', () => {
    expect(
      superReducer(initialState, actions.extendEpisodesExpanded({ someId: true })).episodes.expanded,
    ).toEqual({ someId: true });
  });

  it('should retain the original object and extend it', () => {
    expect(
      superReducer(
        { ...initialState, episodes: { expanded: { anotherId: true } }},
        actions.extendEpisodesExpanded({ someId: true }),
      ).episodes.expanded,
    ).toEqual({ someId: true, anotherId: true });
  });

  it('should return the original state for other actions', () => {
    expect(
      superReducer(initialState, { type: 'ANOTHER_ACTION'}),
    ).toEqual(initialState);
  });
});
