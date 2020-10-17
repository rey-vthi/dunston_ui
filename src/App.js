import React from 'react';
import dotenv from 'dotenv';
import Assembly from './components/Assembly';
dotenv.config();

const App = function () {
  return <Assembly />;
};

export default App;
