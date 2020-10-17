import React from 'react';
import styled from 'styled-components';
import ProgramExecutor from './ProgramExecutor';
import ResultBox from './ResultBox';

const StyledPanel = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 60vh;

  & > div {
    width: 50%;
    height: 100%;
  }
`;

const Panel = function ({state, dispatch}) {
  return (
    <StyledPanel>
      <ProgramExecutor state={state} dispatch={dispatch} />
      <ResultBox result={state.result} />
    </StyledPanel>
  );
};

export default Panel;
