import MyPost from './MyPosts/MyPost';
import Profileinfo from './ProfileInfo/Profileinfo';

const Profile = (props) =>{
    return(
      <div >
        <Profileinfo  />
        <MyPost state={props.ProfilePage}
                addPost={props.addPost}
                newPostText={props.ProfilePage.newPostText}
                updateNewsPostText={props.updateNewsPostText}/>
      </div>
    );
}
export default Profile;