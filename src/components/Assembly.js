import React, { useState } from 'react';
import Panel from './Panel';
import History from './History';

import Machine from '../MachineContext';

const Assembly = function ({ machine }) {
  const [program, setProgram] = useState('');
  const [result, setResult] = useState([]);
  const [table, setTable] = useState([]);
  const [stack, setStack] = useState([]);

  const updateState = function () {
    setResult(machine.getPrn());
    setTable(machine.getTable().slice());
    setStack(machine.getStack().slice());
  };

  return (
    <div>
      <Machine.Provider value={machine}>
        <Panel
          result={result}
          program={program}
          setProgram={setProgram}
          updateState={updateState}
        />
      </Machine.Provider>
      <History table={table} stack={stack} />
    </div>
  );
};

export default Assembly;
