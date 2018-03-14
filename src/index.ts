import { generateActions } from './actions';
import { generateSelectors } from './selectors';
import { generateSuperReducer } from './superReducer';
import { ISelectors, IState } from './types';

export interface IConstructorOpts {
  initialState: IState;
}

const initReducer = (initialState: IState) => generateSuperReducer(initialState);

const initSelectors = (initialState: IState) => generateSelectors(initialState);

const initActions = (initialState: IState) => generateActions(initialState);

const reduxCornell = (opts: IConstructorOpts) => {
  if (!opts.initialState) {
    throw new Error('Missing initialState in opts');
  }

  const initialState: IState = opts.initialState;
  const superReducer = initReducer(initialState);
  const selectors: ISelectors = initSelectors(initialState);
  const actions = initActions(initialState);

  return {
    actions,
    selectors,
    superReducer,
  };
};

export default reduxCornell;
