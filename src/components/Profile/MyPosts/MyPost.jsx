import cla from './MyPost.module.css';
import Post from './Post/Post';
import './Post/Post.module.css';




const MyPost = (props) =>{
     let PostF = props.state.PostData.map(p => <Post message={p.post} countlike={p.countlike}/>)
    return(
      <div className={cla.MYp}> My post
         <div className='New-Post'>
          <textarea>У вас есть что-то новое?</textarea>
          <button>Add</button>
         </div>
          <div className={cla.posts}>
            {PostF}
          </div>
      </div>
    );
}
export default MyPost;