import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';

const StyledHeader = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 20px;
`;

const Header = function (props) {
  return (
    <StyledHeader>
      <Title>Assembly simulator</Title>
      <NavBar {...props} />
    </StyledHeader>
  );
};

export default Header;
