import React, { useContext } from 'react';
import styled from 'styled-components';

import Machine from '../MachineContext';

const StyledButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const Button = styled.div`
  width:30%;
  font-size:20px;
  font-weight:300;
  border:1px solid black;
  border-radius:2px;
  padding:5px;
  text-align:center;
`;

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
    <StyledButtons>
      <Button onClick={executor}>Run</Button>
      <Button onClick={stepInto}>Step Into</Button>
      <Button onClick={next}>Next</Button>
    </StyledButtons>
  );
};

export default Buttons;
