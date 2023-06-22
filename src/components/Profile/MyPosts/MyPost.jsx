import cla from './MyPost.module.css';
import Post from './Post/Post';
import './Post/Post.module.css';
import React from 'react';
import Friends from '../Friends/Friends';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreater, requiredField } from '../../../utilits/vlidators';
import { Textarea } from '../../common/FormsControls';



const MyPost = (props) =>{

  let onaddPost = (values) =>{
     props.addPost(values.AddPost)
  };
 
     let PostF = props.post.map(p => <Post message={p.post} countlike={p.countlike}/>)  

    return(
      <div className={cla.flex__column} >
        <div className={cla.MYp}> My post
          <PostReduxForm  onSubmit={onaddPost}/>
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



const PostForm = (props) =>{
  return(
    <form onSubmit={props.handleSubmit}>
  <div className={cla.New__Post}>
    <Field component={Textarea} name="AddPost" placeholder="У вас есть что-то новое?" validate={[requiredField, maxLengthCreater(100)]} />
     <div className={cla.forbut}>
     <button>Publish</button>
  </div>
 </div>
    </form>
)}
const PostReduxForm = reduxForm({
  form: "AddPostProfile"
})(PostForm)

export default MyPost;