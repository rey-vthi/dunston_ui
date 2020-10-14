import React from 'react';
import styled from 'styled-components';

const Results = styled.div`
  border: 1px solid black;
`;

const Print = styled.div`
  height: 20px;
  padding: 5px;
`;

const ResultBox = function ({ result }) {
  const generateResults = (result) =>
    result.map((res, idx) => <Print key={idx}>{res}</Print>);

  return <Results>{generateResults(result)}</Results>;
};

export default ResultBox;
