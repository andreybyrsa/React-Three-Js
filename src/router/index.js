import React from 'react';
import App from '../App';

import { createHashRouter } from 'react-router-dom';

const router = createHashRouter([
  {
    path: '/',
    element: <App />
  },
]);

export default router;
