import { SAVE_AVAILABLE_BOOKS, TURN_OFF_SPINNER } from '../actions'

const initialState = {
  available: [],
  isLoading: true,
}

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_AVAILABLE_BOOKS:
      return {
        ...state,
        available: action.payload,
      }

    case TURN_OFF_SPINNER:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}

export default bookReducer
