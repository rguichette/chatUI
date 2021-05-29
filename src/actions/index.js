import { SET_ACTIVE_USER_ID, DELETE_CONTACT, SEND_MESSAGE} from "./constants/action-types";
export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

export const deleteContact = user_id=>({
  type: DELETE_CONTACT,
  payload: user_id
})

export const sendMessage = (message, userId) =>({
  type: SEND_MESSAGE,
  payload: {
    message, userId
  }
})