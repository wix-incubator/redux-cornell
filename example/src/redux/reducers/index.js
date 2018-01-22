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
    },
    currentUser: {
      name: null
    }
  }
});

const { selectors, actions, superReducer } = reduxCornell;
export { selectors, actions };

const rootReducer = combineReducers({ superReducer });

export default rootReducer;
