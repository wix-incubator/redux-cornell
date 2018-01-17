import { generateActions } from './actions';
import { generateSelectors } from './selectors';
import { generateSuperReducer } from './superReducer';
import { ISelectors, IState } from './types';

interface IConstructorOpts {
  initialState: IState;
}

export default class ReduxCornell {
  public superReducer;
  public actions;
  public selectors: ISelectors;
  private initialState: IState;

  constructor(opts: IConstructorOpts) {
    if (!opts.initialState) {
      throw new Error('Missing initialState in opts');
    }
    this.initialState = opts.initialState;

    this.initReducer();
    this.initSelectors();
    this.initActions();
  }

  private initReducer() {
    this.superReducer = generateSuperReducer(this.initialState);
  }

  private initSelectors() {
    this.selectors = generateSelectors(this.initialState);
  }

  private initActions() {
    this.actions = generateActions(this.initialState);
  }
}
