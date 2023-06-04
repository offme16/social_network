import { addPost } from '../../../redux/profile-reducer';
import MyPost from './MyPost';
import { connect } from 'react-redux'; 


let mapStateToProps=(state)=>{
   return{
      post: state.ProfilePage.PostData,
      newPostText: state.ProfilePage.newPostText,
      frlist: state.ProfilePage.FriendsData,
   }
}

const MyPostContainer = connect(mapStateToProps, { addPost })(MyPost)

export default MyPostContainer;