import { contacts as userContacts } from "../static-data";
import { DELETE_CONTACT } from "../actions/constants/action-types";

export default function contacts(state = userContacts, action) {
  switch(action.type){
  	case DELETE_CONTACT:
  	  
      const contactId = action.payload;
      const { [contactId]: deleted, ...newState } = state
   console.log("new state is ", newState)
        return newState;

    default:
      return state;
  }
}