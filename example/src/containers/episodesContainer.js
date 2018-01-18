import * as React from 'react';
import { connect } from 'react-redux'
import Episodes from '../components/Episodes/Episodes';
import { selectors } from '../redux/reducers';
import { fetchStrangerThings } from '../actions/episodesActions';
import PropTypes from 'prop-types';

export class EpisodesContainer extends React.PureComponent {
  static propTypes = {
    episodes: PropTypes.array.isRequired
  }

  render() {
    return (
      <Episodes episodes={this.props.episodes} />
    );
  }
}

const mapStateToProps = (state) => ({
  episodes: selectors.getEpisodesData(state)
});

export default connect(mapStateToProps, { fetchStrangerThings })(EpisodesContainer);
