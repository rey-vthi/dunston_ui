import React from 'react';
import Editor from './Editor';
import Buttons from './Buttons';

const ProgramExecutor = function (props) {
  return (
    <div>
      <Editor {...props} />
      <Buttons {...props} />
    </div>
  );
};

export default ProgramExecutor;
