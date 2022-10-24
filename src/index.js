import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { EnvironmentProvider } from './Components/Context';

ReactDOM.render(
  <EnvironmentProvider>
    <App />
  </EnvironmentProvider>,
  document.getElementById('root')
);
