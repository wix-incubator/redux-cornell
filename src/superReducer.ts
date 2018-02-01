import * as consts from './constants';

export const generateSuperReducer = (initialState) => (state = initialState, action) => {
  switch (action.type) {
    case consts.TOGGLE_ACTION:
      const toggleValue = !state[action.reducerKey][action.actionKey];
      const toggleState = { ...state[action.reducerKey], [action.actionKey]: toggleValue };
      return { ...state, [action.reducerKey]: toggleState };
    case consts.NULLIFY_ACTION:
      const nullState = { ...state[action.reducerKey], [action.actionKey]: null };
      return { ...state, [action.reducerKey]: nullState };
    case consts.SET_ACTION:
      const valueState = { ...state[action.reducerKey], [action.actionKey]: action.value };
      return { ...state, [action.reducerKey]: valueState };
    case consts.CONCAT_ACTION:
      const concatValue = state[action.reducerKey][action.actionKey].concat(action.value);
      const concatState = { ...state[action.reducerKey], [action.actionKey]: concatValue };
      return { ...state, [action.reducerKey]: concatState };
    case consts.EXTEND_ACTION:
      const key = Object.keys(action.value)[0];
      const extendValue = { ...state[action.reducerKey][action.actionKey], [key]: action.value[key] };
      const extendState = { ...state[action.reducerKey], [action.actionKey]: extendValue };
      return { ...state, [action.reducerKey]: extendState };
    case consts.OVERRIDE_ACTION:
      return { ...state, [action.reducerKey]: action.value };
    default:
      return state;
  }
};
