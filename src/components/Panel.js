import React from 'react';
import styled from 'styled-components';
import ProgramExecutor from './ProgramExecutor';
import ResultBox from './ResultBox';

const StyledPanel = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 40vh;

  & div {
    width: 50%;
    height: 100%;
  }
`;

const Panel = function ({ result, ...rest }) {
  return (
    <StyledPanel>
      <ProgramExecutor {...rest} />
      <ResultBox result={result} />
    </StyledPanel>
  );
};

export default Panel;
