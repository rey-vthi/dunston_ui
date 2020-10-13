import React, {useState} from 'react';
import Buttons from './Buttons';
import Panel from './Panel';

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
      <Panel result={result} setProgram={setProgram}/>
      <Buttons executor={execute} />
    </div>
  );
};

export default Assembly;
