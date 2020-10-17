import Machine from '@craftybones/assembly_simulator';

const initial = function () {
  return {
    machine: new Machine(),
    program: '',
    result: [],
    table: [],
    stack: [],
  };
};

const reducer = function (state, action) {
  switch (action.type) {
    case 'editProgram':
      return {...state, program: action.program};
    case 'loadProgram':
      return {...initial(), program: action.program};
    case 'runProgram':
      state.machine.load(state.program);
      state.machine.execute();
      return {
        ...state,
        table: state.machine.getTable(),
        stack: state.machine.getStack(),
        result: state.machine.getPrn(),
      };
    case 'stepIntoProgram':
      state.machine.load(state.program);
      state.machine.executeStepWise(() => {});
      return {
        ...state,
        table: [],
        result: [],
        stack: [],
      };
    case 'executeNextLine':
      state.machine.nextStep();
      return {
        ...state,
        table: state.machine.getTable(),
        stack: state.machine.getStack(),
        result: state.machine.getPrn(),
      };
  }
};

export {reducer, initial};
