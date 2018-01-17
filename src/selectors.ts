import { ISelectors, IState } from './types';
import { cameleize } from './utils';

const buildName = (reducerKey: string, selectorKey: string): string => (
  `get${cameleize([reducerKey, selectorKey])}`
);

export const generateSelectors = (initialState: IState): ISelectors => {
  const selectors = {};

  Object.keys(initialState).forEach((reducerKey: string) => {
    Object.keys(initialState[reducerKey]).forEach((selectorKey) => {
      selectors[buildName(reducerKey, selectorKey)] = (state: IState) => (
        state.superReducer[reducerKey][selectorKey]
      );
    });
  });

  return selectors;
};
