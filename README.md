# Redux Cornell [![Build Status](https://travis-ci.org/wix/redux-cornell.svg?branch=master)](https://travis-ci.org/wix/redux-cornell)
**Dedicated to Chris Cornell R.I.P**

A Redux library which lets you remove most of the boilerplate associated with writing a Redux application, yet allows you to customize it completely without loosing control.

## How does it work?
The library receives an initial state and generates actions, selectors and a super reducer which does all the heavy lifting for you so you can focus on the most important thing - your app.

## Installation
`npm install --save redux-cornell`

## Initializing the reduxCornell class
Before creating your root reducer, initialize the reduxCornell class with your initial state:
```javascript
// `src/redux/reducers/index.js`

// import the ReduxCornell class
import ReduxCornell from 'redux-cornell';
import { combineReducers } from 'redux';

// The class expects an object with the `initialState` key.
// In this example 'episodes' and 'showInfo' will become the "reducers".
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

// You will get default actions and selectors (covered below).
// Export them so they are available across your app.
const { selectors, actions } = reduxCornell;
export { selectors, actions };

// Add the superReducer to your rootReducer`
const rootReducer = combineReducers({
  superReducer: reduxCornell.superReducer
});

// Export the rootReducer like you usually do.
export default rootReducer;
```

## Selectors
The selectors are automatically generated from the initialState. They are built in the following format:

`get<Reducer><Property>`

The selectors accept only one parameter - the state.

So from the initialState in our example, we will get the following selectors:

```javascript
getEpisodesLoaded
getEpisodesData
getEpisodesExpanded
getShowInfoVisible
```

Then, in your mapStateToProps you can use them like this:

```javascript
import { selectors } from '../redux/reducers';

const mapStateToProps = (state) => ({
  episodes: selectors.getEpisodesData(state)
});
```

## Actions
The actions are automatically generated from the initialState. Redux Cornell will analyze your initialState and generate actions according to the property's initial value.

#### Boolean
If the property's initial value is a boolean you will get an action in the following format: `toggle<Reducer><Property>`

So in our example, you will get:
```javascript
toggleEpisodesLoaded
toggleShowInfoVisible
```

These actions don't receive any parameters as they toggle the boolean back and forth.

#### Array
If the property's initial value is an array, you will get an action in the following format: `concat<Reducer><Property>`

So in our example, you will get:

```javascript
concatEpisodesData
```

These actions accept an array as a parameter and will concat it to the state.

#### Object
If the property's initial value is an object, you will get an action in the following format: `extend<Reducer><Property>`

So in our example, you will get:

```javascript
extendEpisodesExpanded
```

These actions accept an object as a parameter and will extend the state with it.

#### Set & Nullify actions
In addition to the actions mentioned above, each property will also generate an action for setting and nullifying the property's value in case you need to overwrite things. They will be in the following format: `set<Reducer><Property>` and `nullify<Reducer><Property>`

So in our example, you will get:

```javascript
setEpisodesLoaded
nullifyEpisodesLoaded
setEpisodesData
nullifyEpisodesData
setEpisodesExpanded
nullifyEpisodesExpanded
setShowInfoVisible
nullifyShowInfoVisible
```

The set actions receive one parameter - the value which you want to set for that property. The nullify actions don't receive any value.

In your app you can use the action as you would with "regular" Redux action:

```javascript
// Map directly if you are using thunk
import { actions } from '../redux/reducers';
const { extendEpisodesExpanded } = actions;

...

export default connect(mapStateToProps, { extendEpisodesExpanded })(EpisodesContainer);


// OR using bindActionCreators
import { bindActionCreators } from 'redux'

const mapDispatchToProps = (dispatch) => ({
  extendEpisodesExpanded: bindActionCreators(extendEpisodesExpanded, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(EpisodesContainer);

// OR us the dispatch as a prop in your component

onClick() {
  this.props.dispatch(extendEpisodesExpanded({ something: true }));
}
```

If you need to do something like fetching data from the server, you can fetch the data and then call one of the actions which were generated. Here is an example of using Redux Thunk to fetch a show and then it's episodes and finally dispatch the `concatEpisodesData` action with the data when everything is complete:

```javascript
// container
import { fetchEpisodes } from '../actions/episodeFetcher';

export default connect(mapStateToProps, { fetchEpisodes })(EpisodesContainer);


// episodesFetcher
import * as imdb from 'imdb-api';
import { actions } from '../redux/reducers';

const showId = 'tt4574334'; // the "Stranger Things" show id on imdb
const apiKey = 'your_omdb_token'; // an OMDB token

export const fetchEpisodes = () => (dispatch) => {
  imdb.getById(showId, { apiKey }).then(results => {
    results.episodes().then(episodes => {
      dispatch(actions.concatEpisodesData(episodes));
    })
  });
}
```

### Reducers
None needed! The super reducer takes care of everything for you! 😎

### Full Working Example
In the example directory you have a fully working example which fetches the "Stranger Things" episode list from imdb. You can also toggle between the episode list or show's info and you can expand/collapse each episode to see more information. The example covers toggle, concat and extend actions.

In the `episodesActions.js` file, add your OMDB token. You can generate one here: https://www.omdbapi.com/apikey.aspx

### Feedback
Found a bug? Have a suggestion? Open an issue on Github.
Like it? Show some love on Twitter @EyalEizenberg and @WixEng ❤️
