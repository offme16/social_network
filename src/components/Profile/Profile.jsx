import MyPost from './MyPosts/MyPost';
import cla from './Profile.module.css';
const Profile = () =>{
    return(
      <div >
        <div className={cla.ANB}>
        <img className={cla.profimg} src="https://img5.goodfon.ru/wallpaper/nbig/c/dc/kirpich-kirpichnaia-stena-fon-fotofon-tekstura.jpg"/>
        <div className={cla.avatar}></div>
        <div className={cla.discr}>Name:bulat</div>
        </div>
        <MyPost />
      </div>
    );
}
export default Profile;