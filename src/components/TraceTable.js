import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  width: 90%;
  overflow: scroll;
`;

const Table = styled.table`
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid black;
  border-collapse: collapse;
  padding: 5px;
  text-align: center;
`;

const Td = styled.td`
  border: 1px solid black;
  border-collapse: collapse;
  padding: 5px;
  text-align: center;
`;

const Inst = styled(Td)`
  text-align: left;
`;

const Row = function ({ row }) {
  const { A, B, C, D, EQ, NE, GT, LT, CL, NL, INST, PRN } = row;

  return (
    <tr>
      <Td>{CL}</Td>
      <Td>{NL}</Td>
      <Inst>{INST}</Inst>
      <Td>{A}</Td>
      <Td>{B}</Td>
      <Td>{C}</Td>
      <Td>{D}</Td>
      <Td>{EQ}</Td>
      <Td>{NE}</Td>
      <Td>{GT}</Td>
      <Td>{LT}</Td>
      <Td>{PRN}</Td>
    </tr>
  );
};

const generateRows = function (table) {
  return table.map((row, idx) => <Row key={idx} row={row} />);
};

const TraceTable = function ({ table }) {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>CL</Th>
            <Th>NL</Th>
            <Th>INSTRUCTION</Th>
            <Th>A</Th>
            <Th>B</Th>
            <Th>C</Th>
            <Th>D</Th>
            <Th>EQ</Th>
            <Th>NE</Th>
            <Th>GT</Th>
            <Th>LT</Th>
            <Th>PRINT</Th>
          </tr>
        </thead>
        <tbody>{generateRows(table)}</tbody>
      </Table>
    </TableContainer>
  );
};

export default TraceTable;
