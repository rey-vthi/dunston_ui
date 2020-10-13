import React from 'react';

const Buttons = function ({executor}) {
  return (
    <div>
      <button onClick={executor}>Run</button>
    </div>
  );
};

export default Buttons;
