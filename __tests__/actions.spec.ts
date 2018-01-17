import { generateActions } from '../src/actions';

const state = {
  episodes: {
    data: [],
    expanded: {},
  },
  showInfo: {
    isVisible: false,
  },
};

describe('Actions', () => {
  describe('toggle action', () => {
    it('should generate the toggle action for a boolean', () => {
      const { toggleShowInfoIsVisible } = generateActions(state);
      expect(toggleShowInfoIsVisible()).toEqual({
        actionKey: 'isVisible',
        actionType: 'TOGGLE_ACTION',
        reducerKey: 'showInfo',
        type: 'REDUX_CORNELL',
        value: undefined,
      });
    });

    it('should generate the set and nullify actions', () => {
      const { setShowInfoIsVisible, nullifyShowInfoIsVisible } = generateActions(state);
      expect(setShowInfoIsVisible).toBeDefined();
      expect(nullifyShowInfoIsVisible).toBeDefined();
    });
  });

  describe('array actions', () => {
    it('should generate the concat action', () => {
      const { concatEpisodesData } = generateActions(state);
      expect(concatEpisodesData([123])).toEqual({
        actionKey: 'data',
        actionType: 'CONCAT_ACTION',
        reducerKey: 'episodes',
        type: 'REDUX_CORNELL',
        value: [123],
      });
    });

    it('should generate the set and nullify actions', () => {
      const { setEpisodesData, nullifyEpisodesData } = generateActions(state);
      expect(setEpisodesData).toBeDefined();
      expect(nullifyEpisodesData).toBeDefined();
    });
  });

  describe('object actions', () => {
    it('should generate the concat action', () => {
      const { extendEpisodesExpanded } = generateActions(state);
      expect(extendEpisodesExpanded({ something: true })).toEqual({
        actionKey: 'expanded',
        actionType: 'EXTEND_ACTION',
        reducerKey: 'episodes',
        type: 'REDUX_CORNELL',
        value: {
          something: true,
        },
      });
    });

    it('should generate the set and nullify actions', () => {
      const { setEpisodesExpanded, nullifyEpisodesExpanded } = generateActions(state);
      expect(setEpisodesExpanded).toBeDefined();
      expect(nullifyEpisodesExpanded).toBeDefined();
    });
  });

  describe('set and nullify actions', () => {
    it('should generate the set action', () => {
      const { setEpisodesExpanded } = generateActions(state);
      expect(setEpisodesExpanded({ someNewValue: 123 })).toEqual({
        actionKey: 'expanded',
        actionType: 'SET_ACTION',
        reducerKey: 'episodes',
        type: 'REDUX_CORNELL',
        value: {
          someNewValue: 123,
        },
      });
    });

    it('should generate the nullify action', () => {
      const { nullifyEpisodesExpanded } = generateActions(state);
      expect(nullifyEpisodesExpanded()).toEqual({
        actionKey: 'expanded',
        actionType: 'NULLIFY_ACTION',
        reducerKey: 'episodes',
        type: 'REDUX_CORNELL',
        value: undefined,
      });
    });
  });
});
