import cla from './MyPost.module.css';
import Post from './Post/Post';
import './Post/Post.module.css';
import React from 'react';
import Friends from '../Friends/Friends';



const MyPost = (props) =>{

  let newpostEl = React.createRef();

  let onaddPost = () =>{
     props.addPost()
  };

  let onPostChange= () => {
    let text = newpostEl.current.value;
     props.raki(text);
  };
  
  
     let PostF = props.post.map(p => <Post message={p.post} countlike={p.countlike}/>)  
    return(
      <div className={cla.flex__column} >
        <div className={cla.MYp}> My post
         <div className={cla.New__Post}>
          <textarea onChange={onPostChange} value={props.newPostText} ref={newpostEl} placeholder='У вас есть что-то новое?'/>
          <div className={cla.forbut}>
          <button onClick={onaddPost}>Publish</button>
          </div>
         </div>
          <div className={cla.posts}>
            {PostF}
          </div>
       </div>
       <div className={cla.Friend__list}>
          <Friends st={props.frlist}/>
          </div>
      </div>
    );
}
export default MyPost;