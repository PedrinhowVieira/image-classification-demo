import React, { Component } from "react";
import { FormControl, InputGroup } from 'react-bootstrap';

class IdSelector extends Component {
  render() {
    return (
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon3">
            https://image-classification-tool.com/path/id:78544954/
            </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
    );
  }
}

export default IdSelector;
