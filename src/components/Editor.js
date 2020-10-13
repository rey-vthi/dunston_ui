import React, {useState} from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
  width: 30%;
  height: 100%;
`;

const Editor = function ({updateProgram}) {
  const [text, setText] = useState('');

  const updateText = function (event) {
    setText(event.target.value);
    updateProgram(event.target.value);
  };

  return <TextArea onChange={updateText} value={text} />;
};

export default Editor;
