import cla from './Post.module.css';
const Post = (props) =>{
    return(
      <div className={cla.item}> <img src='https://cdn3.iconfinder.com/data/icons/artificial-intelligence-ultra-color/60/029_-_Machine_Learning-256.png' alt='w'/>
        {props.message}
        <div><span className={cla.postspan}>like {props.countlike}</span></div>
       </div>
    );
}
export default Post;