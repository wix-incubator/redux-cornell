import * as imdb from 'imdb-api';
import { actions } from '../redux/reducers';

const showId = 'tt4574334';
const apiKey = '409cb9e';

export const fetchStrangerThings = () => (dispatch) => {
  imdb.getById(showId, { apiKey }).then(results => {
    results.episodes().then(episodes => {
      dispatch(actions.concatEpisodesData(episodes));
    })
  });
}
