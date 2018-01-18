import React, { Component } from 'react';
import './ShowInfo.css';

export default class ShowInfo extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="showInfo">
        <span>Actors: Winona Ryder, David Harbour, Finn Wolfhard, Millie Bobby Brown</span>
        <span>Genre: Drama, Fantasy, Horror</span>
        <span>
              Plot: In a small town where everyone knows everyone, a peculiar incident starts a
              chain of events that leads to the disappearance of a child - which begins to
              tear at the fabric of an otherwise peaceful community. Dark government agencies
              and seemingly malevolent supernatural forces converge on the town while a few
              locals begin to understand that there's more going on than meets the eye.
        </span>
      </div>
    );
  }
}
