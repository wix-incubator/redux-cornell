import { combineReducers } from 'redux';
import ReduxCornell from 'redux-cornell';

const reduxCornell = new ReduxCornell({
  initialState: {
    episodes: {
      loaded: false,
      data: [],
      expanded: {}
    },
    showInfo: {
      visible: false
    }
  }
});

const { selectors, actions } = reduxCornell;
export { selectors, actions };

const rootReducer = combineReducers({
  superReducer: reduxCornell.superReducer
});

export default rootReducer;
