import cla from './MyPost.module.css';
import Post from './Post/Post';
import './Post/Post.module.css';
import React from 'react';
import Friends from '../Friends/Friends';
const MyPost = (props) =>{
  let newpostEl = React.createRef();
  let addPost = () =>{
    let text = newpostEl.current.value;
     props.addPost(text);
  }
     let PostF = props.state.PostData.map(p => <Post message={p.post} countlike={p.countlike}/>)  
    return(
      <div className={cla.flex__column} >
        <div className={cla.MYp}> My post
         <div className={cla.New__Post}>
          <textarea  ref={newpostEl} placeholder='У вас есть что-то новое?'></textarea>
          <div className={cla.forbut}>
          <button onClick={addPost}>Publish</button>
          </div>
         </div>
          <div className={cla.posts}>
            {PostF}
          </div>
       </div>
       <div className={cla.Friend__list}>
          <Friends state={props.state}/>
          </div>
      </div>
    );
}
export default MyPost;