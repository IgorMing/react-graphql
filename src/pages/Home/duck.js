// Actions
const SIMPLE_CALL = 'HOME/SIMPLE_CALL';
const RESET_ALL = 'HOME/RESET_ALL';

const INITIAL_STATE = {
  calls: 0
};

// Reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SIMPLE_CALL:
      return {
        ...state,
        calls: state.calls + 1
      };
    case RESET_ALL:
      return {
        ...state,
        ...INITIAL_STATE
      };
    default: return state;
  }
}

// Action Creators
export function callFlow() {
  return {
    type: SIMPLE_CALL
  };
}

export function resetFlow() {
  return {
    type: RESET_ALL
  };
}
