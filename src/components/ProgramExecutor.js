import React from 'react';
import Editor from './Editor';
import Buttons from './Buttons';

const ProgramExecutor = function ({ setProgram, ...rest }) {
  return (
    <div>
      <Editor updateProgram={setProgram} />
      <Buttons {...rest} />
    </div>
  );
};

export default ProgramExecutor;
