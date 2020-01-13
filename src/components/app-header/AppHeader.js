import React, { Component, Fragment } from 'react';


import Home from './../home/Home'

class AppHeader extends Component {
  render() {
    return (
      <Fragment>
        <Home />
        <div>
          {this.props.children}
        </div>
      </Fragment>
    )
  }
}

export default AppHeader;