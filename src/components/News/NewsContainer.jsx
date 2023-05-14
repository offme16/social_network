import StoreContext from '../../StoreContext';
import { addNewsactionCreator, updateNewNewsCreator } from '../../redux/news-reducer';
import News from './News'


const NewsContainer = () =>{
    return <StoreContext.Consumer>
        {
            (store)=>{
                let state = store.getState().NewsPage;

                let PostNews = () =>{
                    store.dispatch(addNewsactionCreator())
                }
            
                let PostNewsText= (Text) =>{
                    store.dispatch(updateNewNewsCreator(Text))
                }
            
                return( <News PostNews={PostNews}
                     PostNewsText={PostNewsText}
                      newsdata={state.NewsData}
                       NewNewsText={state.NewNewsText}/>);
            }
        }
    </StoreContext.Consumer>
}
export default NewsContainer;