import React, { Component, Fragment } from "react";
import { List, ListItem, ListItemText, Divider } from '@material-ui/core/';
import { Link } from "react-router-dom";

class SideList extends Component {
  render() {
    return (
      <Fragment>
        <List component="nav">
          <ListItem button component={Link} to={"/enchancement"}>
            <ListItemText primary="Enhancement Method" />
          </ListItem>
          <ListItem button component={Link} to={"/type"}>
            <ListItemText primary="Document Type" />
          </ListItem>
          <ListItem button component={Link} to={"/title"}>
            <ListItemText primary="Document Title" />
          </ListItem>
          <ListItem button component={Link} to={"/receipt"}>
            <ListItemText primary="Receipt" />
          </ListItem>
        </List>
        <Divider />
        <List component="nav">
          <ListItem button >
            <ListItemText primary="Summary" />
          </ListItem>
        </List>
      </Fragment>
    );
  }
}

export default SideList;