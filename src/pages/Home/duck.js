import gql from 'graphql-tag';
import { httpClient } from 'utils';

// Actions
const FETCH_INFO = 'HOME/FETCH_INFO';

const INITIAL_STATE = {
  info: {}
};

// Reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_INFO:
      return {
        ...state,
        calls: state.calls + 1
      };
    default: return state;
  }
}

// Action Creators
export function getInfo() {
  return async (dispatch) => {
    const response = await httpClient
      .query({
        query: gql`
        {
          rates(currency: "USD") {
            currency
          }
        }
      `
      });
    dispatch({
      type
    })
  };
}
