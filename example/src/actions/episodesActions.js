import * as imdb from 'imdb-api';
import { actions } from '../redux/reducers';

const showId = 'tt4574334';
const apiKey = 'your_own_omdb_key';

export const fetchStrangerThings = () => (dispatch) => {
  imdb.getById(showId, { apiKey }).then(results => {
    results.episodes().then(episodes => {
      dispatch(actions.concatEpisodesData(episodes));
    })
  });
}
