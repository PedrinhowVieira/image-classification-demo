import React, { Component, Fragment } from "react";
import { Button, Grid } from '@material-ui/core/';
import { withGlobalState } from 'react-globally'

class Enhancement extends Component {
  cycleState = (i) => {
    this.props.setGlobalState({
      enhancement: {
        done: true,
        data: [i],
      }
    });
  }

  render() {
    return (
      <Fragment>
        <div>
          Global State {this.props.globalState.enhancement.data}
          Global Done {this.props.globalState.enhancement.done}
        </div>
        <Grid container spacing={8}>
          <Grid container item xs={12} spacing={8}>
            <Grid item xs={6}>
              <Button variant="contained" onClick={() => this.cycleState(1)}>
                <img src={require('./../Images/gallery.jpg')} height="300rem" width="600rem" alt="" />
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" onClick={() => this.cycleState(2)}>
                <img src={require('./../Images/gallery.jpg')} height="300rem" width="600rem" alt="" />
              </Button>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={8}>
            <Grid item xs={6}>
              <Button variant="contained" onClick={() => this.cycleState(3)}>
                <img src={require('./../Images/gallery.jpg')} height="300rem" width="600rem" alt="" />
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" onClick={() => this.cycleState(4)}>
                <img src={require('./../Images/gallery.jpg')} height="300rem" width="600rem" alt="" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withGlobalState(Enhancement);