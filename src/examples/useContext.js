import React from 'react';
import Alert from './Alert/Alert';
import { AlertProvider } from './Alert/AlertContext';
import Main from './Main';

function Context() {
  return (
    <AlertProvider>
      <div className="container">
        <Alert />
        <Main toggle={() => {}} />
      </div>
    </AlertProvider>
  );
}

export default Context;
