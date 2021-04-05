import { CLEAR_APP } from '../action/App'

const initialState = {}

function userReducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }

  switch (action.type) {
    case CLEAR_APP: {
      return initialState
    }
    case 'INPUT_VALUE1': {
      return { ...action.payload }
    }

    default:
      return state
  }
}

export default userReducer
