import { NavLink } from 'react-router-dom';
import cla from './News.module.css';
import { addNewsactionCreator, updateNewNewsCreator } from '../../redux/news-reducer';
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
    let NewNewsText = state.NewNewsText;
    let PostNews = () =>{
        props.store.dispatch(addNewsactionCreator())
    }

    let onPostNews= (event) =>{
        let Text = event.target.value;
        props.store.dispatch(updateNewNewsCreator(Text))
    }

    return(
        <div className={cla.container}>
            <div className={cla.textarea}>
                <textarea placeholder='What is new?' value={NewNewsText} onChange={onPostNews}></textarea>
               <div className={cla.buttonnews}> <button onClick={PostNews}>Post</button></div>
            </div>
        <div >
            {NewsList}
        </div>
        </div>
    );
}
export default News;