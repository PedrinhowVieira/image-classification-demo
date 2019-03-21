import React, { Component, Fragment } from "react";
import { withGlobalState } from 'react-globally'
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core/'

class Summary extends Component {

  render() {
    return (
      <Fragment>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Attribute</TableCell>
                <TableCell>Selection</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Enhancement Method
                </TableCell>
                <TableCell>
                  {this.props.globalState.enhancement.data}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Document Classification
                </TableCell>
                <TableCell>
                  {this.props.globalState.classification.data}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Document File Name
                </TableCell>
                <TableCell>
                  {this.props.globalState.filename.data}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </Fragment>
    );
  }
}

export default withGlobalState(Summary);