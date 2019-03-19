import React, { Fragment } from 'react';
import { BrowserRouter as Router, MemoryRouter, Route } from "react-router-dom";
import { NoSsr, Grid } from '@material-ui/core/';
import { UpperBar, SearchBar, SideList } from './../imports'
import { Canvas, Canvas2, Canvas3, Canvas4 } from './../imports'

function SimpleAppBar() {
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
                <Route path="/enchancement" component={Canvas} />
                <Route path="/type" component={Canvas2} />
                <Route path="/title" component={Canvas3} />
                <Route path="/receipt" component={Canvas4} />
              </Grid>
            </Grid>
          </Router>
        </MemoryRouter>
      </NoSsr>
    </Fragment>
  );
}



export default SimpleAppBar;
