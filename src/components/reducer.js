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
  const {machine, program} = state;
  switch (action.type) {
    case 'editProgram':
      return {...state, program: action.program};
    case 'loadProgram':
      return {...initial(), program: action.program};
    case 'runProgram':
      machine.load(program);
      machine.execute();
      return {
        ...state,
        table: machine.getTable(),
        stack: machine.getStack(),
        result: machine.getPrn(),
      };
    case 'stepIntoProgram':
      machine.load(program);
      machine.executeStepWise(() => {});
      return {
        ...state,
        table: [],
        result: [],
        stack: [],
      };
    case 'executeNextLine':
      machine.nextStep();
      return {
        ...state,
        table: machine.getTable(),
        stack: machine.getStack(),
        result: machine.getPrn(),
      };
    default:
      throw new Error();
  }
};

export {reducer, initial};
