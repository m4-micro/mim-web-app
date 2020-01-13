import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

class Copyright extends Component {
  render() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://m4micro.edu.com/">
          M4Micro.edu.com
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    )
  }
}


export default Copyright;