import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Episode.css';
import { idBuilder } from '../../utils/idBuilder';
import classnames from 'classnames';

export default class Episode extends PureComponent {
  static propTypes = {
    extendEpisodesExpanded: PropTypes.func.isRequired,
    isExpanded: PropTypes.bool.isRequired,
    season: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    released: PropTypes.instanceOf(Date).isRequired,
    episode: PropTypes.number.isRequired,
    rating: PropTypes.string.isRequired
  }

  releaseDate() {
    const { released } = this.props;
    return `Release Date: ${released.getDate()}/${released.getMonth()}/${released.getFullYear()}`
  }

  onClick = () => {
    const { extendEpisodesExpanded, season, episode, isExpanded } = this.props;
    extendEpisodesExpanded({ [idBuilder(season, episode)]: !isExpanded });
  }

  render() {
    const { season, name, episode, rating, isExpanded } = this.props;

    return(
      <div className={classnames('episodeContainer', { expanded: isExpanded })} onClick={this.onClick}>
        <div>
          <div className="episodeName">{name}</div>
        </div>
        <div className="episodeDetails">
          <span>{`Season ${season} - Episode ${episode}`}</span>
          <span>{this.releaseDate()}</span>
          <span>{`Rating: ${rating}`}</span>
        </div>
        <div className={classnames('triangle', { rotated: isExpanded })} />
      </div>
    );
  }
}
