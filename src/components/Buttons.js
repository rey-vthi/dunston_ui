import React from 'react';

const Buttons = function ({ executor, stepInto, next }) {
  return (
    <div>
      <button onClick={executor}>Run</button>
      <button onClick={stepInto}>Step Into</button>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Buttons;
