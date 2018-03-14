import { combineReducers } from 'redux';
import ReduxCornell from 'redux-cornell';

const { selectors, actions, superReducer } = reduxCornell({
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

export { selectors, actions };

const rootReducer = combineReducers({ superReducer });

export default rootReducer;
