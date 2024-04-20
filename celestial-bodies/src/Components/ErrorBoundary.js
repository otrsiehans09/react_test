

import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import App from './App';

function Root() {
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}

export default Root;

