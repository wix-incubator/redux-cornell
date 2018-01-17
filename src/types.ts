export interface IState {
  [key: string]: any;
}

export interface ISelectors {
  [key: string]: () => any;
}
