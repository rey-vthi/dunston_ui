import React from 'react';
import styled from 'styled-components';

const StackBox = styled.div`
  width: 10%;
  height: 200px;
  margin: 20px;
  border: 1px solid black;
  overflow: scroll;
`;

const StyledRow = styled.div`
  width: 100%;
  border: 1px solid black;
  height: 20px;
`;

const Row = function ({value}) {
  return <StyledRow>{value}</StyledRow>;
};

const generateRows = function (stack) {
  return stack.map((value, idx) => <Row key={idx} value={value}></Row>);
};

const Stack = function ({stack}) {
  return <StackBox>{generateRows(stack)}</StackBox>;
};

export default Stack;
