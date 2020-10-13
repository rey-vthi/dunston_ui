import React, { useState } from 'react';
import Panel from './Panel';
import History from './History';

const Assembly = function ({ machine }) {
  const [program, setProgram] = useState('');
  const [result, setResult] = useState([]);
  const [table, setTable] = useState([]);

  const fetchProgramState = function () {
    setResult(machine.getPrn());
    setTable(machine.getTable().slice());
  };

  const execute = function () {
    machine.load(program);
    machine.execute();
    fetchProgramState();
  };

  const stepInto = function () {
    machine.load(program);
    machine.executeStepWise(fetchProgramState);
  };

  const next = function () {
    machine.nextStep();
  };

  return (
    <div>
      <Panel
        result={result}
        setProgram={setProgram}
        executor={execute}
        stepInto={stepInto}
        next={next}
      />
      <History table={table} />
    </div>
  );
};

export default Assembly;
