import React, { Component } from "react";
import { AppBar, Toolbar, Typography, InputBase } from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';

class SearchBar extends Component {
  render() {
    return (
      <AppBar position="static" color="default" style={{boxShadow: '0 4px 2px -2px gray'}}>
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
    );
  }
}

export default SearchBar;
