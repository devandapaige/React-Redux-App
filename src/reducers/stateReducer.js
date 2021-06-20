//importing the actions created:
import { ERROR, SUCCESS, LOADING } from "../actions/stateActions";

const initialState = {
  loading: false,
  data: {},
  error: "",
};
export const stateReducer = (state = initialState, action) => {
  switch (action) {
    case LOADING:
      return {
        //always going to ...state.
        ...state,
        loading: true,
      };
    case SUCCESS:
      return {
        ...state,
        //now we're updating the changed state and saying that the data we received from the API call is now the payload.
        loading: false,
        data: action.payload,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
