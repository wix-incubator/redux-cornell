import { generateActions } from '../src/actions';
import * as consts from '../src/constants';

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
        reducerKey: 'showInfo',
        type: consts.TOGGLE_ACTION,
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
        reducerKey: 'episodes',
        type: consts.CONCAT_ACTION,
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
        reducerKey: 'episodes',
        type: consts.EXTEND_ACTION,
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
        reducerKey: 'episodes',
        type: consts.SET_ACTION,
        value: {
          someNewValue: 123,
        },
      });
    });

    it('should generate the nullify action', () => {
      const { nullifyEpisodesExpanded } = generateActions(state);
      expect(nullifyEpisodesExpanded()).toEqual({
        actionKey: 'expanded',
        reducerKey: 'episodes',
        type: consts.NULLIFY_ACTION,
        value: undefined,
      });
    });

    it('should generate the override action', () => {
      const { overrideEpisodes } = generateActions(state);
      expect(overrideEpisodes({ something: 'amazing' })).toEqual({
        actionKey: '',
        reducerKey: 'episodes',
        type: consts.OVERRIDE_ACTION,
        value: {
          something: 'amazing',
        },
      });
    });
  });
});
