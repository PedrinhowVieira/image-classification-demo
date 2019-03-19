import React, { Component } from "react";
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core/';
import AccountCircle from '@material-ui/icons/AccountCircle';

class UpperBar extends Component {
  render() {
    return (
      <AppBar position="static" color="default">
        <Toolbar>
          <img src={require('./../Images/logo.png')} width="40px" height="40px" alt="" />
          <Typography variant="h6" color="inherit">
            Mobile Machine Learning Classification Tool
          </Typography>
          <IconButton>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }
}

export default UpperBar;
