const UPDATE_NEW_MESS_TEXT = "UPDATE-NEW-MESS-TEXT";
const SEND_MESS = "SEND_MESS";

let initialState = {
  UsersData: [
    {
      id: 0,
      name: "Mikky",
      url__ava__user:
        "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/adult_people_avatar_man_male_employee_tie-256.png",
    },
    {
      id: 1,
      name: "Kate",
      url__ava__user:
        "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/girl_long_hair_beautiful_people_woman_teenager_avatar-256.png",
    },
    {
      id: 2,
      name: "Denni",
      url__ava__user:
        "https://cdn2.iconfinder.com/data/icons/metaverse-12/512/metaverse_vr_virtual_reality_avatar_headset_male-256.png",
    },
    {
      id: 3,
      name: "Jean",
      url__ava__user:
        "https://cdn4.iconfinder.com/data/icons/people-avatar-filled-outline/64/girl_female_young_people_woman_teenager_avatar-256.png",
    },
  ],
  MessageData: [
    { id: 0, mes: "HI?WHO?" },
    { id: 1, mes: "ohhh,wtf?!" },
  ],
  Newmessage: "",
};

const messagereduce = (state = initialState, action) => {
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
