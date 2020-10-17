import React, {useReducer} from 'react';
import Header from './Header';
import Panel from './Panel';
import History from './History';
import {reducer, initial} from './reducer';

const Assembly = function () {
  const [state, dispatch] = useReducer(reducer, {}, initial);

  return (
    <div>
      <Header state={state} dispatch={dispatch} />
      <Panel state={state} dispatch={dispatch} />
      <History state={state} />
    </div>
  );
};

export default Assembly;
