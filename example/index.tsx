import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactPhone } from '../.';

const App = () => {
  return (
    <div>
      <ReactPhone />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
