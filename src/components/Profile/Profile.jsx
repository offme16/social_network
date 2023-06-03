import MyPostContainer from './MyPosts/MyPostContainer';
import Profileinfo from './ProfileInfo/Profileinfo';

const Profile = (props) =>{
    return(
      <div >
        <Profileinfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
        <MyPostContainer store={props.store}/>
      </div>
    );
}
export default Profile;