import React from 'react';
import styled from 'styled-components';

const Results = styled.div`
  border: 1px solid black;
`;

const ResultBox = function ({ result }) {
  const generateResults = (result) =>
    result.map((res, idx) => <p key={idx}>{res}</p>);
  
  return <Results>{generateResults(result)}</Results>;
};

export default ResultBox;
