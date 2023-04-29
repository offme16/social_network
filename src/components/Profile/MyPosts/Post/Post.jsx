import cla from './Post.module.css';
const Post = (props) =>{
    return(
      <div className={cla.item}> <img className={cla.img__user} src='https://cdn2.iconfinder.com/data/icons/metaverse-12/512/metaverse_vr_virtual_reality_avatar_headset_male-256.png' alt='user'/>
        {props.message}
        <div><span className={cla.postspan}><img src='https://cdn3.iconfinder.com/data/icons/font-awesome-regular-1/512/heart-256.png' alt='like'/> {props.countlike}</span></div>
       </div>
    );
}
export default Post;