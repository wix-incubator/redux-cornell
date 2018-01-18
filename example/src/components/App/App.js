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
          <div className="logo">
            <img alt="logo" src="https://avatanplus.com/files/resources/mid/58388321334b21589cc039ba.png" />
          </div>
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
