import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Link, MemoryRouter } from "react-router-dom";
import { AppBar, Toolbar, Typography, Paper, InputBase, List, ListItem, ListItemText, Divider, Grid, NoSsr} from '@material-ui/core/';
import SearchIcon from '@material-ui/icons/Search';
import Canvas from './../components/Canvas'
import Canvas2 from './../components/Canvas2'
import Canvas3 from './../components/Canvas3'
import Canvas4 from './../components/Canvas4'

function SimpleAppBar() {
  return (
    <Fragment>
      <NoSsr>
        <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
          <Router>
            <AppBar position="static" color="default">
              <Toolbar>
                <Typography variant="h6" color="inherit">
                  Mobile Machine Learning Classification Tool
                </Typography>
              </Toolbar>
            </AppBar>

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

            <Paper elevation={1}>
              <Typography variant="h5" component="h3">
                Footer
              </Typography>
            </Paper>

          </Router>
        </MemoryRouter>
      </NoSsr>
    </Fragment>
  );
}



export default SimpleAppBar;