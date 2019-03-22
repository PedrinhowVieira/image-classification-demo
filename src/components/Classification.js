import React, { Component, Fragment } from "react";
import { Button, Grid } from '@material-ui/core/';
import { withGlobalState } from 'react-globally'
import { withRouter } from 'react-router-dom';

class Classification extends Component {
  changeState = (i) => {
    if (this.props.globalState.classification.done ? this.props.history.push("/summary") : this.props.history.push("/filename"));
    this.props.setGlobalState({
      classification: {
        done: true,
        data: [i],
      }
    });
  }

  render() {
    return (
      <Fragment>
        <div>
          Global State {this.props.globalState.classification.data}
        </div>
        <Grid container spacing={8}>
          <Grid container item xs={12} spacing={8}>
            <Grid item xs={6}>
              <Button variant="contained" onClick={() => this.changeState(1)}>
                <img src={require('./../Images/gallery2.jpg')} height="300rem" width="600rem" alt="" />
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" onClick={() => this.changeState(2)}>
                <img src={require('./../Images/gallery2.jpg')} height="300rem" width="600rem" alt="" />
              </Button>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={8}>
            <Grid item xs={6}>
              <Button variant="contained" onClick={() => this.changeState(3)}>
                <img src={require('./../Images/gallery2.jpg')} height="300rem" width="600rem" alt="" />
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" onClick={() => this.changeState(4)}>
                <img src={require('./../Images/gallery2.jpg')} height="300rem" width="600rem" alt="" />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default withRouter(withGlobalState(Classification));