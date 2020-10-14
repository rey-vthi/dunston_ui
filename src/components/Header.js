import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 20px;
`;

const NavBar = styled.div`
  display: flex;
`;

const Button = styled.a`
  border:1px solid black;
  padding:5px;
  text-decoration:none;
  color:black;
`

const Save = function ({ program }) {
  return (
    <Button href={`data:text/plain,${program}`} download="program.dtn">
      Save
    </Button>
  );
};

const Header = function ({ program }) {
  return (
    <StyledHeader>
      <Title>Assembly simulator</Title>
      <NavBar>
        <Save program={program} />
      </NavBar>
    </StyledHeader>
  );
};

export default Header;
