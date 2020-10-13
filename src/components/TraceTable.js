import React from 'react';
import styled from 'styled-components';

const Table = styled.div`
  width: 80%;
  height: 200px;
  margin: 20px;
  border: 1px solid black;
`;

const TraceTable = function ({ table }) {
  return <Table>{JSON.stringify(table)}</Table>;
};

export default TraceTable;
