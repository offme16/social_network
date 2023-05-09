import MyPost from './MyPosts/MyPost';
import Profileinfo from './ProfileInfo/Profileinfo';

const Profile = (props) =>{
    return(
      <div >
        <Profileinfo  />
        <MyPost state={props.ProfilePage}
                newPostText={props.ProfilePage.newPostText}
                dispatch={props.dispatch}/>
      </div>
    );
}
export default Profile;