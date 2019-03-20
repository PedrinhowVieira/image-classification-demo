import React from 'react';
import renderer from 'react-test-renderer';

import Classification from '../../components/Classification';

describe('<Classification />', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Classification />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
