import MyPost from './MyPosts/MyPost';
import Profileinfo from './ProfileInfo/Profileinfo';
const Profile = (props) =>{
 
    return(
      <div >
        <Profileinfo  />
        <MyPost state={props.state}/>
      </div>
    );
}
export default Profile;