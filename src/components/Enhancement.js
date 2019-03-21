import React, { Component, Fragment } from "react";
import { Button } from '@material-ui/core/';
import { withGlobalState } from 'react-globally'

class Enhancement extends Component {
  cycleState = (props) => {
    this.props.setGlobalState({
      enhance: 1
    });
  }

  render() {
    return (
      <Fragment>
        <div>
          Global State {this.props.globalState.enhance}
        </div>
        <Button variant="contained" onClick={this.cycleState}>
          Set One
        </Button>
      </Fragment>
    );
  }
}

export default withGlobalState(Enhancement);