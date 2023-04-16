import MyPost from './MyPosts/MyPost';
import cla from './Profile.module.css';
const Profile = () =>{
    return(
      <div >
        <div className={cla.ANB}>
        <img className={cla.profimg} src="https://img5.goodfon.ru/wallpaper/nbig/c/dc/kirpich-kirpichnaia-stena-fon-fotofon-tekstura.jpg"/>
        <div className={cla.avatar}> <img src='https://cdn2.iconfinder.com/data/icons/animal-vivid-volume-2/256/Monkey-256.png'/></div>
        <div className={cla.discr}>Name:Бубузьяна</div>
        </div>
        <MyPost />
        
      </div>
    );
}
export default Profile;