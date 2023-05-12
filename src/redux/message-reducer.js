const UPDATE_NEW_MESS_TEXT = "UPDATE-NEW-MESS-TEXT";
const SEND_MESS = "SEND_MESS";
const messagereduce = (state, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESS_TEXT:
      state.Newmessage = action.body;
      return state;
    case SEND_MESS:
      let body = state.Newmessage;
      state.Newmessage = "";
      state.MessageData.push({ id: 2, mes: body });
      return state;
    default:
      return state;
  }
};
export const sendMessCreator = () => ({
  type: SEND_MESS,
});

export const updateNewMesBodyCreater = (body) => ({
  type: UPDATE_NEW_MESS_TEXT,
  body: body,
});
export default messagereduce;
