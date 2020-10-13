import React from 'react';
import styled from 'styled-components';
import Editor from './Editor';
import ResultBox from './ResultBox';

const StyledPanel = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 40vh;
`;

const Panel = function ({ result, setProgram }) {
  return (
    <StyledPanel>
      <Editor updateProgram={setProgram} />
      <ResultBox result={result} />
    </StyledPanel>
  );
};

export default Panel;
