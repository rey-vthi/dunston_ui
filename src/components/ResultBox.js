import React from 'react';
import styled from 'styled-components';

const Results = styled.div`
  width: 50%;
  height: 100%;
  border: 1px solid black;
`;

const ResultBox = function ({ result }) {
  const generateResults = (result) =>
    result.map((res, idx) => <div key={idx}>{res}</div>);
  
  return <Results>{generateResults(result)}</Results>;
};

export default ResultBox;
