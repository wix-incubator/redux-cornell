import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Episodes.css';
import EpisodeContainer from '../../containers/episodeContainer';

export default class Episodes extends PureComponent {
  static propTypes = {
    episodes: PropTypes.array.isRequired
  }

  renderEpisodes() {
    const { episodes } = this.props;

    if (episodes.length) {
      return episodes.map(episode => <EpisodeContainer key={`s${episode.season}e${episode.episode}`} { ...episode} />);
    }

    return <span>Fetching episodes...</span>;
  }

  render() {
    return(
      <div className="episodesContainer">
        {this.renderEpisodes()}
      </div>
    );
  }
}
