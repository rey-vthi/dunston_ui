import React, {useState} from 'react';
import Editor from './Editor';
import ResultBox from './ResultBox';
import Buttons from './Buttons';

const Assembly = function ({machine}) {
  const [result, setResult] = useState([]);
  const [program, setProgram] = useState('');

  const execute = function () {
    machine.load(program);
    machine.execute();
    setResult(machine.getPrn());
  };

  return (
    <div>
      <Editor updateProgram={setProgram} />
      <Buttons executor={execute} />
      <ResultBox result={result} />
    </div>
  );
};

export default Assembly;
