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
};

const messagereduce = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESS:
      let body = action.Newmessage;
      return {
        ...state,
        MessageData: [...state.MessageData, { id: 2, mes: body }],
      };
    default:
      return state;
  }
};
export const sendMessclick = (Newmessage) => ({
  type: SEND_MESS,
  Newmessage,
});

export default messagereduce;
