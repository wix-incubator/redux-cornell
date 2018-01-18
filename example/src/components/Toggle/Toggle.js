import React, { PureComponent } from 'react';
import './Toggle.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Toggle extends PureComponent {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
  }

  render() {
    const { onClick, active } = this.props;

    return (
      <div onClick={onClick} className="toggleContainer">
        <div className={classnames('toggle', { active: active })} />
      </div>
    )
  }
}
