import StoreContext from '../../../StoreContext';
import { addPostactionCreator, updatenewpostCreater } from '../../../redux/profile-reducer';
import MyPost from './MyPost';

const MyPostContainer = () =>{
return <StoreContext.Consumer>
   {
   (store) =>{
      let state=store.getState().ProfilePage;

    let addPost = () =>{
     store.dispatch(addPostactionCreator());
  };

  let onPostChange= (text) => {
     let action = (updatenewpostCreater(text));
     store.dispatch(action);
  };
  
    return(<MyPost addPost={addPost}
       raki={onPostChange}
        post={state.PostData}
         newPostText={state.newPostText}
          frlist={state.FriendsData}/>);
   }
   }</StoreContext.Consumer>

    
}
export default MyPostContainer;