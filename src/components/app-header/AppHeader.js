import React, { Component, Fragment } from 'react';


import Navigator from '../navigator/Navigator'

class AppHeader extends Component {
  render() {
    return (
      <Fragment>
        <Navigator />
        <div>
          {this.props.children}
        </div>
      </Fragment>
    )
  }
}

export default AppHeader;