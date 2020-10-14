import React from 'react';
import styled from 'styled-components';

const StackBox = styled.div`
  width: 9%;
`;

const StyledRow = styled.div`
  width: 100%;
  height: 20px;
  padding: 4px;
  text-align: center;
  border: 1px solid black;
`;

const Row = function ({ value }) {
  return <StyledRow>{value}</StyledRow>;
};

const generateRows = function (stack) {
  return stack.map((value, idx) => <Row key={idx} value={value}></Row>);
};

const Stack = function ({ stack }) {
  return (
    <StackBox>
      <Row value="STACK" />
      {generateRows(stack)}
    </StackBox>
  );
};

export default Stack;
