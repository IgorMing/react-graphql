import gql from 'graphql-tag';
import { httpClient } from 'utils';

// Actions
const FETCH_INFO = 'HOME/FETCH_INFO';

const INITIAL_STATE = {
  users: []
};

// Reducer
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_INFO:
      return {
        ...state,
        users: action.payload
      };
    default: return state;
  }
}

// Action Creators
export function getInfo() {
  return async (dispatch) => {
    const response = await httpClient.query({
      query: gql`
        {
          users {
            id,
            name,
            cpf
          }
        }
      `
    });

    dispatch({
      type: FETCH_INFO,
      payload: response.data.users
    });
  };
}
