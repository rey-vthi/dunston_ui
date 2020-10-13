import React from 'react';
import styled from 'styled-components';

const Result = styled.div`
  width: 30vw;
  height: 25vh;
  border: 1px solid lightgray;
`;

const ResultBox = function ({result}) {
  return <Result>{result.join('\n')}</Result>;
};

export default ResultBox;
