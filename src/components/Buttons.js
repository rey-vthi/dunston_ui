import React from 'react';
import styled from 'styled-components';

const StyledButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;

const Button = styled.div`
  width: 30%;
  font-size: 20px;
  font-weight: 300;
  border: 1px solid black;
  border-radius: 2px;
  padding: 5px;
  text-align: center;
`;

const Buttons = function ({dispatch}) {
  return (
    <StyledButtons>
      <Button onClick={() => dispatch({type: 'runProgram'})}>Run</Button>
      <Button onClick={() => dispatch({type: 'stepIntoProgram'})}>
        Step Into
      </Button>
      <Button onClick={() => dispatch({type: 'executeNextLine'})}>Next</Button>
    </StyledButtons>
  );
};

export default Buttons;
