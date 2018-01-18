import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../redux/reducers';

export const configureStore = (initialState = {}) => {
  const middleware = composeWithDevTools(applyMiddleware(thunk));
  return createStore(reducer, initialState, middleware);
}
