import cla from './MyPost.module.css';
import Post from './Post/Post';
import './Post/Post.module.css';
const MyPost = () =>{
    return(
      <div className={cla.MYp}> My post
      <div className='New-Post'>
        <textarea>У вас есть что-то новое?</textarea>
        <button>Add</button>
      </div>
      <div className={cla.posts}>
        <Post message='капец, овечка такая красивая!!' countlike='1600'/>
        <Post message="ДАааааа!" countlike='500'/>
        <Post/>
        <Post/>
        </div>
      </div>
    );
}
export default MyPost;