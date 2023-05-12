import { NavLink } from 'react-router-dom';
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
    let state = props.store.getState().NewsPage;
    let NewsList = state.NewsData.map(n => <NewsItem avauser={n.avauser} username={n.username} newstext={n.newstext} newsimg={n.newsimg}/>)
    return(
        <div className={cla.container}>
            {NewsList}
        </div>
    );
}
export default News;