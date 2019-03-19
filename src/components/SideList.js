import React, { Component } from "react";
import { List, ListItem, ListItemText, Divider, Grid } from '@material-ui/core/';
import { Route, Link } from "react-router-dom";
import { Canvas, Canvas2, Canvas3, Canvas4 } from './../imports'

class SideList extends Component {
  render() {
    return (
      <Grid container spacing={12}>
        <Grid item sm={2}>
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
        </Grid>
        <Grid item sm={10}>
          <Route path="/enchancement" component={Canvas} />
          <Route path="/type" component={Canvas2} />
          <Route path="/title" component={Canvas3} />
          <Route path="/receipt" component={Canvas4} />
        </Grid>
      </Grid>
    );
  }
}

export default SideList;