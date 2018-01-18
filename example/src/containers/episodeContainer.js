import * as React from 'react';
import { connect } from 'react-redux'
import Episode from '../components/Episode/Episode';
import { selectors, actions } from '../redux/reducers';
import PropTypes from 'prop-types';

export class EpisodesContainer extends React.PureComponent {
  static propTypes = {
    extendEpisodesExpanded: PropTypes.func.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    season: PropTypes.number,
    name: PropTypes.string,
    released: PropTypes.instanceOf(Date),
    episode: PropTypes.number,
    rating: PropTypes.string
  }

  render() {
    return (
      <Episode {...this.props} />
    );
  }
}

const mapStateToProps = (state, { season, episode }) => {
  const id = `s${season}e${episode}`;
  return {
    isExpanded: !!selectors.getEpisodesExpanded(state)[id]
  }
};

const { extendEpisodesExpanded } = actions;

export default connect(mapStateToProps, { extendEpisodesExpanded })(EpisodesContainer);
