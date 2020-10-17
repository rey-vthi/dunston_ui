import React from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
  width: 98%;
  height: 90%;
`;

const Editor = function ({state, dispatch}) {
  const updateText = function (event) {
    dispatch({type: 'editProgram', program: event.target.value});
  };

  return <TextArea onChange={updateText} value={state.program} />;
};

export default Editor;
