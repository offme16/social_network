import { connect } from 'react-redux';
import { addNewsactionCreator, updateNewNewsCreator } from '../../redux/news-reducer';
import News from './News'


/*const NewsContainer = () =>{
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
}*/

let mapStateToProps = (state) =>{
    return{
        newsdata: state.NewsPage.NewsData,
        NewNewsText: state.NewsPage.NewNewsText,
    }
}
let mapDispatchToProps = (dispatch)=>{
    return{
        PostNews:()=>{
            dispatch(addNewsactionCreator());
        },
        PostNewsText:(Text)=>{
            dispatch(updateNewNewsCreator(Text));
        }
    }
}
const NewsContainer = connect(mapStateToProps,mapDispatchToProps)(News);
export default NewsContainer;