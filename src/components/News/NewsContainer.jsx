import { addNewsactionCreator, updateNewNewsCreator } from '../../redux/news-reducer';
import News from './News'


const NewsContainer = (props) =>{
    let state = props.store.getState().NewsPage;

    let PostNews = () =>{
        props.store.dispatch(addNewsactionCreator())
    }

    let PostNewsText= (Text) =>{
        props.store.dispatch(updateNewNewsCreator(Text))
    }

    return( <News PostNews={PostNews} PostNewsText={PostNewsText} newsdata={state.NewsData} NewNewsText={state.NewNewsText}/>);
}
export default NewsContainer;