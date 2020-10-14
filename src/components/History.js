import React from 'react';
import styled from 'styled-components';
import TraceTable from './TraceTable';
import Stack from './Stack';

const HistoryBox = styled.div`
  display: flex;
`;

const History = function ({table, stack}) {
  return (
    <HistoryBox>
      <TraceTable table={table} />
      <Stack stack={stack} />
    </HistoryBox>
  );
};

export default History;
