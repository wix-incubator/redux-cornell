import * as consts from './constants';
import { cameleize } from './utils';

interface IActionOpts {
  type: string;
  actions: { [key: string]: () => void };
  name: string;
  reducerKey: string;
  actionKey: string;
}

const buildAction = (type: string, reducerKey: string, actionKey: string) => (value?: any) => ({
  actionKey,
  reducerKey,
  type,
  value,
});

const buildActionName = (name: string, reducerKey: string, actionKey: string): string => (
  `${name}${cameleize([reducerKey, actionKey])}`
);

const addAction = (opts: IActionOpts) => {
  const { actions, name, reducerKey, actionKey, type } = opts;
  actions[buildActionName(name, reducerKey, actionKey)] =
  buildAction(type, reducerKey, actionKey);
};

export const generateActions = (initialState): { [key: string]: (value?: any) => object } => {
  const actions = {};

  Object.keys(initialState).forEach((reducerKey: string) => {
    Object.keys(initialState[reducerKey]).forEach((actionKey) => {
      const value = initialState[reducerKey][actionKey];
      if (typeof value === 'boolean') {
        addAction({ name: consts.TOGGLE, type: consts.TOGGLE_ACTION, reducerKey, actionKey, actions });
      } else if (Array.isArray(value)) {
        addAction({ name: consts.CONCAT, type: consts.CONCAT_ACTION, reducerKey, actionKey, actions });
      } else if (value !== null && typeof value === 'object') {
        addAction({ name: consts.EXTEND, type: consts.EXTEND_ACTION, reducerKey, actionKey, actions });
      }

      addAction({ name: consts.SET, type: consts.SET_ACTION, reducerKey, actionKey, actions });
      addAction({ name: consts.NULLIFY, type: consts.NULLIFY_ACTION, reducerKey, actionKey, actions });
    });
  });

  return actions;
};
