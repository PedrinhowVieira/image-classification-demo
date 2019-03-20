import React, { Component, Fragment } from "react";
import { List, ListItem, ListItemText, Divider } from '@material-ui/core/';
import { Link } from "react-router-dom";

class SideList extends Component {
  render() {
    return (
      <Fragment>
        <List component="nav">
          <ListItem button component={Link} to={"/enhancement"}>
            <ListItemText primary="Enhancement Method" />
          </ListItem>
          <ListItem button component={Link} to={"/classification"}>
            <ListItemText primary="Document Type" />
          </ListItem>
          <ListItem button component={Link} to={"/filename"}>
            <ListItemText primary="Document Title" />
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

export default SideList;