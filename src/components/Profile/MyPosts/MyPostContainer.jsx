import { addPostactionCreator, updatenewpostCreater } from '../../../redux/profile-reducer';
import MyPost from './MyPost';
import { connect } from 'react-redux'; 


 /*const MyPostContainer = () =>{
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

    
}*/
let mapStateToProps=(state)=>{
   return{
      post: state.ProfilePage.PostData,
      newPostText: state.ProfilePage.newPostText,
      frlist: state.ProfilePage.FriendsData,
   }
}
let mapDispatchToProps=(dispatch)=>{
   return{
      addPost:()=>{
         dispatch(addPostactionCreator());
      },
      raki:(text)=>{
         let action = (updatenewpostCreater(text));
         dispatch(action);
      }
   }
}


const MyPostContainer = connect(mapStateToProps,mapDispatchToProps)(MyPost)

export default MyPostContainer;