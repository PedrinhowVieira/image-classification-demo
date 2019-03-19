import React, { Fragment } from 'react';
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import { Typography, Paper, NoSsr } from '@material-ui/core/';
import { UpperBar, SearchBar, SideList } from './../imports'

function SimpleAppBar() {
  return (
    <Fragment>
      <NoSsr>
        <MemoryRouter initialEntries={['/enhancement']} initialIndex={0}>
          <Router>

            <UpperBar />

            <SearchBar />

            <SideList />

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
