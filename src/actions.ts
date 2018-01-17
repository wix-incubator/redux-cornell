import * as consts from './constants';
import { cameleize } from './utils';

interface IActionOpts {
  action: string;
  actions: { [key: string]: () => void };
  name: string;
  reducerKey: string;
  actionKey: string;
}

const buildAction = (actionType: string, reducerKey: string, actionKey: string) => (value?: any) => ({
  actionKey,
  actionType,
  reducerKey,
  type: consts.REDUX_CORNELL,
  value,
});

const buildActionName = (name: string, reducerKey: string, actionKey: string): string => (
  `${name}${cameleize([reducerKey, actionKey])}`
);

const addAction = (opts: IActionOpts) => {
  const { actions, name, reducerKey, actionKey, action } = opts;
  actions[buildActionName(name, reducerKey, actionKey)] =
  buildAction(action, reducerKey, actionKey);
};

export const generateActions = (initialState) => {
  const actions = {};

  Object.keys(initialState).forEach((reducerKey: string) => {
    Object.keys(initialState[reducerKey]).forEach((actionKey) => {
      const value = initialState[reducerKey][actionKey];
      if (typeof value === 'boolean') {
        addAction({ name: consts.TOGGLE, action: consts.TOGGLE_ACTION, reducerKey, actionKey, actions });
      } else if (Array.isArray(value)) {
        addAction({ name: consts.CONCAT, action: consts.CONCAT_ACTION, reducerKey, actionKey, actions });
      } else if (value !== null && typeof value === 'object') {
        addAction({ name: consts.EXTEND, action: consts.EXTEND_ACTION, reducerKey, actionKey, actions });
      }

      addAction({ name: consts.SET, action: consts.SET_ACTION, reducerKey, actionKey, actions });
      addAction({ name: consts.NULLIFY, action: consts.NULLIFY_ACTION, reducerKey, actionKey, actions });
    });
  });

  return actions;
};
