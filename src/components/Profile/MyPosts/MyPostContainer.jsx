import { addPost, raki } from '../../../redux/profile-reducer';
import MyPost from './MyPost';
import { connect } from 'react-redux'; 


let mapStateToProps=(state)=>{
   return{
      post: state.ProfilePage.PostData,
      newPostText: state.ProfilePage.newPostText,
      frlist: state.ProfilePage.FriendsData,
   }
}
/*let mapDispatchToProps=(dispatch)=>{
   return{
      addPost:()=>{
         dispatch(addPostactionCreator());
      },
      raki:(text)=>{
         let action = (updatenewpostCreater(text));
         dispatch(action);
      }
   }
}*/


const MyPostContainer = connect(mapStateToProps, { addPost, raki })(MyPost)

export default MyPostContainer;