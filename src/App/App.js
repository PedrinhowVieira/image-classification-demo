import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, MemoryRouter, Route, Redirect } from "react-router-dom";
import { NoSsr, Grid } from '@material-ui/core/';
import { UpperBar, SearchBar, SideList } from './../imports'
import { Enhancement, Classification, Filename, Summary } from './../imports'
import { withGlobalState } from 'react-globally'

class App extends Component {
  render() {
    return (
      <Fragment>
        <NoSsr>
          <MemoryRouter initialEntries={['/enhancement']} initialIndex={0}>
            <Router>

              <UpperBar />

              <SearchBar />

              <Grid container item xs={12} spacing={8}>
                <Grid item xs={2}>

                  <SideList />

                </Grid>
                <Grid item xs={10}>
                  <Route exact path="/" render={() => (<Redirect to="/enhancement"/>)}/>
                  <Route path="(/enhancement)" component={Enhancement} />
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
}

export default withGlobalState(App);
