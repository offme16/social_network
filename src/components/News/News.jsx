import { NavLink, Navigate } from 'react-router-dom';
import cla from './News.module.css';


const NewsItem = (props) => {
    return( <div className={cla.content}>
    <div className={cla.news__user}><img className={cla.imgnews__user} src={props.avauser} alt='n'/><NavLink to='/profile'>{props.username}</NavLink></div>
    <div className={cla.content__text}>{props.newstext}
    </div>
    <img src={props.newsimg} alt='n'/>    
     </div>)
}


const News = (props) =>{

    let NewsList = props.newsdata.map(n => <NewsItem avauser={n.avauser} username={n.username} newstext={n.newstext} newsimg={n.newsimg}/>)

    let onPostNews = () =>{
        props.PostNews();
    }

    let onPostNewsText= (event) =>{
        let Text = event.target.value;
        props.PostNewsText(Text);
    }
    if(!props.isAuth){
        return <Navigate to={'/login'}/>
    }
    return(
        <div className={cla.container}>
            <div className={cla.textarea}>
                <textarea placeholder='What is new?' value={props.NewNewsText} onChange={onPostNewsText}></textarea>
               <div className={cla.buttonnews}> <button onClick={onPostNews}>Post</button></div>
            </div>
        <div >
            {NewsList}
        </div>
        </div>
    );
}
export default News;