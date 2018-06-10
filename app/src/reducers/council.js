import {
  GET_HR_CHAIRS,
  GET_HR_MEMBERS,
  GET_SEC_CHAIRS,
  GET_SEC_MEMBERS,
  GET_ECOSOC_CHAIRS,
  GET_ECOSOC_MEMBERS,
  GET_POL_CHAIRS,
  GET_POL_MEMBERS
} from '../actions/council.js';

const council = (state = {}, action) => {
  switch(action.type) {
    case GET_HR_CHAIRS:
      return {
        ...state,
        HRChairs: action.data
      };
    case GET_HR_MEMBERS:
      return {
        ...state,
        HRMembers: action.data
      };
    case GET_SEC_CHAIRS:
      return {
        ...state,
        SECChairs: action.data
      };
    case GET_SEC_MEMBERS:
      return {
        ...state,
        SECMembers: action.data
      };
    case GET_ECOSOC_CHAIRS:
      return {
        ...state,
        ECOSOCChairs: action.data
      };
    case GET_ECOSOC_MEMBERS:
      return {
        ...state,
        ECOSOCMembers: action.data
      };
    case GET_POL_CHAIRS:
      return {
        ...state,
        POLChairs: action.data
      };
    case GET_POL_MEMBERS:
      return {
        ...state,
        POLMembers: action.data
      };
    default:
      return state;
  }
}

export default council;
