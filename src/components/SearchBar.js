import React, { Component } from "react";
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1,
    elevation: 0,
  },
  grow: {
    flexGrow: 1,
  },
};

class SearchBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit">
              path search ID
          </Typography>
            <SearchIcon />
            <InputBase
              placeholder="Search…"
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(SearchBar);
