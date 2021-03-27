import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as ReactPhone } from '../stories/ReactPhone.stories';

describe('<ReactPhone />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReactPhone />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
