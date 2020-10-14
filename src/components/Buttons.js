import React, { useContext } from 'react';
import Machine from '../MachineContext';

const Buttons = function ({ program, updateState }) {
  const machine = useContext(Machine);

  const executor = function () {
    machine.load(program);
    machine.execute();
    updateState();
  };

  const stepInto = function () {
    machine.load(program);
    machine.executeStepWise(updateState);
  };

  const next = function () {
    machine.nextStep();
  };

  return (
    <div>
      <button onClick={executor}>Run</button>
      <button onClick={stepInto}>Step Into</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Buttons;
