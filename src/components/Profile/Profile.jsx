import MyPost from './MyPosts/MyPost';
import Profileinfo from './ProfileInfo/Profileinfo';

const Profile = (props) =>{
 
    return(
      <div >
        <Profileinfo  />
        <MyPost state={props.state} addPost={props.addPost}/>
      </div>
    );
}
export default Profile;