import React, { PureComponent } from 'react';
import './App.css';
import EpisodesContainer from '../../containers/episodesContainer';
import PropTypes from 'prop-types';
import Toggle from '../Toggle/Toggle';
import ShowInfo from '../ShowInfo/ShowInfo';

class App extends PureComponent {
  static propTypes = {
    showInfoVisible: PropTypes.bool.isRequired,
    toggleShowInfoVisible: PropTypes.func.isRequired
  }

  renderContent() {
    if (this.props.showInfoVisible) {
      return <ShowInfo />;
    }

    return <EpisodesContainer />;
  }

  render() {
    const { showInfoVisible, toggleShowInfoVisible } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img
            className="logoImage"
            alt="logo"
            src="https://raw.githubusercontent.com/eyaleizenberg/imdb_list/master/docs/static/stranger_things_logo.png"
          />
        </header>
        <div className="toggleTextContainer">
          <span className="toggleText">Toggle info/episodes</span>
          <Toggle active={showInfoVisible} onClick={toggleShowInfoVisible} />
        </div>
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
