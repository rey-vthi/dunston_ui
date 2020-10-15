import React from 'react';
import styled from 'styled-components';

const StyledNavBar = styled.div`
  display: flex;
`;

const Button = styled.a`
  border: 1px solid black;
  padding: 5px;
  text-decoration: none;
  color: black;
`;

const Load = function ({initialize}) {
  const showContent = function (event) {
    const files = event.target.files;
    if (files && files[0]) {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        initialize(e.target.result);
      };
      fileReader.readAsText(files[0]);
    }
  };

  return (
    <Button>
      <label htmlFor="Load">Load</label>
      <input
        id="Load"
        type="file"
        accept=".dtn"
        onChange={showContent}
        style={{display: 'none'}}
      />
    </Button>
  );
};

const Save = function ({program}) {
  return (
    <Button href={`data:text/plain,${program}`} download="program.dtn">
      Save
    </Button>
  );
};

const NavBar = function ({initialize, program}) {
  return (
    <StyledNavBar>
      <Save program={program} />
      <Load initialize={initialize} />
    </StyledNavBar>
  );
};

export default NavBar;
