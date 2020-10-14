import React from 'react';
import Assembly from './components/Assembly';
import Machine from '@craftybones/assembly_simulator';

const App = function () {
  return <Assembly machine={new Machine()} />;
};

export default App;
