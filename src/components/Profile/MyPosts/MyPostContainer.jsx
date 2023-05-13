import { addPostactionCreator, updatenewpostCreater } from '../../../redux/profile-reducer';
import MyPost from './MyPost';

const MyPostContainer = (props) =>{
let state=props.store.getState().ProfilePage;

    let addPost = () =>{
     props.store.dispatch(addPostactionCreator());
  };

  let onPostChange= (text) => {
     let action = (updatenewpostCreater(text));
     props.store.dispatch(action);
  };
  
    return(<MyPost addPost={addPost} raki={onPostChange} post={state.PostData} newPostText={state.newPostText} frlist={state.FriendsData}/>);
    
}
export default MyPostContainer;