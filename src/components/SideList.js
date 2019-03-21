import React, { Component, Fragment } from "react";
import { List, ListItem, ListItemText, Divider, Checkbox } from '@material-ui/core/';
import { Link } from "react-router-dom";
import { withGlobalState } from 'react-globally'

class SideList extends Component {
  render() {
    return (
      <Fragment>
        <List component="nav">
          <ListItem button component={Link} to={"/enhancement"}>
            <Checkbox
              checked={this.props.globalState.enhancement.done}
              tabIndex={-1}
              disableRipple
            />
            <ListItemText primary="Enhancement Method" />
          </ListItem>
          <ListItem button component={Link} to={"/classification"}>
            <ListItemText primary="Document Classification" />
          </ListItem>
          <ListItem button component={Link} to={"/filename"}>
            <ListItemText primary="Document File Name" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <ListItem button component={Link} to={"/summary"}>
            <ListItemText primary="Summary" />
          </ListItem>
        </List>
      </Fragment>
    );
  }
}

export default withGlobalState(SideList);