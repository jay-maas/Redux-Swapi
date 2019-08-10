import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE
} from "../actions";
const initialState = {
  characters: [],
  isLoading: false,
  error: ''
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  console.log('reducer', action)
  switch (action.type) {
    case FETCH_CHARACTERS_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        characters: [...state.characters, ...action.payload]
      }
    case FETCH_CHARACTERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default:
      return state;
  }
};
