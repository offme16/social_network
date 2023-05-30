import MyPostContainer from './MyPosts/MyPostContainer';
import Profileinfo from './ProfileInfo/Profileinfo';

const Profile = (props) =>{
  debugger
    return(
      <div >
        <Profileinfo profile={props.profile}/>
        <MyPostContainer store={props.store}/>
      </div>
    );
}
export default Profile;