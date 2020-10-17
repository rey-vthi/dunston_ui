import React from 'react';
import styled from 'styled-components';
import TraceTable from './TraceTable';
import Stack from './Stack';

const HistoryBox = styled.div`
  margin-top: 10px;
  display: flex;
  height: 400px;
`;

const History = function ({state}) {
  return (
    <HistoryBox>
      <TraceTable table={state.table} />
      <Stack stack={state.stack} />
    </HistoryBox>
  );
};

export default History;
