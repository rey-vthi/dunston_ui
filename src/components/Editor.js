import React, { useState } from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
  width: 90%;
  height: 90%;
`;

const Editor = function ({ setProgram, program }) {

  const updateText = function (event) {
    setProgram(event.target.value);
  };

  return <TextArea onChange={updateText} value={program} />;
};

export default Editor;
