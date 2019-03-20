import React, { Fragment } from 'react';
import { BrowserRouter as Router, MemoryRouter, Route } from "react-router-dom";
import { NoSsr, Grid } from '@material-ui/core/';
import { UpperBar, SearchBar, SideList } from './../imports'
import { Enhancement, Classification, Filename, Summary } from './../imports'

function App() {
  return (
    <Fragment>
      <NoSsr>
        <MemoryRouter initialEntries={['/enhancement']} initialIndex={0}>
          <Router>

            <UpperBar />

            <SearchBar />

            <Grid container spacing={12}>
              <Grid item sm={2}>

                <SideList />

              </Grid>
              <Grid item sm={10}>
                <Route path="(/|/enhancement)" component={Enhancement} />
                <Route path="/classification" component={Classification} />
                <Route path="/filename" component={Filename} />
                <Route path="/summary" component={Summary} />
              </Grid>
            </Grid>
          </Router>
        </MemoryRouter>
      </NoSsr>
    </Fragment>
  );
}



export default App;
