import React, {useState} from 'react';
import Editor from './Editor';

const Assembly = function ({ machine }) {
  const [result, setResult] = useState('');
  const [program, setProgram] = useState('');

  const execute = function () {
    machine.load(program);
    machine.execute();
    setResult(machine.getPrn().join('\n'));
  };

  return (
    <div>
      <Editor updateProgram={setProgram} />
      <button onClick={execute}>Run</button>
      <div>{result}</div>
    </div>
  );
};

export default Assembly;
