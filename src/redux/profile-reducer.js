const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST-TEXT";
const profilereduce = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        post: state.newPostText,
        countlike: 0,
      };
      state.PostData.push(newPost);
      state.newPostText = "";
      return state;

    case UPDATE_NEW_POST:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostactionCreator = () => ({
  type: ADD_POST,
});

export const updatenewpostCreater = (text) => ({
  type: UPDATE_NEW_POST,
  newText: text,
});
export default profilereduce;
