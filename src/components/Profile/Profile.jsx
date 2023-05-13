import MyPostContainer from './MyPosts/MyPostContainer';
import Profileinfo from './ProfileInfo/Profileinfo';

const Profile = (props) =>{
    return(
      <div >
        <Profileinfo  />
        <MyPostContainer store={props.store}/>
      </div>
    );
}
export default Profile;