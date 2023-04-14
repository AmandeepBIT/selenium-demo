import {
  FETCH_COUNTRIES_CLEAR,
  FETCH_COUNTRIES_FAILURE,
  FETCH_COUNTRIES_REQUEST,
  FETCH_COUNTRIES_SUCCESS,
} from "../../constants/Constants";

const countryReducers = (state , action) => {
  switch (action.type) {
    case FETCH_COUNTRIES_REQUEST:
      return {
        loading: true,
        data: [],
        error: undefined,
      };

    case FETCH_COUNTRIES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: undefined,
      };

    case FETCH_COUNTRIES_FAILURE:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
      case FETCH_COUNTRIES_CLEAR:
      return {
        loading: false,
        data: [],
        error: undefined,
      };
    default:
      return state;
  }
};

export default countryReducers;
